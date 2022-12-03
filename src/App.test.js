import { render, screen } from '@testing-library/react';
import CadPessoal from './CadPessoal';

test('renders learn react link', () => {
  render(<CadPessoal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
