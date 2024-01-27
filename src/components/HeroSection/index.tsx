import Polygon from '../Polygon/polygon';
import SearchInput from '../SearchInput';

export default function HeroSection() {
  return (
    <div className="h-screen">
      <section className="w-full h-3/4 flex flex-col items-center justify-center px-8 lg:px-0 text-center bg-stblack text-white">
        <h1 className="mb-3 text-6xl font-thin">
          <span className="font-bold">Empowering</span> people with data
        </h1>
        <p className="text-xl">
          Insights and facts across 170 industries and 150+ countries
        </p>
        <SearchInput />
      </section>
      <Polygon backgroundColor="#001427" />
    </div>
  );
}
