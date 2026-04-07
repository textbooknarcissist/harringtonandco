import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import App from '../App';

vi.mock('../pages/HomePage', async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    default: () => <div>Home demo page</div>,
  };
});

describe('route loading fallback', () => {
  it('shows the page loader while a route is still loading', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByRole('status', { name: /loading page/i })).toBeInTheDocument();
    expect(await screen.findByText('Home demo page')).toBeInTheDocument();
  });
});
