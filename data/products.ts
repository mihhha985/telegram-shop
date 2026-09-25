export type Product = {
	id: number;
	title: string;
	category: string;
	platform: string;
	price: number;
	rating: number;
	reviews: number;
	seller: string;
	image: string;
	accent: string;
	shortDescription: string;
	description: string;
	features: string[];
	badge?: string;
};

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const products: Product[] = [
	{
		id: 1,
		title: "Nova Play Pass",
		category: "Subscription",
		platform: "All platforms",
		price: 39.29,
		rating: 4.9,
		reviews: 1987,
		seller: "Orbit Digital",
		image: assetPath("/products/nova-play-pass.png"),
		accent: "#7058ff",
		badge: "Bestseller",
		shortDescription: "One year of hand-picked games, cloud saves and member drops.",
		description: "A full year of access to a living library of adventures, co-op favorites and thoughtful indie releases. Nova Play Pass keeps your progress synced across devices and adds fresh member rewards every month, so there is always a new world waiting when you sign in.",
		features: ["12-month access", "Cloud saves", "Monthly member rewards"],
	},
	{
		id: 2,
		title: "Cloud Arcade",
		category: "Cloud gaming",
		platform: "Web & mobile",
		price: 24.9,
		rating: 4.8,
		reviews: 842,
		seller: "Northstar Labs",
		image: assetPath("/products/cloud-arcade.png"),
		accent: "#25a9e8",
		badge: "Instant access",
		shortDescription: "Play a curated arcade library anywhere—no download required.",
		description: "Cloud Arcade turns almost any screen into a responsive game station. Launch a growing collection in seconds, keep progress in the cloud and move from laptop to phone without reinstalling a thing. Built for quick sessions, travel and shared living-room play.",
		features: ["No downloads", "Cross-device progress", "Low-latency streaming"],
	},
	{
		id: 3,
		title: "Apex Circuit",
		category: "Racing",
		platform: "PC & Console",
		price: 32.0,
		rating: 4.7,
		reviews: 621,
		seller: "Vector House",
		image: assetPath("/products/apex-circuit.png"),
		accent: "#f04a8b",
		shortDescription: "A precision racing bundle made for split-second night drives.",
		description: "Chase perfect lines across rain-soaked city circuits, alpine switchbacks and endurance events after dark. Apex Circuit combines a complete career season with a curated garage pack and dynamic challenges that reward clean, confident driving.",
		features: ["Full career season", "18 signature vehicles", "Dynamic weather"],
	},
	{
		id: 4,
		title: "Ember Realms",
		category: "Adventure",
		platform: "PC & Console",
		price: 28.5,
		rating: 4.9,
		reviews: 1104,
		seller: "Myth & Moss",
		image: assetPath("/products/ember-realms.png"),
		accent: "#f27331",
		badge: "Editor's pick",
		shortDescription: "A story-rich fantasy journey through kingdoms shaped by fire.",
		description: "Enter a hand-built realm where every ruin holds a choice and every flame remembers its keeper. Ember Realms blends thoughtful exploration, flexible combat and a branching story into a focused adventure designed to be savored at your own pace.",
		features: ["30+ hour campaign", "Branching story", "Offline play"],
	},
	{
		id: 5,
		title: "Echo Station",
		category: "Sci-fi",
		platform: "PC",
		price: 21.75,
		rating: 4.6,
		reviews: 476,
		seller: "Quiet Orbit",
		image: assetPath("/products/echo-station.png"),
		accent: "#7f91d8",
		shortDescription: "Decode a silent orbital mystery at the edge of mapped space.",
		description: "You arrive at a research station that should be busy, but only its navigation AI answers. Search carefully designed environments, restore forgotten systems and piece together the crew's final transmission in a calm science-fiction mystery with no combat.",
		features: ["Narrative exploration", "Original ambient score", "4K environments"],
	},
	{
		id: 6,
		title: "Pixel Stories",
		category: "Indie collection",
		platform: "All platforms",
		price: 16.9,
		rating: 4.8,
		reviews: 935,
		seller: "Little Lantern",
		image: assetPath("/products/pixel-stories.png"),
		accent: "#e97867",
		badge: "9 games included",
		shortDescription: "Nine small adventures with big ideas and plenty of heart.",
		description: "Pixel Stories is a joyful shelf of inventive games from independent teams: a tiny gardening quest, a two-player puzzle voyage, a one-evening mystery and six more surprises. Every title is approachable, distinctive and perfect between larger adventures.",
		features: ["9 complete games", "Local co-op picks", "Family-friendly"],
	},
	{
		id: 7,
		title: "Guardian Mode",
		category: "Family tools",
		platform: "Account add-on",
		price: 8.5,
		rating: 4.7,
		reviews: 318,
		seller: "Safeplay Studio",
		image: assetPath("/products/guardian-mode.png"),
		accent: "#20a889",
		shortDescription: "Friendly controls that make shared gaming feel effortless.",
		description: "Guardian Mode gives families one clear place to manage play time, purchases and age-appropriate access. Flexible schedules, simple activity summaries and protected checkout help younger players explore confidently without turning every session into a negotiation.",
		features: ["Flexible schedules", "Protected checkout", "Weekly summaries"],
	},
	{
		id: 8,
		title: "Creator Forge",
		category: "Creator toolkit",
		platform: "Windows & macOS",
		price: 45.0,
		rating: 4.9,
		reviews: 267,
		seller: "Formworks",
		image: assetPath("/products/creator-forge.png"),
		accent: "#4e8cff",
		badge: "Pro toolkit",
		shortDescription: "Build playable worlds with a fast, welcoming visual toolkit.",
		description: "Creator Forge brings level design, lighting and interaction tools into one visual workspace. Start with modular environments, prototype without code and export a polished playable scene when your idea is ready to share.",
		features: ["Visual scripting", "600+ modular assets", "Commercial license"],
	},
	{
		id: 9,
		title: "Retro Vault",
		category: "Classics",
		platform: "PC & Handheld",
		price: 19.95,
		rating: 4.8,
		reviews: 1542,
		seller: "Sunset Archive",
		image: assetPath("/products/retro-vault.png"),
		accent: "#c96c66",
		shortDescription: "A lovingly restored collection of 24 pick-up-and-play classics.",
		description: "Retro Vault preserves the immediacy of classic arcade design while adding modern comforts. Browse 24 restored games, save anywhere, rewind tricky moments and discover artwork from the original development archives.",
		features: ["24 restored games", "Save & rewind", "Digital art archive"],
	},
];

export const getProduct = (id: number) => products.find((product) => product.id === id);
