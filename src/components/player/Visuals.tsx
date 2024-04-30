import { useAudioPlayerContext } from '@/store/audio-player-context';
import { PropsWithChildren, useEffect, useState } from 'react';

const fetchImage = async () => {
	const response = await fetch('https://source.unsplash.com/random/1920x1080');
	const imageURL = response.url;
	return imageURL;
};

export default function Visuals({ children }: PropsWithChildren) {
	const [currentImage, setCurrentImage] = useState('');
	const [nextImage, setNextImage] = useState('');

	const { currentSong } = useAudioPlayerContext();

	const updateImages = async () => {
		setCurrentImage(nextImage);
		const next = await fetchImage();
		setNextImage(next);
	};

	useEffect(() => {
		let ignore = false;
		const updateImages = async () => {
			const current = await fetchImage();
			if (!ignore) {
				setCurrentImage(current);
				fetchImage().then((next) => {
					if (!ignore) {
						setNextImage(next);
					}
				});
			}
		};
		updateImages();
		return () => {
			ignore = true;
		};
	}, []);

	useEffect(() => {
		updateImages();
	}, [currentSong]);

	return (
		<div className='relative h-[calc(100dvh-82px)] flex overflow-hidden'>
			<div className='mx-auto p-4 w-[50%] mt-auto z-10'>{children}</div>
			<div
				className='absolute top-[-150px] left-[-50px] w-[150%] h-[150%] -z-20'
				style={{
					backgroundImage: `url(${currentImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'bottom',
					animation: 'cover 40s infinite',
					filter: 'brightness(0.4) blur(2px)',
				}}></div>
		</div>
	);
}
