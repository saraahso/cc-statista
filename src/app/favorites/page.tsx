'use client';

import CardsList from '@/components/CardsList';
import { useContext } from 'react';
import { ThemeContext } from '../theme-provider';
import useStatistaQuery from '@/lib/hooks/useStatistaQuery';

export default function FavoritesPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isFavorite } = useContext(ThemeContext);
  const { data } = useStatistaQuery();
  const filteredFavorites = data?.filter(item =>
    isFavorite.includes(item.identifier)
  );

  return (
    <div className="container flex flex-col items-center mx-auto my-20">
      <h1 className="my-10 text-4xl font-bold">Favorites</h1>

      <CardsList
        data={filteredFavorites || undefined}
        text="At the moment, you have nothing favorited"
      />
    </div>
  );
}
