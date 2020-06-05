import React from 'react';
import PropTypes from 'prop-types';

import { Message, messageType } from 'components/Message';
import './MessageList.css';

export const messagesType = PropTypes.arrayOf(PropTypes.shape(messageType));

export function MessageList(props) {
  const { messages } = props;

  return (
    <div className="message-list">
      {/* eslint-disable-next-line react/no-array-index-key */}
      {messages && messages.map((message, index) => <Message {...message} key={index} />)}
    </div>
  );
}

MessageList.propTypes = {
  messages: messagesType,
};

MessageList.defaultProps = {
  messages: [
    {
      author: '',
      content: '',
    },
  ],
};
