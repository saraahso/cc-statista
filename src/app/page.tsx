import HeroSection from '@/components/HeroSection';
import Search from '@/components/Search';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="w-full min-h-screen">
      <Suspense>
        <HeroSection />
        <Search />
      </Suspense>
    </main>
  );
}
