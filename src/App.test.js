import { render, screen } from '@testing-library/react';
import AwesomeSlider from './Slider';

test('renders learn react link', () => {
  render(<AwesomeSlider />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
