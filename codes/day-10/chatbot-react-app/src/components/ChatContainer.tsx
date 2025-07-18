import { useEffect, useState } from 'react'
import { type Chat } from '../models/chat'
import ChatMessage from './ChatMessage'
import ChatForm from './ChatForm'
import ChatBotHeader from './ChatBotHeader'

const createSocket = () => new WebSocket('ws://localhost:8082');

const ChatContainer = () => {
    const [socket, setSocket] = useState<WebSocket>(createSocket())
    const [chatHistory, setChatHistory] = useState<Chat[]>([
        { role: 'bot', text: 'Hi there. How Can I help you today?' }
    ])

    useEffect(
        () => {
            const openHandler = (ev: any) => console.log('WebSocket connection established!');
            const closeHandler = (event: any) => console.log('WebSocket connection closed:', event.code, event.reason);
            const errorHandler = (error: any) => console.error('WebSocket error:', error);

            const messageHandler = (event: any) => {
                setChatHistory(
                    (history) => {
                        const filtered = history.filter(h => !(h.role === 'bot' && h.text === 'Thinking...'))
                        return [...filtered, { role: 'bot', text: event.data }]
                    }
                )
            }

            socket.addEventListener('open', openHandler)
            socket.addEventListener('message', messageHandler)
            socket.addEventListener('close', closeHandler)
            socket.addEventListener('error', errorHandler)

            return () => {
                socket.removeEventListener('open', openHandler)
                socket.removeEventListener('message', messageHandler)
                socket.removeEventListener('close', closeHandler)
                socket.removeEventListener('error', errorHandler)
            }
        }, [socket]
    )

    // useEffect(
    //     () => {
    //         return () => {
    //             socket.close()
    //         }
    //     }, []
    // )

    const handleChatHistory = (chatMessage: string) => {
        setChatHistory(
            (history) => {
                return [...history, { role: 'user', text: chatMessage },]
            }
        )
        setTimeout(
            () => {
                setChatHistory(
                    (history) => {
                        return [...history, { role: 'bot', text: 'Thinking...' }]
                    }
                )
                setTimeout(
                    () => socket.send(chatMessage), 500
                )
            }, 300
        )

    }
    return (
        <div className="container">
            <div className="chatbot-popup">

                {/** chat bot header */}
                <ChatBotHeader />
                {/** chat bot body */}
                <div className="chat-body">
                    {
                        chatHistory.map(chat => {
                            return <ChatMessage chatInfo={chat} key={chat.text} />
                        })
                    }
                </div>

                {/** chat bot footer */}
                <div className='chat-footer'>
                    <ChatForm chatHandler={handleChatHistory} />
                </div>
            </div>
        </div>
    )
}

export default ChatContainer