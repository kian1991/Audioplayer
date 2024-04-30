import Header from './components/header/Header';
import Player from './components/player/Player';
import { Toaster } from './components/ui/toaster';
import AudioPlayerContextProvider from './store/AudioPlayerContextProvider';
import { ThemeProvider } from './store/ThemeProvider';

function App() {
	return (
		<ThemeProvider>
			<AudioPlayerContextProvider>
				<Header />
				<Player />
				<Toaster />
			</AudioPlayerContextProvider>
		</ThemeProvider>
	);
}

export default App;
