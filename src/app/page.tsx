import CardsList from "@/components/CardsList";
import HeroSection from "@/components/HeroSection";
import Search from "@/components/Search";

export default async function Home() {
	return (
		<main className="w-full min-h-screen">
			<HeroSection />
			<Search />
		</main>
	);
}
