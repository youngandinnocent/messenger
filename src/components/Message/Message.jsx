import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import './Message.scss';

export function Message(props) {
  const { author, content } = props;
  const classes = className('message', {
    'message-owner': author !== 'NDR-114',
    'message-robot': author === 'NDR-114',
  });

  return (
    <div className={classes}>
      <div>{content}</div>
      <div className="message-sender">{author}</div>
    </div>
  );
}

export const messageType = {
  author: PropTypes.string,
  content: PropTypes.string,
};

Message.propTypes = messageType;

Message.defaultProps = {
  author: '',
  content: '',
};
