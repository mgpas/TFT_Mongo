// src/Composicoes.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tableStyles from './tableStyles';
import CloseButton from './components/CloseButton'; // Importa o botão X

const Composicoes = () => {
    const [composicoes, setComposicoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComposicoes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/composicao');
                setComposicoes(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar composições:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchComposicoes();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Ocorreu um erro: {error.message}</div>;

    return (
        <div style={tableStyles.container}>
            <CloseButton /> {/* Adiciona o botão de fechar */}
            <h2>Composições</h2>
            <table style={tableStyles.table}>
                <thead>
                    <tr>
                        <th style={tableStyles.th}>Active Units Count</th>
                        <th style={tableStyles.th}>Match ID</th>
                        <th style={tableStyles.th}>PUUID</th>
                        <th style={tableStyles.th}>Unit 1</th>
                        <th style={tableStyles.th}>Unit 2</th>
                        <th style={tableStyles.th}>Unit 3</th>
                        <th style={tableStyles.th}>Unit 4</th>
                        <th style={tableStyles.th}>Unit 5</th>
                        <th style={tableStyles.th}>Unit 6</th>
                        <th style={tableStyles.th}>Unit 7</th>
                        <th style={tableStyles.th}>Unit 8</th>
                        <th style={tableStyles.th}>Unit 9</th>
                        <th style={tableStyles.th}>Unit 10</th>
                    </tr>
                </thead>
                <tbody>
                    {composicoes.map((composicao, index) => (
                        <tr key={index}>
                            <td style={tableStyles.td}>{composicao.active_units_count}</td>
                            <td style={tableStyles.td}>{composicao.match_id}</td>
                            <td style={tableStyles.td}>{composicao.puuid}</td>
                            <td style={tableStyles.td}>{composicao.unit_1}</td>
                            <td style={tableStyles.td}>{composicao.unit_2}</td>
                            <td style={tableStyles.td}>{composicao.unit_3}</td>
                            <td style={tableStyles.td}>{composicao.unit_4}</td>
                            <td style={tableStyles.td}>{composicao.unit_5}</td>
                            <td style={tableStyles.td}>{composicao.unit_6}</td>
                            <td style={tableStyles.td}>{composicao.unit_7}</td>
                            <td style={tableStyles.td}>{composicao.unit_8}</td>
                            <td style={tableStyles.td}>{composicao.unit_9}</td>
                            <td style={tableStyles.td}>{composicao.unit_10}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Composicoes;
