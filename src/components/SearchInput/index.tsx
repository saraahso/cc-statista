'use client';

import { ThemeContext } from '@/app/theme-provider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const { setButtonSearch } = useContext(ThemeContext);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleOnClick = () => {
    if (query.toLowerCase() === 'statista') {
      setButtonSearch(true);
      params.set('q', query);
    } else {
      setButtonSearch(false);
      params.delete('q');
    }
    push(`${pathname}?${params.toString()}`);
  };

  console.log(pathname, searchParams);

  useEffect(() => {
    if (params.get('q') === 'statista') setButtonSearch(true);
  }, []);

  return (
    <div className="relative w-3/5 mt-12 shadow-sm">
      <input
        type="text"
        name="search"
        id="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="block w-full h-14 rounded-md py-1.5 pl-2 lg:pl-7  text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-white text-xs lg:text-base"
        placeholder="Find statistics, forecasts and reports"
      />
      <button
        type="submit"
        onClick={handleOnClick}
        className="absolute flex items-center px-2 lg:px-8 inset-y-0 right-0 bg-stblue text-white rounded-l-none rounded-r-md cursor-pointer">
        <span className="hidden lg:block">Search</span>{' '}
        <MagnifyingGlassIcon className="w-4 h-4 lg:ml-4" />
      </button>
    </div>
  );
}
