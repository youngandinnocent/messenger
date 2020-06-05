import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ChatList } from 'components/ChatList';

configure({ adapter: new Adapter() });

let chats;
let initialState;
let successState;
let failureState;

beforeEach(() => {
  chats = [
    {
      id: 1,
      name: 'ChatsName1',
      unread: false,
      marked: false,
      avatarSrc: '',
    },
    {
      id: 2,
      name: 'ChatsName2',
      messages: [],
      unread: false,
      marked: false,
      avatarSrc: '',
    },
  ];

  initialState = {
    formData: {
      name: { value: '', error: false },
      avatarSrc: { value: '' },
    },
  };

  successState = {
    formData: {
      name: { value: 'New chat', error: false },
      avatarSrc: { value: 'https://telegram.me/react_js' },
    },
  };

  failureState = {
    formData: {
      name: { value: '', error: true },
      avatarSrc: { value: '' },
    },
  };
});

describe('ChatList component', () => {
  // rendering test
  it('should rendered self', () => {
    const component = shallow(<ChatList chats={chats} />);

    expect(component.find('WithStyles(ForwardRef(ListItemText))').first().props().primary).toBe(
      'ChatsName1',
    );
    expect(component.find('WithStyles(ForwardRef(ListItemText))').last().props().primary).toBe(
      'ChatsName2',
    );

    expect(component.find('.chat-add')).toHaveLength(1);
  });

  // function test
  it('should call linkTo function twice', () => {
    const linkToSpy = jest.fn();
    const component = shallow(<ChatList linkTo={linkToSpy} />);

    component.find('.chat-item').first().simulate('click');
    component.find('.chat-item').last().simulate('click');
    expect(linkToSpy).toHaveBeenCalledTimes(2);
  });

  it('should delete chat', () => {
    const deleteChatSpy = jest.fn();
    const component = shallow(<ChatList deleteChat={deleteChatSpy} />);

    component
      .find('WithStyles(ForwardRef(Fab))')
      .first()
      .simulate('click', { stopPropagation: () => ({}) });
    expect(deleteChatSpy).toHaveBeenCalledTimes(1);
  });

  it('should add chat', () => {
    const addChatSpy = jest.fn();
    const component = shallow(<ChatList addChat={addChatSpy} />);
    expect(component.state()).toEqual(initialState);

    component
      .find('WithStyles(ForwardRef(TextField))')
      .first()
      .simulate('change', { target: { name: 'name', value: 'New chat' } });
    component
      .find('WithStyles(ForwardRef(TextField))')
      .last()
      .simulate('change', { target: { name: 'avatarSrc', value: 'https://telegram.me/react_js' } });
    expect(component.state()).toEqual(successState);

    component.find('WithStyles(ForwardRef(Fab))').last().simulate('click');
    expect(component.state()).toEqual(initialState);

    expect(addChatSpy).toHaveBeenCalledTimes(1);
  });

  it('should fail to add chat', () => {
    const addChatSpy = jest.fn();
    const component = shallow(<ChatList addChat={addChatSpy} />);
    expect(component.state()).toEqual(initialState);

    component.find('WithStyles(ForwardRef(Fab))').last().simulate('click');
    expect(component.state()).toEqual(failureState);

    expect(addChatSpy).toHaveBeenCalledTimes(0);
  });
});
