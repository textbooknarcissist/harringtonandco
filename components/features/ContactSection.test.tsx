import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  it('renders correctly', () => {
    render(<ContactSection />);
    expect(screen.getByText('Book a Consultation')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('john@example.com')).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    render(<ContactSection />);
    const submitButton = screen.getByText('Request Appointment');

    fireEvent.click(submitButton);

    expect(await screen.findByText(/Full name must be at least 2 characters/i)).toBeInTheDocument();
    expect(await screen.findByText(/Invalid email address/i)).toBeInTheDocument();
    expect(await screen.findByText(/Please select a legal category/i)).toBeInTheDocument();
    expect(await screen.findByText(/Message must be at least 10 characters/i)).toBeInTheDocument();
  });

  it('submits form correctly', async () => {
    render(<ContactSection />);
    
    fireEvent.change(screen.getByPlaceholderText('John Doe'), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Legal Counsel Category/i), {
      target: { value: 'corporate' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Provide a high-level summary/i), {
      target: { value: 'Looking for corporate legal advice.' },
    });

    fireEvent.click(screen.getByText('Request Appointment'));

    expect(screen.getByText('Transmitting...')).toBeInTheDocument();

    // After simulation time
    expect(await screen.findByText('Request Received', {}, { timeout: 3000 })).toBeInTheDocument();
    expect(screen.getByText(/Your inquiry has been encrypted/i)).toBeInTheDocument();
  });
});
