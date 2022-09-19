import { Navbar } from './components';
import { Home } from './pages';
import "./app.css";

function App() {
	return (
		<>
			<Navbar />
			<div className="app">
				<Home />
			</div>
		</>
	);
}

export default App;
