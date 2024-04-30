import { Song } from '@/components/player/types';

const songs: { url: string; title: string }[] = [
	{
		url: './assets/baby-mandala-169039.mp3',
		title: 'Baby Mandala',
	},
	{
		url: './assets/beauteous-upbeat-electronic-162757.mp3',
		title: 'Beauteous Upbeat Electronic',
	},
	{
		url: './assets/coverless-book-186307.mp3',
		title: 'Coverless Book',
	},
	{
		url: './assets/deep-future-garage-royalty-free-music-163081.mp3',
		title: 'Deep Future Garage',
	},
	{
		url: './assets/electro-summer-positive-party-141081.mp3',
		title: 'Electro Summer Positive Party',
	},
	{
		url: './assets/electronic-rock-king-around-here-15045.mp3',
		title: 'Electronic Rock King Around Here',
	},
	{
		url: './assets/futuristic-beat-146661.mp3',
		title: 'Futuristic Beat',
	},
	{
		url: './assets/happy-rock-165132.mp3',
		title: 'Happy Rock',
	},
	{
		url: './assets/retro-funk-energetic-background-music-136122.mp3',
		title: 'Retro Funk Energetic Background Music',
	},
	{
		url: './assets/rock-it-21275.mp3',
		title: 'Rock It',
	},
	{
		url: './assets/spring-upbeat-133219.mp3',
		title: 'Spring Upbeat',
	},
	{
		url: './assets/synthwave-80s-110045.mp3',
		title: 'Synthwave 80s',
	},
	{
		url: './assets/trap-future-bass-royalty-free-music-167020.mp3',
		title: 'Trap Future Bass',
	},
	{
		url: './assets/unlock-me-149058.mp3',
		title: 'Unlock Me',
	},
	{
		url: './assets/upbeat-funk-commercial-112624.mp3',
		title: 'Upbeat Funk Commercial',
	},
	{
		url: './assets/watr-double-overhead-11517.mp3',
		title: 'Watr Double Overhead',
	},
	{
		url: './assets/whip-110235.mp3',
		title: 'Whip',
	},
];

export const songList: Song[] = songs.map((song, index) => {
	return {
		id: index,
		url: song.url,
		title: song.title,
		duration: 0,
	};
});
