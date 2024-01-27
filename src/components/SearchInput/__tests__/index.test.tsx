import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeProvider from '@/app/theme-provider';
import SearchInput from '..';

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

describe('SearchInput', () => {
  it('should render all elements', () => {
    //Assemble
    //Act
    render(
      <ThemeProvider>
        <SearchInput />
      </ThemeProvider>
    );

    //Assert
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});
