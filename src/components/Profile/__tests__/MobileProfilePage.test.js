/* eslint-disable quotes */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MobileProfilePage from 'components/Profile/MobileProfilePage';

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

describe('MobileProfilePage component', () => {
  it('props rendering', () => {
    const content = {
      description: 'mobile version\n',
      intern: 'Andrew Martin\n',
      teacher: 'Dennis Mansky\n',
      course: 'Robot for people\n',
      school: 'NorthAm Robotics\n',
    };
    act(() => {
      render(<MobileProfilePage content={content} />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"profile\\">
        <div class=\\"profile-body\\">
          <h3>Application description</h3>
          <p>mobile version
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

  it('default props rendering', () => {
    act(() => {
      render(<MobileProfilePage />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"profile\\">
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
      render(<MobileProfilePage isError />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<div>Try reloading the page. Server is not available...</div>"`,
    );
  });

  it('loading rendering', () => {
    act(() => {
      render(<MobileProfilePage isLoading />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<div>Loading...</div>"`);
  });

  it('not has header component', () => {
    const component = mount(<MobileProfilePage />);
    const header = component.find('.header');
    expect(header).toHaveLength(0);
  });
});
