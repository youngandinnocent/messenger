/* eslint-disable quotes */
/* eslint-disable jest/no-commented-out-tests */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, renderIntoDocument, scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import pretty from 'pretty';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ProfilePage } from 'components/Profile';

configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('ProfilePage component', () => {
  it('rendering with props', () => {
    const name = 'messenger prototype';
    const content = {
      description: 'verification test\n',
      intern: 'Andrew Martin\n',
      teacher: 'Dennis Mansky\n',
      course: 'Robot for people\n',
      school: 'NorthAm Robotics\n',
    };
    act(() => {
      render(
        <ProfilePage
          name={name}
          content={content}
          linkTo={jest.fn()}
          showFunc={jest.fn()}
          onSend={jest.fn()}
          handleForm={jest.fn()}
          isLoading={false}
          isError={false}
        />,
        container,
      );
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"profile\\">
        <div class=\\"header\\">
          <div class=\\"mobile-nav-chats\\"><button class=\\"MuiButtonBase-root MuiFab-root MuiFab-extended MuiFab-sizeSmall MuiFab-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" name=\\"chats\\"><span class=\\"MuiFab-label\\"><svg class=\\"MuiSvgIcon-root MuiSvgIcon-colorPrimary\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
          <div class=\\"logo\\">
            <h1>messenger prototype</h1>
          </div>
          <div class=\\"header-nav\\">
            <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">chats</span></div>
            <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">profile</span></div>
          </div>
          <div class=\\"mobile-nav-profile\\"><button class=\\"MuiButtonBase-root MuiFab-root MuiFab-extended MuiFab-sizeSmall MuiFab-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" name=\\"profile\\"><span class=\\"MuiFab-label\\"><svg class=\\"MuiSvgIcon-root MuiSvgIcon-colorPrimary\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
        </div>
        <div class=\\"profile-body\\">
          <h3>Application description</h3>
          <p>verification test
          </p>
          <p><b>Intern: </b>Andrew Martin
          </p>
          <p><b>Teacher: </b>Dennis Mansky
          </p>
          <p><b>Course: </b>Robot for people
          </p>
          <p><b>School: </b>NorthAm Robotics
          </p>
          <div class=\\"profile-body_edit\\">
            <h3>Edit profile</h3>
            <div class=\\"edit-name\\">
              <div class=\\"MuiFormControl-root MuiTextField-root\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined Mui-focused Mui-focused\\" data-shrink=\\"true\\">Application name</label>
                <div class=\\"MuiInputBase-root MuiOutlinedInput-root Mui-focused Mui-focused MuiInputBase-formControl\\"><input aria-invalid=\\"false\\" name=\\"name\\" type=\\"text\\" class=\\"MuiInputBase-input MuiOutlinedInput-input\\" value=\\"\\">
                  <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline\\">
                    <legend class=\\"PrivateNotchedOutline-legendLabelled-3 PrivateNotchedOutline-legendNotched-4\\"><span>Application name</span></legend>
                  </fieldset>
                </div>
              </div><button class=\\"MuiButtonBase-root MuiFab-root MuiFab-sizeSmall MuiFab-primary\\" tabindex=\\"0\\" type=\\"button\\" name=\\"name\\"><span class=\\"MuiFab-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
            </div>
            <div class=\\"edit-content\\">
              <div class=\\"MuiFormControl-root MuiTextField-root edit-content_field\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined\\" data-shrink=\\"false\\">Application description</label>
                <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline\\"><textarea aria-invalid=\\"false\\" name=\\"description\\" rows=\\"3\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline\\"></textarea>
                  <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-1 MuiOutlinedInput-notchedOutline\\">
                    <legend class=\\"PrivateNotchedOutline-legendLabelled-3\\"><span>Application description</span></legend>
                  </fieldset>
                </div>
              </div><button class=\\"MuiButtonBase-root MuiFab-root MuiFab-sizeSmall MuiFab-primary\\" tabindex=\\"0\\" type=\\"button\\" name=\\"description\\"><span class=\\"MuiFab-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
            </div>
          </div>
        </div>
      </div>"
    `);
  });

  it('rendering with default props', () => {
    act(() => {
      render(<ProfilePage />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"profile\\">
        <div class=\\"header\\">
          <div class=\\"mobile-nav-chats\\"><button class=\\"MuiButtonBase-root MuiFab-root MuiFab-extended MuiFab-sizeSmall MuiFab-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" name=\\"chats\\"><span class=\\"MuiFab-label\\"><svg class=\\"MuiSvgIcon-root MuiSvgIcon-colorPrimary\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
          <div class=\\"logo\\">
            <h1>messenger</h1>
          </div>
          <div class=\\"header-nav\\">
            <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">chats</span></div>
            <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">profile</span></div>
          </div>
          <div class=\\"mobile-nav-profile\\"><button class=\\"MuiButtonBase-root MuiFab-root MuiFab-extended MuiFab-sizeSmall MuiFab-colorInherit\\" tabindex=\\"0\\" type=\\"button\\" name=\\"profile\\"><span class=\\"MuiFab-label\\"><svg class=\\"MuiSvgIcon-root MuiSvgIcon-colorPrimary\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
        </div>
        <div class=\\"profile-body\\">
          <h3>Application description</h3>
          <p>This is messenger prototype</p>
          <p><b>Intern: </b></p>
          <p><b>Teacher: </b></p>
          <p><b>Course: </b></p>
          <p><b>School: </b></p>
          <div class=\\"profile-body_edit\\">
            <h3>Edit profile</h3>
            <div class=\\"edit-name\\">
              <div class=\\"MuiFormControl-root MuiTextField-root\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined Mui-focused Mui-focused\\" data-shrink=\\"true\\">Application name</label>
                <div class=\\"MuiInputBase-root MuiOutlinedInput-root Mui-focused Mui-focused MuiInputBase-formControl\\"><input aria-invalid=\\"false\\" name=\\"name\\" type=\\"text\\" class=\\"MuiInputBase-input MuiOutlinedInput-input\\" value=\\"\\">
                  <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-5 MuiOutlinedInput-notchedOutline\\">
                    <legend class=\\"PrivateNotchedOutline-legendLabelled-7 PrivateNotchedOutline-legendNotched-8\\"><span>Application name</span></legend>
                  </fieldset>
                </div>
              </div><button class=\\"MuiButtonBase-root MuiFab-root MuiFab-sizeSmall MuiFab-primary\\" tabindex=\\"0\\" type=\\"button\\" name=\\"name\\"><span class=\\"MuiFab-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
            </div>
            <div class=\\"edit-content\\">
              <div class=\\"MuiFormControl-root MuiTextField-root edit-content_field\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined\\" data-shrink=\\"false\\">Application description</label>
                <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline\\"><textarea aria-invalid=\\"false\\" name=\\"description\\" rows=\\"3\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline\\"></textarea>
                  <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-5 MuiOutlinedInput-notchedOutline\\">
                    <legend class=\\"PrivateNotchedOutline-legendLabelled-7\\"><span>Application description</span></legend>
                  </fieldset>
                </div>
              </div><button class=\\"MuiButtonBase-root MuiFab-root MuiFab-sizeSmall MuiFab-primary\\" tabindex=\\"0\\" type=\\"button\\" name=\\"description\\"><span class=\\"MuiFab-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
            </div>
          </div>
        </div>
      </div>"
    `);
  });

  it('loading error rendering', () => {
    act(() => {
      render(<ProfilePage isError />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<div>Try reloading the page. Server is not available...</div>"`,
    );
  });

  it('loading rendering', () => {
    act(() => {
      render(<ProfilePage isLoading />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<div>Loading...</div>"`);
  });

  it('has two h3 tags', () => {
    const component = shallow(<ProfilePage />);
    expect(component.find('h3')).toHaveLength(2);
  });

  it('has a profile-body_edit class', () => {
    const component = renderIntoDocument(<ProfilePage />);
    const profileBodyEdit = scryRenderedDOMComponentsWithClass(component, 'profile-body_edit');
    expect(profileBodyEdit).toBeTruthy();
  });
});
