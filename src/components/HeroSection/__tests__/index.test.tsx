import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '..';

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      pathname: '',
      push: vi.fn(),
    };
  },
  useSearchParams() {},
  usePathname() {},
}));

describe('HeroSection', () => {
  it('should render all elements', () => {
    // Assemble
    //Act
    render(<HeroSection />);

    // Assert
    expect(screen.getByText(/Empowering/i)).toBeInTheDocument();
    expect(screen.getByText(/170 industries/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});
