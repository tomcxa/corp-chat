import React from 'react'
import MessageCard from './MessageCard'

const Messages = () => {
    const messages = [
        { user: 'Golubok', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit', date: '22/05/2020 22:00'},
        { user: 'Antonio', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit', date: '22/06/2020 22:00'}
    ]

    return (
        <section className="messages-container">
            <ul className="messages-list unstyle">
                {
                    messages.length
                        && messages.map((message, index) => (
                            <li key={index} className="messages-list__item">
                                <MessageCard message={message} />
                            </li>
                        ))
                }
            </ul>
        </section>
    )
}

export default Messages
