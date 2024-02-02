import React, { useState } from "react";

const Bell = () => {
  const [isNotificationsVisible, setIsNotificationsVisible] = useState(true);
  const [message, setMessage] = useState("The notification has been accepted!");

  const [isRead, setIsRead] = useState(false);
  const [isAccepted, setIsAccepted] = useState(true);
  const [notify, setNotify] = useState(false);
  //   const [decline, setDecline] = useState(false);

  function handle() {
    setIsNotificationsVisible((prev) => !prev);
  }

  function read() {
    setIsRead((prev) => !prev);
  }
  //   console.log(isAccepted);
  function accepted() {
    setIsAccepted(false);
    setNotify(true);
  }

  function btnDeline() {
    setIsAccepted(false);
    setNotify(true);

    setMessage("The notification has been declined!");
  }

  return (
    <>
      <div className="container">
        <button onClick={handle} className="bell-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-bell"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>
        </button>

        <div
          className={`notifications-wrapper ${
            isNotificationsVisible ? "visible" : ""
          }`}
        >
          <div className="heading-wrapper">
            <h1>Notifications</h1>
            <button onClick={read} className="mark-as-read-btn">
              Mark all as read
            </button>
          </div>

          <ul className="notifications-list">
            <li className={`notification-item ${isRead ? "hidden" : ""}`}>
              <div className="img-wrapper">
                <img
                  src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="user profile picture"
                />
              </div>
              <div>
                <p>
                  <strong>Paul Waga</strong> shared the file{" "}
                  <strong>Android UI Kit</strong> with you.
                </p>
                <small className="notification-time">An hour ago</small>
                {isAccepted && (
                  <div className="notification-item-btns">
                    <button onClick={btnDeline} className="decline-btn">
                      Decline
                    </button>
                    <button onClick={accepted} className="accept-btn">
                      Accept
                    </button>
                  </div>
                )}
                {notify && <p className="acceptedBtn">{message}</p>}
              </div>
            </li>
            <li className={`notification-item ${isRead ? "hidden" : ""}`}>
              <div className="img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1524290266577-e90173d9072a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="user profile picture"
                />
              </div>
              <div>
                <p>
                  <strong>Denise Selover</strong> made you an editor in the team{" "}
                  <strong>Power</strong>.
                </p>
                <small className="notification-time">Yesterday</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Bell;
