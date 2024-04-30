import { Button } from '../ui/button';
import {
	IconPlayerPause,
	IconPlayerPlay,
	IconPlayerSkipBack,
	IconPlayerSkipForward,
} from '@tabler/icons-react';
import { Slider } from '../ui/slider';
import { useAudioPlayerContext } from '@/store/audio-player-context';
import { secondsToTime } from './util';

type Props = {
	size?: 'sm' | 'lg';
};

export default function Controls({ size }: Props) {
	const {
		pause,
		resume,
		isPlaying,
		currentTimeSec,
		next,
		previous,
		audioPlayer,
		currentSong,
	} = useAudioPlayerContext();

	const togglePlay = () => {
		if (isPlaying) {
			pause();
		} else {
			resume();
		}
	};

	return (
		<div
			className={`py-12 px-12 text-white`}
			style={{
				filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
			}}>
			{size === 'lg' && currentSong && (
				<>
					<div className='text-center text-xl'>{currentSong?.title}</div>
					<div className='flex justify-center py-3'>
						<div className='text-xl font-bold'>{secondsToTime(currentTimeSec)}/</div>
						<div className='text-xl font-bold'>
							{currentSong.duration > 0 ? secondsToTime(currentSong.duration) : '00:00'}
						</div>
					</div>
				</>
			)}
			<div
				className={`flex gap-2 ${
					size === 'lg' ? 'justify-between py-8 px-5' : 'justify-center'
				}`}>
				<Button variant={'ghost'} size={'icon'} className='' onClick={() => previous()}>
					<IconPlayerSkipBack size={size === 'lg' ? 48 : 18} />
				</Button>
				<Button variant={'ghost'} size={'icon'} onClick={() => togglePlay()}>
					{isPlaying ? (
						<IconPlayerPause size={size === 'lg' ? 48 : 18} />
					) : (
						<IconPlayerPlay size={size === 'lg' ? 48 : 18} />
					)}
				</Button>
				<Button variant={'ghost'} size={'icon'} className='' onClick={() => next()}>
					<IconPlayerSkipForward size={size === 'lg' ? 48 : 18} />
				</Button>
			</div>
			<div className='mt-3 px-5'>
				<Slider
					defaultValue={[0]}
					max={currentSong?.duration || 0}
					step={1}
					value={[currentTimeSec]}
					onValueChange={(value) => {
						if (audioPlayer) audioPlayer.currentTime = value[0];
					}}
				/>
			</div>
		</div>
	);
}
