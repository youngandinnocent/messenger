/* eslint-disable jest/no-commented-out-tests */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { LayoutContainer } from 'containers/LayoutContainer';
import Layout from 'components/Layout';

configure({ adapter: new Adapter() });

let chatsState;
let chats;
let messages;
let message;
let profileName;
let content;

beforeEach(() => {
  chatsState = {
    '1': {
      id: 1,
      name: 'ChatsName1',
      messages: [],
      unread: false,
      marked: false,
      avatarSrc: '',
    },
    '2': {
      id: 2,
      name: 'ChatsName2',
      messages: [],
      unread: false,
      marked: false,
      avatarSrc: '',
    },
  };

  chats = [chatsState['1'], chatsState['2']];

  messages = [
    {
      author: 'User1',
      content: 'Message1 from user1',
    },
    {
      author: 'User2',
      content: 'Message2 from user2',
    },
  ];

  message = { authorValue: 'Trinity', contentValue: 'The Matrix has you' };

  profileName = 'Messenger name';

  content = { description: 'Description text' };
});

describe('LayoutContainer component', () => {
  // rendering test
  it('should rendered Layout with props', () => {
    const component = shallow(
      <LayoutContainer
        chats={chats}
        messages={messages}
        profileName={profileName}
        isLoading
        isError
        newChatIndex={1}
        chatsState={chatsState}
        sendMessage={jest.fn()}
        addChat={jest.fn()}
        deleteChat={jest.fn()}
        linkTo={jest.fn()}
        loadChats={jest.fn()}
        content={content}
      />,
    );
    expect(component.find(Layout)).toHaveLength(1);
    expect(component.find(Layout).props().profileName).toBe(profileName);
    expect(component.find(Layout).props().chats[0].id).toEqual(1);
    expect(component.find(Layout).props().messages[1].author).toBe('User2');
    expect(component.find(Layout).props().content.description).toBe(content.description);
  });

  // function test
  it('should call its methods', () => {
    const componentDidMountSpy = jest.spyOn(LayoutContainer.prototype, 'componentDidMount');
    const loadChatsSpy = jest.fn();
    const loadProfileSpy = jest.fn();
    const linkToSpy = jest.fn();
    const sendMessageSpy = jest.fn();
    const addChatSpy = jest.fn();
    const deleteChatSpy = jest.fn();
    const changeProfileSpy = jest.fn();

    const component = shallow(
      <LayoutContainer
        chats={[]}
        messages={messages}
        isLoading
        newChatIndex={1}
        chatsState={chatsState}
        sendMessage={sendMessageSpy}
        addChat={addChatSpy}
        deleteChat={deleteChatSpy}
        linkTo={linkToSpy}
        loadChats={loadChatsSpy}
        loadProfile={loadProfileSpy}
        changeProfile={changeProfileSpy}
      />,
    );
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    expect(loadChatsSpy).toHaveBeenCalledTimes(1);
    expect(loadProfileSpy).toHaveBeenCalledTimes(1);

    component.instance().handleNavigate('/profile');
    expect(linkToSpy).toHaveBeenCalledWith('/profile');

    component.instance().handleMessageSend(message);
    expect(sendMessageSpy).toHaveBeenCalledTimes(1);

    component.instance().handleChatAdd(chats[0]);
    expect(addChatSpy).toHaveBeenCalledTimes(1);
    expect(linkToSpy).toHaveBeenCalledWith('/chats/1');

    component.instance().handleChatDelete(2);
    expect(deleteChatSpy).toHaveBeenCalledTimes(1);
    expect(linkToSpy).toHaveBeenCalledWith('/');

    component.instance().handleForm(content);
    expect(changeProfileSpy).toHaveBeenCalledTimes(1);
  });

  // it("should", () => {
  //   const component = shallow(<LayoutRedux />);
  //   console.log('component: ', component.debug());
  // });
});
