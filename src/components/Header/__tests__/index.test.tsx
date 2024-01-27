import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '..';

describe('Header', () => {
  it('should render all elements', () => {
    // Assemble
    //Act
    render(<Header />);

    // Assert
    expect(
      screen.getByRole('img', { name: /Statista Logo/i })
    ).toBeInTheDocument();

    const list = screen.getByRole('list', { name: /menu/i });
    expect(within(list).queryAllByRole('listitem')).toHaveLength(1);
  });
});
