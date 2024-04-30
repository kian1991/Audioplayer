import Playlist from './Playlist';
import Controls from './Controls';
import Visuals from './Visuals';

export default function Player() {
	return (
		<div className='w-full flex '>
			<div className='grow border flex flex-col'>
				<Visuals>
					<Controls size='lg' />
				</Visuals>
			</div>
			<div className='border'>
				<Playlist />
			</div>
		</div>
	);
}
