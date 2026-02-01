import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header name', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Sai Teja Kavuri/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
