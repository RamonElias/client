import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import Mirror from './pages/Mirror';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Mirror />
    </Provider>
  );

  expect(getByText(/Submit/i)).toBeInTheDocument();
});
