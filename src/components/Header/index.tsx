import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<nav className="w-full h-20">
			<div className="container h-full flex items-center justify-between mx-auto">
				<Link href="#" className="relative">
					<Image
						src="./statista.svg"
						width={184}
						height={36}
						priority
						alt="Statista Logo"
					/>
				</Link>
				<ul>
					<li>
						<Link href="#">Favorites</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
