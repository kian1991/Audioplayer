/**
 * Convert a time in seconds to a string in the format `hh:mm:ss`
 * @param time Time in seconds
 * @returns Time in the format `hh:mm:ss`
 * @example
 * timeToString(3600) // '01:00:00'
 * */
export function secondsToTime(time: number): string {
	const hours = Math.floor(time / 3600);
	const minutes = Math.floor((time % 3600) / 60);
	const seconds = Math.floor(time % 60);
	return `${hours > 0 ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
}
