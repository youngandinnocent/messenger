import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessageField from 'components/MessageField';
import { MessageList } from 'components/MessageList';
import MessageForm from 'components/MessageForm';

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

describe('MessageField component', () => {
  it('should rendered self and children', () => {
    const component = shallow(<MessageField messages={messages} />);

    expect(component.find('.message-field')).toHaveLength(1);
    expect(component.find(MessageList).props().messages[1].author).toBe('User2');
    expect(component.find(MessageForm)).toBeTruthy();
  });

  it('should rendered select chat message', () => {
    const component = shallow(<MessageField />);

    expect(component.find('.select-chat').text()).toBe('Please select chat from list');
  });
});
