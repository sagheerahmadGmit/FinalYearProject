// imports
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
import React from "react";

// function ChatFeed that takes in props
const ChatFeed = (props) => {
    // constants
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    // get all the people from the chat
    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
            key={`read_${index}`}
            className="read-receipt"
            // place an image of the person sending the message
            style={{
                float: isMyMessage ? 'right' : 'left', backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        />
    ));

    // function to get the messages
    const renderMessages = () => {
        // constant to get the objects key
        const keys = Object.keys(messages);

        // map the messages
        return keys.map((key, index) => {
            // get the message
            const message = messages[key];
            // the last message
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            // message sent by the user
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {/*if statement to check is the message sent by the user or someone else*/}
                        {isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    {/*statement depending who sent the message show the message on the screen (left for others, right for the user)*/}
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        });
    };

    // if there is no chat return only a div
    if (!chat) return <div />;

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {/*map all the people from that specific chat*/}
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                {/*get an active chat*/}
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
};

// export ChatFeed
export default ChatFeed;

