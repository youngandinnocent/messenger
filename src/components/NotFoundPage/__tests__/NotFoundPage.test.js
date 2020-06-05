import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import NotFoundPage from 'components/NotFoundPage';

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

describe('NotFoundPage component', () => {
  it('should rendered', () => {
    act(() => {
      render(<NotFoundPage />, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div>
        <h1>Page not found</h1>
        <h3>404 ERROR</h3>
      </div>"
    `);
  });
});
