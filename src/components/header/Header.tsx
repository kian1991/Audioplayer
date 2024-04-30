import { IconBrandAirtable } from '@tabler/icons-react';
import Controls from '../player/Controls';
import { useTheme } from '@/store/theme-context';

export default function Header() {
	const { setTheme, theme } = useTheme();

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<div
			className='rounded-none border px-3 py-3 lg:px-16 flex justify-between items-center h-[80px]'
			onClick={toggleTheme}>
			<IconBrandAirtable size={48} />
			<Controls />
		</div>
	);
}
