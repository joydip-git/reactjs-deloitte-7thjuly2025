import { useState } from 'react'
import { type Chat } from '../models/chat'
import ChatMessage from './ChatMessage'
import ChatForm from './ChatForm'
import ChatBotHeader from './ChatBotHeader'
import ChatBotIcon from './ChatBotIcon'

const ChatContainer = () => {
    const [chatHistory, setChatHistory] = useState<Chat[]>([
        {
            role: 'model', text: 'Hi there how can i help ypu today?'
        }
    ])
    const generateBotResponse = async (history: Chat[]) => {
        const histories = history.map(({ role, text }) => {
            return {
                role,
                parts: [{ text }]
            }
        })
        try {
            console.log(import.meta.env.GEMINI_API_URL);
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBxLAVtoGSTsvKKAQVYGcd4aK9QWkTZRlM', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: histories })
            })
            console.log(response);
            const data = await response.json()
            if (!response.ok) throw new Error(data.error.message || 'something went worng')

            const apiResponeText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim()
            setChatHistory(
                (history) => {
                    const filtered = history.filter(h => !(h.role === 'model' && h.text === 'Thinking...'))
                    return [...filtered, { role: 'bot', text: apiResponeText }]
                }
            )

        } catch (error) {
            console.log(error);
        }
    }
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
                        return [...history, { role: 'model', text: 'Thinking...' }]
                    }
                )
                generateBotResponse([...chatHistory, { role: 'user', text: chatMessage }])
            }, 300)

    }
    return (
        <div className="container">
            <div className="chatbot-popup">

                {/** chat bot header */}
                <ChatBotHeader />


                {/** chat bot body */}
                {/* <div className="chat-body">
                    <div className="message bot-message">
                        <ChatBotIcon />
                        <p className="message-text">
                            Hey there. <br /> How Can I help you today?
                        </p>
                    </div>
                </div> */}
                <div className="chat-body">
                    {
                        chatHistory.map((chat, index) => {
                            return <ChatMessage chatInfo={chat} key={index} />
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