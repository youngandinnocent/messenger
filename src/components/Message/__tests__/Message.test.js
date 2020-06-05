import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Message } from 'components/Message';

configure({ adapter: new Adapter() });

let author;
let content;

beforeEach(() => {
  author = 'The Cherokee';
  content = `
      Great spirit, thunder birds fly
      We are wild and free.
      To fight and die by the open sky
      Spirit horse ride for me
  `;
});

describe('MessageList component', () => {
  it('should rendered self and children', () => {
    const component = shallow(<Message author={author} content={content} />);

    expect(component.find('.message-owner')).toHaveLength(1);
    expect(component.find('.message-owner div').first().text()).toBe(content);
  });

  it('should rendered empty message', () => {
    const component = shallow(<Message />);

    expect(component.find('.message-owner')).toHaveLength(1);
    expect(component.find('.message-sender').text()).toBe('');
  });
});
