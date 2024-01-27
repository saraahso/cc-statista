import { describe, it, expect } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeProvider from '@/app/theme-provider';
import userEvent from '@testing-library/user-event';
import CardsList from '..';
import { mockItems } from '@/lib/fixtures/items';

describe('Card List', () => {
  it('should display "No Results" text ', () => {
    //Assemble
    //Act
    render(
      <ThemeProvider>
        <CardsList data={undefined} text="No results" />
      </ThemeProvider>
    );

    //Assert
    expect(screen.getByText('No results')).toBeInTheDocument();
  });

  it('should renders card items', () => {
    //Assemble
    //Act
    render(
      <ThemeProvider>
        <CardsList data={mockItems} text="No results" />
      </ThemeProvider>
    );
    const items = screen.queryAllByTestId('card-item');

    //Assert
    expect(items.length).toBe(Math.min(9, mockItems.length));
  });

  it('should change Previous button availability when navigation through the pagination', async () => {
    //Assemble
    const user = userEvent.setup();

    //Act
    render(
      <ThemeProvider>
        <CardsList data={mockItems} text="No results" />
      </ThemeProvider>
    );
    const nextPageButton = screen.getByText('Next');
    const prevPageButton = screen.getByText('Previous');

    //Assert
    expect(prevPageButton).toBeDisabled();
    await act(async () => {
      await user.click(nextPageButton);
    });

    expect(prevPageButton).toBeEnabled();

    await act(async () => {
      await user.click(prevPageButton);
    });
    expect(prevPageButton).toBeDisabled();
  });
});
