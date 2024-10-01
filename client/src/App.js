// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DictionaryTable from './components/DictionaryTable';
import Augmentos from './Augmentos';
import Composicoes from './Composicoes';
import InfoPartida from './InfoPartida';
import Partidas from './Partidas';
import Traits from './Traits';
import Jogadores from './Jogadores';
import Aggregation from './components/Aggregations'
import './App.css';

const App = () => {
    return (
        <Router>
            <div className='container'>
                <h1>Banco de dados - TFT</h1>

                {/* Botão Dicionário separado */}
                <nav className="navigation">
                    <Link to="/dicionario" className="nav-button special">Dicionário</Link>
                </nav>

                {/* Outros botões organizados em coluna */}
                <nav className="navigation-row">
                    <ul className="nav-list-row">
                        <li className="nav-item"><Link to="/augmentos" className="nav-button">Augmentos</Link></li>
                        <li className="nav-item"><Link to="/composicoes" className="nav-button">Composições</Link></li>
                        <li className="nav-item"><Link to="/info_partida" className="nav-button">Informações da Partida</Link></li>
                        <li className="nav-item"><Link to="/partidas" className="nav-button">Partidas</Link></li>
                        <li className="nav-item"><Link to="/traits" className="nav-button">Traits</Link></li>
                        <li className="nav-item"><Link to="/jogadores" className="nav-button">Jogadores</Link></li>
                    </ul>
                </nav>

                <nav className="navigation">
                    <Link to="/consultas" className="nav-button special">Consultas</Link>
                </nav>

                <Routes>
                    <Route path="/dicionario" element={<DictionaryTable />} />
                    <Route path="/augmentos" element={<Augmentos />} />
                    <Route path="/composicoes" element={<Composicoes />} />
                    <Route path="/info_partida" element={<InfoPartida />} />
                    <Route path="/partidas" element={<Partidas />} />
                    <Route path="/traits" element={<Traits />} />
                    <Route path="/jogadores" element={<Jogadores />} />
                    <Route path="/consultas" element={<Aggregation />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
