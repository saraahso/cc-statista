'use client';

import { useEffect, useContext } from 'react';
import { ThemeContext } from '@/app/theme-provider';
import useStatistaQuery from '@/lib/hooks/useStatistaQuery';
import CardsList from '../CardsList';

export default function Search() {
  const { buttonSearch } = useContext(ThemeContext);
  const { data, refetch } = useStatistaQuery();

  useEffect(() => {
    if (buttonSearch) {
      refetch();
    }
  }, [buttonSearch, refetch]);

  return (
    <CardsList
      data={buttonSearch ? data : undefined}
      text="No search results. Try again with 'statista'."
    />
  );
}
