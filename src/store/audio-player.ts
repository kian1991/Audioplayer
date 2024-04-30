export const audioPlayer = new Audio();

export function getDuration(url: string): Promise<number> {
	const audioPlayer = new Audio();
	return new Promise((resolve, reject) => {
		audioPlayer.src = url;
		audioPlayer.addEventListener('loadedmetadata', () => {
			const duration = audioPlayer.duration;
			audioPlayer.remove();
			resolve(duration);
		});
		audioPlayer.addEventListener('error', (e) => {
			audioPlayer.remove();
			reject(e);
		});
	});
}
