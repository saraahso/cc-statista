import CardsList from "@/components/CardsList";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
	return (
		<main className="w-full min-h-screen">
			<HeroSection />
			<CardsList />
		</main>
	);
}
