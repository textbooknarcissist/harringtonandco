import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from '../App';

vi.mock('../pages/HomePage', () => ({
  default: () => {
    throw new Error('Route render failed');
  },
}));

describe('route error fallback', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows the error boundary fallback when a route throws', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();

    consoleError.mockRestore();
  });
});
