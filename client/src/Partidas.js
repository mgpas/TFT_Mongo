// src/Partidas.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tableStyles from './tableStyles';
import CloseButton from './components/CloseButton'; // Importa o botão X

const Partidas = () => {
    const [partidas, setPartidas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPartidas = async () => {
            try {
                const response = await axios.get('http://localhost:5000/partida');
                setPartidas(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar partidas:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchPartidas();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Ocorreu um erro: {error.message}</div>;

    return (
        <div>
            <CloseButton /> {/* Adiciona o botão de fechar */}
            <h2>Partidas</h2>
            <table style={tableStyles.table}>
                <thead>
                    <tr>
                        <th style={tableStyles.th}>Game Length</th>
                        <th style={tableStyles.th}>Game Length (Minutos)</th>
                        <th style={tableStyles.th}>Match ID</th>
                    </tr>
                </thead>
                <tbody>
                    {partidas.map((partida, index) => (
                        <tr key={index}>
                            <td style={tableStyles.td}>{partida.game_length}</td>
                            <td style={tableStyles.td}>{partida.game_length_minutes}</td>
                            <td style={tableStyles.td}>{partida.match_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Partidas;
