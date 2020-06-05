import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.css';

export default class MessageForm extends Component {
  state = {
    formData: {
      author: { value: 'Human', error: false },
      content: { value: '', error: false },
    },
  };

  handleInput = (event) => {
    const fieldName = event.target.name;
    const filedValue = event.target.value;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [fieldName]: { value: filedValue, error: !filedValue },
      },
    }));
  };

  handleSend = () => {
    const { formData } = this.state;
    const authorValue = formData.author.value;
    const contentValue = formData.content.value;
    if (authorValue && contentValue) {
      const { onSend } = this.props;
      if (typeof onSend === 'function') {
        onSend({ authorValue, contentValue });
        this.setState((prevState) => ({
          formData: {
            author: { ...prevState.formData.author },
            content: { ...prevState.formData.content, value: '' },
          },
        }));
      }
    } else {
      this.setState((prevState) => ({
        formData: {
          author: { ...prevState.formData.author, error: !authorValue },
          content: { ...prevState.formData.content, error: !contentValue },
        },
      }));
    }
  };

  handleKeyDownCtrlEnter = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleSend();
    }
  };

  render() {
    const { formData } = this.state;

    return (
      <div className="message-form">
        <TextField
          className="message-form__author"
          label="Author"
          name="author"
          value={formData.author.value}
          error={formData.author.error}
          onChange={this.handleInput}
        />
        <TextField
          className="message-form__content"
          label="Content"
          name="content"
          multiline
          autoFocus
          value={formData.content.value}
          error={formData.content.error}
          onKeyDown={this.handleKeyDownCtrlEnter}
          onChange={this.handleInput}
        />
        <Fab variant="round" color="primary" onClick={this.handleSend}>
          <SendIcon />
        </Fab>
      </div>
    );
  }
}

MessageForm.propTypes = {
  onSend: PropTypes.func.isRequired,
};
