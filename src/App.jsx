import React from 'react';

function App() {
  return (
    <div className="App">
        <aside className="rooms">
          <h2 className="rooms__title">Rooms</h2>
          <ul className="rooms-list unstyle">
            <li className="rooms-list__item active">
              feed
            </li>
            <li className="rooms-list__item">
              important
            </li>
          </ul>
        </aside>
        <section className="messages-container">
          <ul className="messages-list unstyle">
            <li className="messages-list__item">
              <div className="message-card">
                <div className="message-card__header">
                  <span className="from">from: Antonio</span>
                </div>
                <div className="message-card__body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cum quam similique soluta laudantium reiciendis nesciunt,
                    corrupti itaque ad veniam distinctio possimus quo assumenda quasi nihil beatae dolor natus blanditiis eos.Sequi ut debitis modi eveniet accusantium atque laboriosam officiis similique voluptates, dolorum provident quasi est, minus officia, vitae perferendis. Enim impedit officiis ullam delectus sint praesentium consectetur aspernatur expedita dolore?
                  </p>
                </div>
                <div className="message-card__footer">
                  <span className="date">22/05/2020 22:00</span>
                </div>
                <div className="message-card__ctrlpanel">
                  
                </div>
              </div>
            </li>
            <li className="messages-list__item you">
              <div className="message-card">
                <div className="message-card__header">
                  <span className="from">from: you</span>
                </div>
                <div className="message-card__body">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cum quam similique soluta laudantium reiciendis nesciunt
                  </p>
                </div>
                <div className="message-card__footer">
                  <span className="date">22/05/2020 22:00</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
    </div>
  );
}

export default App;
