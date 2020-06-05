import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import Header from 'components/Header';
import { ChatList, chatsType } from 'components/ChatList';
import { messagesType } from 'components/MessageList';
import MessageField from 'components/MessageField';
import MobileProfilePage from 'components/Profile/MobileProfilePage';
import { contentTypes } from 'components/Profile';
import './Layout.css';

export default class Layout extends Component {
  state = {
    showChats: false,
    showProfile: false,
    isMobile: false,
    onClickBody: false,
  };

  componentDidMount() {
    if (document.documentElement.clientWidth <= 414) {
      this.setState((prevState) => ({
        ...prevState,
        isMobile: true,
      }));
    }
  }

  showFunc = (event) => {
    if (event.chats !== undefined || event.profile !== undefined) {
      this.setState({
        showChats: !!event.chats,
        showProfile: !!event.profile,
        onClickBody: false,
      });
    } else if (
      event.target &&
      (event.target.closest('.message-field') || event.target.closest('.chat-item'))
    ) {
      this.setState({
        showChats: false,
        showProfile: false,
        onClickBody: true,
        // showChats: event.chats ? true : false,
        // showProfile: event.profile ? true : false,
        // onClickBody: true
      });
    }
  };

  render() {
    const {
      chats,
      messages,
      profileName,
      sendMessage,
      addChat,
      deleteChat,
      isLoading,
      isError,
      linkTo,
    } = this.props;

    // ProfileContainer
    const { content, isLoadingProfile, isErrorProfile, handleForm } = this.props;

    const { showChats, showProfile, onClickBody } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>Try reloading the page. Server is not available...</div>;
    }

    return (
      <div className="layout">
        <Header
          name={profileName}
          onClickBody={onClickBody}
          linkTo={linkTo}
          showFunc={this.showFunc}
        />
        <div
          className="body"
          onClick={this.showFunc}
          onKeyPress={this.showFunc}
          role="button"
          tabIndex="0"
        >
          <div className={className('container-chat-list', { 'modal-chat-list': showChats })}>
            <ChatList chats={chats} addChat={addChat} deleteChat={deleteChat} linkTo={linkTo} />
          </div>
          <MessageField messages={messages} sendMessage={sendMessage} />
        </div>
        <div className={className('container-profile-page', { 'modal-profile-page': showProfile })}>
          {content && (
            <MobileProfilePage
              content={content}
              isLoading={isLoadingProfile}
              isError={isErrorProfile}
              handleForm={handleForm}
            />
          )}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  sendMessage: PropTypes.func,
  addChat: PropTypes.func,
  deleteChat: PropTypes.func,
  linkTo: PropTypes.func,
  handleForm: PropTypes.func,

  chats: chatsType,
  messages: messagesType,
  profileName: PropTypes.string,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,

  // ProfileContainer
  content: contentTypes,
  isLoadingProfile: PropTypes.bool,
  isErrorProfile: PropTypes.bool,
};

Layout.defaultProps = {
  sendMessage: () => {},
  addChat: () => {},
  deleteChat: () => {},
  linkTo: () => {},
  handleForm: () => {},

  chats: [],
  messages: [],
  profileName: 'messenger',
  isLoading: false,
  isError: false,

  // ProfileContainer
  content: {},
  isLoadingProfile: false,
  isErrorProfile: false,
};
