import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a named item to the local list', () => {
  const { getByLabelText, getByText } = render(<App />);

  fireEvent.change(getByLabelText('Your name'), { target: { value: 'Ana' } });
  fireEvent.change(getByLabelText('Item to bring'), { target: { value: 'Cake' } });
  fireEvent.click(getByText('Add Item'));

  expect(getByText('Ana is bringing Cake')).toBeInTheDocument();
  expect(getByLabelText('Item to bring').value).toBe('');
});

test('does not add blank items', () => {
  const { getByLabelText, getByText, queryByRole } = render(<App />);

  fireEvent.change(getByLabelText('Your name'), { target: { value: 'Ana' } });
  fireEvent.change(getByLabelText('Item to bring'), { target: { value: '   ' } });
  fireEvent.click(getByText('Add Item'));

  expect(queryByRole('listitem')).not.toBeInTheDocument();
});
