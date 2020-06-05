import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export default class ProfileForm extends Component {
  state = {
    formData: {
      name: { value: '', error: false },
      description: { value: '', error: false },
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

  handleSend = (event) => {
    const { onSend } = this.props;
    if (typeof onSend === 'function') {
      const { formData } = this.state;
      const fieldName = event.currentTarget.name;
      if (formData[fieldName].value) {
        onSend({
          [fieldName]: formData[fieldName].value,
        });
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            [fieldName]: { ...formData[fieldName], value: '' },
          },
        }));
      } else {
        this.setState((prevState) => ({
          formData: {
            ...prevState.formData,
            [fieldName]: { ...formData[fieldName], error: true },
          },
        }));
      }
    }
  };

  render() {
    const { formData } = this.state;

    return (
      <>
        <div className="edit-name">
          <TextField
            label="Application name"
            name="name"
            value={formData.name.value}
            error={formData.name.error}
            autoFocus
            onChange={this.handleInput}
            variant="outlined"
          />
          <Fab name="name" onClick={this.handleSend} variant="round" color="primary" size="small">
            <EditIcon />
          </Fab>
        </div>
        <div className="edit-content">
          <TextField
            className="edit-content_field"
            label="Application description"
            name="description"
            value={formData.description.value}
            error={formData.description.error}
            onChange={this.handleInput}
            multiline
            rows="3"
            variant="outlined"
          />
          <Fab
            name="description"
            onClick={this.handleSend}
            variant="round"
            color="primary"
            size="small"
          >
            <EditIcon />
          </Fab>
        </div>
      </>
    );
  }
}

ProfileForm.propTypes = {
  onSend: PropTypes.func,
};

ProfileForm.defaultProps = {
  onSend: () => {},
};
