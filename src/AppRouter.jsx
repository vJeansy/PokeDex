import { Navigate, Route, Routes } from 'react-router-dom';
import { Navegation } from './components';
import { HomePage, PokemonPage, SearchPage } from './pages';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/PokeDex' element={<Navegation />}>
				{ /*<Route path="pokemon/:id" element={<PokemonInfo />}/> */}
				<Route index element={<HomePage />} />
				<Route path='pokemon/:id' index element={<PokemonPage />} />
				<Route path='search' element={<SearchPage />} />
			</Route>

            <Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};