import ChatBotIcon from "./ChatBotIcon"

const ChatBotHeader = () => {
    return (
        <div className="chat-header">
            <div className="header-info">
                <ChatBotIcon />
                <h2 className="logo-text">Chatbot</h2>
            </div>
            <button type='button' className="material-symbols-rounded">
                keyboard_arrow_down                    </button>
        </div>
    )
}

export default ChatBotHeader