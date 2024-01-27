import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '..';

describe('Footer', () => {
  it('should render all elements', () => {
    // Assemble
    //Act
    render(<Footer />);

    // Assert
    expect(
      screen.getByRole('img', { name: /Project GitHub Link/i })
    ).toBeInTheDocument();
  });
});
