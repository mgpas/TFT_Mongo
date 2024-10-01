// src/Jogadores.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tableStyles from './tableStyles';
import CloseButton from './components/CloseButton'; // Importa o botão X

const Jogadores = () => {
    const [jogadores, setJogadores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJogadores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/jogadores');
                setJogadores(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar jogadores:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchJogadores();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Ocorreu um erro: {error.message}</div>;

    return (
        <div style={tableStyles.container}>
            <CloseButton /> {/* Adiciona o botão de fechar */}
            <h2>Jogadores</h2>
            <table style={tableStyles.table}>
                <thead>
                    <tr>
                        <th style={tableStyles.th}>PUUID</th>
                    </tr>
                </thead>
                <tbody>
                    {jogadores.map((jogador, index) => (
                        <tr key={index}>
                            <td style={tableStyles.td}>{jogador.puuid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Jogadores;
