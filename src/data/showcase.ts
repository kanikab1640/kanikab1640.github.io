export interface ShowcaseItem {
	name: string;
	href: string;
	stack: string;
	badge?: string;
	desc: string;
}

export const showcase: ShowcaseItem[] = [
	{
		name: "Simone",
		href: "https://github.com/rajtilakjee/simone",
		stack: "Python · CLI",
		badge: "OSS",
		desc: "A Python CLI-script that helps you create blog posts from your videos. It also adds context-aware screenshots from that video..",
	},
	{
		name: "KeepYourMouthShut",
		href: "https://github.com/rajtilakjee/keepyourmouthshut",
		stack: "Web App · Python",
		badge: "OSS",
		desc: "An AI-assisted open-source app that provides a 360-degree podcast solution. It has a developer-first approach for creating entire episodes of podcasts without requiring any expensive equpment or setup. The app takes a number of input from the end-user and based on that generates a script and an audio voice-over file based on that script.",
	},
	{
		name: "Kivo",
		href: "https://github.com/rajtilakjee/kivo",
		stack: "Python · Productivity",
    badge: "OSS",
		desc: "A lightweight desktop teleprompter built with PySide6. Kivo provides a clean, always-on-top reading overlay for scripts, AI-generated content, presentations, and video recordings.",
	},
];
