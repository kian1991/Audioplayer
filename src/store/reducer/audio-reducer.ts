import { Song } from '@/components/player/types';
import { audioPlayer } from '../audio-player';

export type AudioStateType = {
	songs: Song[];
	currentSong: Song | null;
	isPlaying: boolean;
	currentTimeSec: number;
};

export type AudioReducerActions =
	| { type: 'PAUSE' }
	| { type: 'RESUME' }
	| { type: 'STOP' }
	| { type: 'NEXT' }
	| { type: 'PREVIOUS' }
	| { type: 'SET_SONGS'; songs: Song[] }
	| { type: 'SET_CURRENT_SONG'; song: Song }
	| { type: 'SET_CURRENT_TIME_SEC'; time: number }
	| { type: 'PLAY'; id: number };

export function audioReducer(
	state: AudioStateType,
	action: AudioReducerActions
): AudioStateType {
	if (!audioPlayer) return state;
	switch (action.type) {
		case 'PLAY': {
			const nextState = structuredClone(state);
			const song = state.songs.find((song: Song) => song.id === action.id);
			if (song) {
				audioPlayer.src = song.url;
				audioPlayer.play();
				nextState.currentSong = song;
				nextState.isPlaying = true;
			}
			return nextState;
		}
		case 'PAUSE':
			audioPlayer.pause();
			return { ...state, isPlaying: false };
		case 'RESUME':
			audioPlayer.play();
			return { ...state, isPlaying: true };
		case 'STOP':
			audioPlayer.pause();
			audioPlayer.currentTime = 0;
			return { ...state, isPlaying: false };
		case 'NEXT': {
			if (!state.currentSong) return state;
			const nextSong = state.songs.find((song) => song.id === state.currentSong!.id + 1);
			if (nextSong) {
				audioPlayer.src = nextSong.url;
				audioPlayer.play();
				return { ...state, currentSong: nextSong, isPlaying: true };
			}
			return state;
		}
		case 'PREVIOUS': {
			if (!state.currentSong) return state;
			const prevSong = state.songs.find((song) => song.id === state.currentSong!.id - 1);
			if (prevSong) {
				audioPlayer.src = prevSong.url;
				audioPlayer.play();
				return { ...state, currentSong: prevSong, isPlaying: true };
			}
			return state;
		}
		case 'SET_SONGS':
			return { ...state, songs: action.songs };
		case 'SET_CURRENT_SONG':
			return { ...state, currentSong: action.song };
		case 'SET_CURRENT_TIME_SEC':
			return { ...state, currentTimeSec: action.time };
		default:
			return state;
	}
}
