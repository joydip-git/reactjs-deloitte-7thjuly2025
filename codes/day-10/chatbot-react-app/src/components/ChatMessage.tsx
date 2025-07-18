import type { Chat } from "../models/chat"
import ChatBotIcon from "./ChatBotIcon"

type ChatMessagePropType = {
    chatInfo: Chat
}
const ChatMessage = ({ chatInfo }: Readonly<ChatMessagePropType>) => {
    return (
        <div className={`message ${chatInfo.role === 'bot' ? 'bot' : 'user'}-message`}>
            {chatInfo.role === 'bot' && <ChatBotIcon />}
            <p className="message-text">{chatInfo.text}</p>
        </div>
    )
}

export default ChatMessage