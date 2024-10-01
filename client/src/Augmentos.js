// src/Augmentos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tableStyles from './tableStyles';
import CloseButton from './components/CloseButton'; // Importa o botão X

const Augmentos = () => {
    const [augmentos, setAugmentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAugmentos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/augmentos');
                setAugmentos(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar augmentos:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchAugmentos();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Ocorreu um erro: {error.message}</div>;

    return (
        <div style={tableStyles.container}>
            <CloseButton /> {/* Adiciona o botão de fechar */}
            <h2>Augmentos</h2>
            <table style={tableStyles.table}>
                <thead>
                    <tr>
                        <th style={tableStyles.th}>Augment 1</th>
                        <th style={tableStyles.th}>Augment 2</th>
                        <th style={tableStyles.th}>Augment 3</th>
                        <th style={tableStyles.th}>Match ID</th>
                        <th style={tableStyles.th}>PUUID</th>
                    </tr>
                </thead>
                <tbody>
                    {augmentos.map((augmento, index) => (
                        <tr key={index}>
                            <td style={tableStyles.td}>{augmento.augment_1}</td>
                            <td style={tableStyles.td}>{augmento.augment_2}</td>
                            <td style={tableStyles.td}>{augmento.augment_3}</td>
                            <td style={tableStyles.td}>{augmento.match_id}</td>
                            <td style={tableStyles.td}>{augmento.puuid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Augmentos;
