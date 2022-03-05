import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import Header from './shared/Header/Header';
import { MenuLinks } from './types/types';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={MenuLinks.MOVIES} element={<MoviesPage />} />
            </Routes>
        </div>
    );
}

export default App;
