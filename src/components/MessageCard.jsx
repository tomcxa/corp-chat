import React from 'react'

const MessageCard = ({ message }) => {
    return (
        <div className="message-card">
            <div className="message-card__header">
                <span className="from">from: {message.user}</span>
            </div>
            <div className="message-card__body">
                <p>
                    {message.text}
                </p>
            </div>
            <div className="message-card__footer">
                <span className="date">{message.date}</span>
            </div>
            <div className="message-card__ctrlpanel">

            </div>
        </div>
    )
}

export default MessageCard
