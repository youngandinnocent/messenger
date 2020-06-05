import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from 'components/Header';

configure({ adapter: new Adapter() });

let defaultName;
let initialState;
let showChatsState;
let showProfileState;

beforeEach(() => {
  defaultName = 'messenger';

  initialState = {
    chats: true,
    profile: true,
  };

  showChatsState = {
    chats: false,
    profile: true,
  };

  showProfileState = {
    chats: true,
    profile: false,
  };
});

describe('Header component', () => {
  // rendering test
  it('should rendered self', () => {
    const component = shallow(<Header />);

    expect(component.find('h1').text()).toBe(defaultName);
    expect(component.find('.header-nav')).toHaveLength(1);
    expect(component.find('.mobile-nav-chats')).toHaveLength(1);
    expect(component.find('.mobile-nav-profile')).toHaveLength(1);
  });

  // function test
  it('should call componentDidUpdate twice', () => {
    const componentDidUpdateSpy = jest.spyOn(Header.prototype, 'componentDidUpdate');

    const component = shallow(<Header onClickBody showFunc={() => {}} />);
    expect(component.state()).toEqual(initialState);

    component
      .find('.mobile-nav-chats WithStyles(ForwardRef(Fab))')
      .simulate('click', { currentTarget: { name: 'chats' } });
    expect(component.state()).toEqual(initialState);

    expect(componentDidUpdateSpy).toHaveBeenCalledTimes(2);
  });

  it('should show and hide mobile components', () => {
    const showFuncSpy = jest.fn();

    const component = shallow(<Header showFunc={showFuncSpy} />);
    expect(component.state()).toEqual(initialState);

    component
      .find('.mobile-nav-profile WithStyles(ForwardRef(Fab))')
      .simulate('click', { currentTarget: { name: 'profile' } });
    expect(component.state()).toEqual(showProfileState);

    component
      .find('.mobile-nav-profile WithStyles(ForwardRef(Fab))')
      .simulate('click', { currentTarget: { name: 'profile' } });
    expect(component.state()).toEqual(initialState);

    component
      .find('.mobile-nav-chats WithStyles(ForwardRef(Fab))')
      .simulate('click', { currentTarget: { name: 'chats' } });
    expect(component.state()).toEqual(showChatsState);

    component
      .find('.mobile-nav-chats WithStyles(ForwardRef(Fab))')
      .simulate('click', { currentTarget: { name: 'chats' } });
    expect(component.state()).toEqual(initialState);

    expect(showFuncSpy).toHaveBeenCalledTimes(4);
  });

  it('should call linkTo function twice', () => {
    const linkToSpy = jest.fn();

    const component = shallow(<Header linkTo={linkToSpy} />);

    component.find('.header-nav WithStyles(ForwardRef(ListItemText))').first().simulate('click');
    component.find('.header-nav WithStyles(ForwardRef(ListItemText))').last().simulate('click');
    expect(linkToSpy).toHaveBeenCalledTimes(2);
  });
});
