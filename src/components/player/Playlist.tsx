import { Fragment } from 'react';
import { Separator } from '../ui/separator';
import { secondsToTime } from './util';
import { useAudioPlayerContext } from '@/store/audio-player-context';

export default function Playlist() {
	const { songs, play, currentSong } = useAudioPlayerContext();
	return (
		<div className='h-[calc(100dvh-82px)] overflow-y-auto'>
			{songs.map((song) => (
				<Fragment key={song.title}>
					<div
						onClick={() => play(song.id)}
						className={`p-4 flex justify-between cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 ${
							currentSong?.id === song.id && 'bg-slate-100 dark:bg-slate-800'
						}`}>
						<div className='mr-12'>{song.title}</div>
						<div>{secondsToTime(song.duration)}</div>
					</div>
					<Separator />
				</Fragment>
			))}
		</div>
	);
}
