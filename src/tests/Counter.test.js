import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterMessage = screen.getByText(/0/i);
  expect(counterMessage).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const incrementedCount = screen.getByText(/1/i);
  expect(incrementedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const decrementedCount = screen.getByText(/-1/i);
  expect(decrementedCount).toBeInTheDocument();
});
