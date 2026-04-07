import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import FAQ from './FAQ';

vi.mock('../../services/contentService', () => ({
  contentService: {
    getFAQItems: vi.fn().mockResolvedValue([
      {
        question: 'How do you work?',
        answer: 'We start with strategy.',
      },
      {
        question: 'Do you handle cross-border matters?',
        answer: 'Yes, across multiple jurisdictions.',
      },
    ]),
  },
}));

describe('FAQ', () => {
  it('loads content and toggles accordion state', async () => {
    render(
      <MemoryRouter>
        <FAQ limit={2} />
      </MemoryRouter>,
    );

    const questionText = await screen.findByText('How do you work?');
    const questionButton = questionText.closest('button');

    expect(questionButton).not.toBeNull();
    expect(questionButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(questionButton as HTMLButtonElement);
    expect(questionButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(questionButton as HTMLButtonElement);
    expect(questionButton).toHaveAttribute('aria-expanded', 'true');
  });
});
