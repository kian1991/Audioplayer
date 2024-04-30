import { PropsWithChildren, Reducer, useEffect, useReducer } from 'react';
import { songList } from './song-list';
import { AudioPlayerContext } from './audio-player-context';
import { audioPlayer, getDuration } from './audio-player';
import {
	AudioStateType,
	AudioReducerActions,
	audioReducer,
} from './reducer/audio-reducer';

const initialAudioState: AudioStateType = {
	songs: [],
	currentSong: null,
	isPlaying: false,
	currentTimeSec: 0,
};

export default function AudioPlayerContextProvider({ children }: PropsWithChildren) {
	const [audioState, dispatch] = useReducer<Reducer<AudioStateType, AudioReducerActions>>(
		audioReducer,
		initialAudioState
	);

	/* inital song loading */
	useEffect(() => {
		let ignore = false;
		async function initSongs() {
			const songListWithDuration = [];
			for (const song of songList) {
				const duration = await getDuration(song.url);
				songListWithDuration.push({ ...song, duration });
			}
			if (!ignore) dispatch({ type: 'SET_SONGS', songs: songListWithDuration });
		}

		initSongs();

		return () => {
			ignore = true;
		};
	}, []);

	/* time update */
	useEffect(() => {
		if (!audioPlayer) return;
		function timeUpdateHandler() {
			dispatch({ type: 'SET_CURRENT_TIME_SEC', time: audioPlayer.currentTime });
		}
		audioPlayer.addEventListener('timeupdate', timeUpdateHandler);

		return () => {
			audioPlayer.removeEventListener('timeupdate', timeUpdateHandler);
		};
	}, []);

	const { songs, currentSong, isPlaying, currentTimeSec } = audioState;

	const contextValue = {
		audioPlayer,
		songs,
		currentSong,
		currentTimeSec,
		isPlaying,
		play: (id: number) => dispatch({ type: 'PLAY', id }),
		pause: () => dispatch({ type: 'PAUSE' }),
		resume: () => dispatch({ type: 'RESUME' }),
		stop: () => dispatch({ type: 'STOP' }),
		next: () => dispatch({ type: 'NEXT' }),
		previous: () => dispatch({ type: 'PREVIOUS' }),
	};

	return (
		<AudioPlayerContext.Provider value={contextValue}>
			{children}
		</AudioPlayerContext.Provider>
	);
}
