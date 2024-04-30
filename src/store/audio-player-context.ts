import { Song } from '@/components/player/types';
import { createContext, useContext } from 'react';

type AudioPlayerContextType = {
	audioPlayer: HTMLAudioElement;
	songs: Song[];
	currentSong: Song | null;
	currentTimeSec: number;
	isPlaying: boolean;
	play: (id: number) => void;
	pause: () => void;
	resume: () => void;
	stop: () => void;
	next: () => void;
	previous: () => void;
};

const AudioPlayerContext = createContext<AudioPlayerContextType>({
	audioPlayer: new Audio(),
	songs: [],
	currentSong: null,
	currentTimeSec: 0,
	isPlaying: false,
	play: () => {},
	pause: () => {},
	resume: () => {},
	stop: () => {},
	next: () => {},
	previous: () => {},
});

const useAudioPlayerContext = () => {
	return useContext(AudioPlayerContext);
};

export { AudioPlayerContext, useAudioPlayerContext };
