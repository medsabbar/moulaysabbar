import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './components/UserContext';

function App() {
	return (
		<UserContextProvider>
			<div className="App">
				<Routes>
					<Route
						exact
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</div>
		</UserContextProvider>
	);
}

export default App;
