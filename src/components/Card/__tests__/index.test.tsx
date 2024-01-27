import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '..';
import { StatistaItem } from '@/lib/types';
import ThemeProvider, {
  ThemeContext,
  ThemeContextType,
} from '@/app/theme-provider';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { mockSingleItem } from '@/lib/fixtures/single-item';

const customRender = (
  ui: ReactElement,
  { contextValues }: { contextValues: ThemeContextType }
) => {
  return render(
    <ThemeContext.Provider value={contextValues}>{ui}</ThemeContext.Provider>
  );
};

describe('Card', () => {
  let contextValues: ThemeContextType;

  beforeEach(() => {
    contextValues = {
      buttonSearch: false,
      setButtonSearch: vi.fn(),
      isFavorite: [],
      setIsFavorite: vi.fn(),
    };

    vi.resetAllMocks();
  });

  it('should render all elements', () => {
    //Assemble
    //Act
    render(
      <ThemeProvider>
        <Card post={mockSingleItem} />
      </ThemeProvider>
    );

    //Assert
    expect(screen.getByText(mockSingleItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockSingleItem.subject)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Image of/i })).toBeInTheDocument();
    expect(screen.getByText('More information')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Favorite it/i })
    ).toBeInTheDocument();
  });

  it('should add post to favorites when button click ', async () => {
    //Assemble
    const user = userEvent.setup();
    contextValues = {
      buttonSearch: false,
      setButtonSearch: vi.fn(),
      isFavorite: [],
      setIsFavorite: vi.fn(newFavorites => {
        contextValues.isFavorite = newFavorites;
      }),
    };

    //Act
    customRender(<Card post={mockSingleItem} />, { contextValues });
    await user.click(screen.getByRole('button', { name: /Favorite it!/i }));
    contextValues.isFavorite = [mockSingleItem.identifier];
    customRender(<Card post={mockSingleItem} />, { contextValues });

    //Assert
    expect(
      screen.getByRole('button', { name: /Favorited/i })
    ).toBeInTheDocument();
  });
});
