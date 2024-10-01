// src/Traits.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tableStyles from './tableStyles';
import CloseButton from './components/CloseButton'; // Importa o botão X

const Traits = () => {
    const [traits, setTraits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTraits = async () => {
            try {
                const response = await axios.get('http://localhost:5000/traits');
                setTraits(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar traits:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchTraits();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Ocorreu um erro: {error.message}</div>;

    return (
        <div style={tableStyles.container}>
            <CloseButton /> {/* Adiciona o botão de fechar */}
            <h2>Traits</h2>
            <table style={tableStyles.table}>
                <thead>
                    <tr>
                        <th style={tableStyles.th}>Match ID</th>
                        <th style={tableStyles.th}>PUUID</th>
                        <th style={tableStyles.th}>Active Traits Count</th>
                        <th style={tableStyles.th}>Trait 1</th>
                        <th style={tableStyles.th}>Trait 2</th>
                        <th style={tableStyles.th}>Trait 3</th>
                        <th style={tableStyles.th}>Trait 4</th>
                        <th style={tableStyles.th}>Trait 5</th>
                        <th style={tableStyles.th}>Trait 6</th>
                        <th style={tableStyles.th}>Trait 7</th>
                        <th style={tableStyles.th}>Trait 8</th>
                    </tr>
                </thead>
                <tbody>
                    {traits.map((trait, index) => (
                        <tr key={index}>
                            <td style={tableStyles.td}>{trait.match_id}</td>
                            <td style={tableStyles.td}>{trait.puuid}</td>
                            <td style={tableStyles.td}>{trait.active_traits_count}</td>
                            <td style={tableStyles.td}>{trait.trait_1}</td>
                            <td style={tableStyles.td}>{trait.trait_2}</td>
                            <td style={tableStyles.td}>{trait.trait_3}</td>
                            <td style={tableStyles.td}>{trait.trait_4}</td>
                            <td style={tableStyles.td}>{trait.trait_5}</td>
                            <td style={tableStyles.td}>{trait.trait_6}</td>
                            <td style={tableStyles.td}>{trait.trait_7}</td>
                            <td style={tableStyles.td}>{trait.trait_8}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Traits;
