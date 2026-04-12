import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the main portfolio navigation', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const navigation = screen.getByRole('navigation', { name: /main navigation/i });

    expect(within(navigation).getAllByRole('link', { name: /practice areas/i }).length).toBeGreaterThan(0);
    expect(within(navigation).getAllByRole('link', { name: /resources/i }).length).toBeGreaterThan(0);
    expect(within(navigation).getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(0);
    expect(within(navigation).getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});
