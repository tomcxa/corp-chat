import React from "react";

const Rooms = () => {
    const rooms = [
        {
            id: 1,
            title: 'feed',
            messages: [
                { user: 'Golubok', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit', date: '22/05/2020 22:00'},
                { user: 'Antonio', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit consectetur adipisicing elit', date: '22/06/2020 22:00'}
            ]
        },
        {
            id: 2,
            title: 'important',
            messages: [
                { user: 'Golubok', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit', date: '22/05/2020 22:00'},
                { user: 'Antonio', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit', date: '22/06/2020 22:00'}
            ]
        }
    ]
    return (
        <aside className="rooms">
            <h2 className="rooms__title">Rooms</h2>
            <ul className="rooms-list unstyle">
                {
                    rooms.map(room => (<li key={room.id} className="rooms-list__item">{room.title}</li>))
                }
                <li className="rooms-list__item active">feed</li>
                <li className="rooms-list__item">important</li>
            </ul>
        </aside>
    );
};

export default Rooms;
