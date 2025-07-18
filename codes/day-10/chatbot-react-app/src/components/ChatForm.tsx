import { useRef, type FormEvent } from "react"

type ChatFormPropType = {
    chatHandler: (args: string) => void
}
const ChatForm = ({ chatHandler }: Readonly<ChatFormPropType>) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const userMessage = inputRef.current?.value.trim();
        if (!userMessage) return;

        chatHandler(userMessage)
    }
    return (
        <form onSubmit={handleSubmit} className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required ref={inputRef} />
            <button className="material-symbols-rounded">
                arrow_upward
            </button>
        </form>
    )
}

export default ChatForm