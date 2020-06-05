import React from 'react';
import PropTypes from 'prop-types';

import MessageForm from 'components/MessageForm';
import { MessageList, messagesType } from 'components/MessageList';

import './MessageField.css';

export default function MessageField(props) {
  const { messages, sendMessage } = props;

  return (
    <div className="message-field">
      {messages ? (
        <MessageList messages={messages} />
      ) : (
        <p className="select-chat">Please select chat from list</p>
      )}
      {messages && <MessageForm onSend={sendMessage} />}
    </div>
  );
}

MessageField.propTypes = {
  sendMessage: PropTypes.func,
  messages: messagesType,
};

MessageField.defaultProps = {
  sendMessage: () => {},
  messages: null,
};
