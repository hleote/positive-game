import './App.css';
import GameBoard from './GameBoard';

const App: React.FunctionComponent = () => {
	return (
		<div className="App">
			<header className="App-header">
				<GameBoard />
			</header>
		</div>
	);
}

export default App;
