import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MessageList } from 'components/MessageList';
import { Message } from 'components/Message';

configure({ adapter: new Adapter() });

let messages;
beforeEach(() => {
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
});

describe('MessageList component', () => {
  it('should rendered self and children', () => {
    const component = shallow(<MessageList messages={messages} />);

    expect(component.find('.message-list')).toHaveLength(1);
    expect(component.find(Message).first().props().content).toBe('Message1 from user1');
  });

  it('should rendered empty message', () => {
    const component = shallow(<MessageList />);

    expect(component.find('.message-list')).toHaveLength(1);
    expect(component.find(Message).last().props().author).toBe('');
    expect(component.find(Message).last().props().content).toBe('');
  });
});
