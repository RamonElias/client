import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import Base from './Base';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Base />
    </Provider>
  );

  expect(getByText(/Toolbox/i)).toBeInTheDocument();
});
