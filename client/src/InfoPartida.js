// src/InfoPartida.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tableStyles from './tableStyles';
import CloseButton from './components/CloseButton'; // Importa o botão X

const InfoPartida = () => {
    const [infoPartidas, setInfoPartidas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInfoPartidas = async () => {
            try {
                const response = await axios.get('http://localhost:5000/info_partida');
                setInfoPartidas(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar informações da partida:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchInfoPartidas();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Ocorreu um erro: {error.message}</div>;

    return (
        <div style={tableStyles.container}>
            <CloseButton /> {/* Adiciona o botão de fechar */}
            <h2>Informações da Partida</h2>
            <table style={tableStyles.table}>
                <thead>
                    <tr>
                        <th style={tableStyles.th}>Info Partida ID</th>
                        <th style={tableStyles.th}>Última Rodada</th>
                        <th style={tableStyles.th}>Nível</th>
                        <th style={tableStyles.th}>Match ID</th>
                        <th style={tableStyles.th}>Placement</th>
                        <th style={tableStyles.th}>PUUID</th>
                    </tr>
                </thead>
                <tbody>
                    {infoPartidas.map((infoPartida, index) => (
                        <tr key={index}>
                            <td style={tableStyles.td}>{infoPartida.info_partida_id}</td>
                            <td style={tableStyles.td}>{infoPartida.last_round}</td>
                            <td style={tableStyles.td}>{infoPartida.level}</td>
                            <td style={tableStyles.td}>{infoPartida.match_id}</td>
                            <td style={tableStyles.td}>{infoPartida.placement}</td>
                            <td style={tableStyles.td}>{infoPartida.puuid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InfoPartida;
