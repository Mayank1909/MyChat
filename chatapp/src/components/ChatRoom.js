import React, { useState, useEffect } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
var stompClient = null;
const ChatRoom = () => {
    const [publicChats, setPublicChats] = useState([]);
    const [privateChats, setPrivateChats] = useState(new Map());
    const [userData, setUserData] = useState(
        {
            username: "",
            recievername: "",
            connected: false,
            message: "",
        }

    )
    useEffect(() => {
        console.log(userData);
    }, [userData]);
    const handleUserName = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, "username": value });
    }
    const registerUser = (event) => {
        let Sock = new SockJS('http://localhost:8000/ws')
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }
    const onConnected = () => {
        setUserData({ ...userData, "connected": true });
        stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
        stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessageReceived);
    }
    const onPublicMessageReceived = (payload) => {
        var payloadData = JSON.parse(payload.body);
        switch (payloadData.status) {
            case "JOIN":
                if (!privateChats.get(payloadData.senderName)) {
                    privateChats.set(payloadData.senderName, []);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats([...publicChats])
                break;
        }
    }
    const onPrivateMessageReceived = (payloadData) => {
        var payloadData = JSON.parse(payload);

        if (privateChats.get(payloadData.senderName)) {
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }
        else {
            let list = [];
            list.push(payloadData);

            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    }
    const onError = (err) => {
        console.log(err);

    }
    return (
        <div>
            <div className="container">
                {userData.connected ?
                    <div className='chat-box'>
                        <div className="member-list">
                            <ul>
                                <li>
                                    Chatroom
                                </li>
                                {[...privateChats.keys()].map((name, index) => (
                                    <li className='member' key={index}>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="chat-content">
                            <ul>
                                <li>
                                    Chatroom
                                </li>
                                {publicChats.map((chat, index) => (
                                    <li className='message' key={index}>
                                        {chat.senderName !== userData.username && <div className="avatar">{chat.senderName}</div>}
                                        <div className="message-data">{chat.message}</div>
                                        {chat.senderName === userData.username && <div className="avatar self">{chat.senderName}</div>}

                                    </li>
                                ))}
                            </ul>
                        </div>



                    </div> :
                    <div className='register'>
                        <input id="user-name" placeholder='Enter the user name'
                            value={userData.username}
                            onChange={handleUserName} />
                        <button type='button' onClick={registerUser}>connect</button>
                    </div>

                }


            </div>
        </div>
    )
}

export default ChatRoom;
