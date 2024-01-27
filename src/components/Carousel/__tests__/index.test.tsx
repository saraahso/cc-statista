import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CarouselImages from '..';
import { mockImages } from '@/lib/fixtures/images';

describe('CarouselImages', () => {
  it('should render carousel with images', () => {
    // Assemble
    // Act
    render(<CarouselImages images={mockImages} />);

    // Assert
    const carouselImages = screen.getAllByRole('img', { name: /Image/i });
    expect(carouselImages).toHaveLength(mockImages.length);

    for (let i = 0; i < mockImages.length; i++) {
      expect(carouselImages[i]).toHaveAttribute('alt', 'Image');
      expect(carouselImages[i]).toHaveAttribute('width', '500');
      expect(carouselImages[i]).toHaveAttribute('height', '500');
    }
  });
});
