import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Consultas = () => {
    const [selectedConsulta, setSelectedConsulta] = useState('');

    // Dados das consultas
    const consultas = {
        "Consulta 01": {
            "Jayce": [
                {
                    "_id": 30,
                    "total_partidas": 10,
                    "vitorias": 4,
                    "intervalo_tempo": 30,
                    "porcentagem_vitoria": 40
                },
                {
                    "_id": 40,
                    "total_partidas": 5,
                    "vitorias": 2,
                    "intervalo_tempo": 40,
                    "porcentagem_vitoria": 40
                }
            ],
            "Norra": [
                {
                    "_id": 30,
                    "total_partidas": 4,
                    "vitorias": 2,
                    "intervalo_tempo": 30,
                    "porcentagem_vitoria": 50
                },
                {
                    "_id": 40,
                    "total_partidas": 2,
                    "vitorias": 1,
                    "intervalo_tempo": 40,
                    "porcentagem_vitoria": 50
                }
            ]
        },
        "Consulta 02": [
            {
                "_id": null,
                "trait": "TFT12_Portal",
                "count": 5,
                "percentage": 12.5,
                "otherTraits": [
                    { "_id": null, "trait": "TFT12_Shapeshifter", "count": 5, "percentage": 12.5 },
                    { "_id": null, "trait": "TFT12_Druid", "count": 5, "percentage": 12.5 },
                    { "_id": null, "trait": "TFT12_Explorer", "count": 3, "percentage": 7.5 },
                    { "_id": null, "trait": "TFT12_Scholar", "count": 3, "percentage": 7.5 },
                    { "_id": null, "trait": "TFT12_Vanguard", "count": 3, "percentage": 7.5 },
                    { "_id": null, "trait": "TFT12_Blaster", "count": 3, "percentage": 7.5 },
                    { "_id": null, "trait": "TFT12_Frost", "count": 2, "percentage": 5 },
                    { "_id": null, "trait": "TFT12_Mage", "count": 2, "percentage": 5 },
                    { "_id": null, "trait": "TFT12_Pyro", "count": 2, "percentage": 5 },
                    { "_id": null, "trait": "TFT12_Honeymancy", "count": 2, "percentage": 5 },
                    { "_id": null, "trait": "TFT12_Hunter", "count": 2, "percentage": 5 },
                    { "_id": null, "trait": "TFT12_Faerie", "count": 2, "percentage": 5 },
                    { "_id": null, "trait": "TFT12_Witchcraft", "count": 1, "percentage": 2.5 }
                ]
            }
        ],
        "Consulta 03": {
            "derrotas": 48
        },
        "Consulta 04": [
            { "_id": 3, "bestTrait": "TFT12_Portal", "placement": 3, "percentage": 62.5 },
            { "_id": 2, "bestTrait": "TFT12_Shapeshifter", "placement": 2, "percentage": 50 },
            { "_id": 1, "bestTrait": "TFT12_Shapeshifter", "placement": 1, "percentage": 100 },
            { "_id": 4, "bestTrait": "TFT12_Preserver", "placement": 4, "percentage": 100 }
        ],
        "Consulta 05": [
            { "_id": "TFT12_Galio", "count": 6 },
            { "_id": "TFT12_Taric", "count": 5 },
            { "_id": "TFT12_Kassadin", "count": 5 }
        ],
        "Consulta 06": {
            "traits": [
                { "_id": "TFT12_Shapeshifter", "count": 21 },
                { "_id": "TFT12_Vanguard", "count": 14 },
                { "_id": "TFT12_Sugarcraft", "count": 14 },
                { "_id": "TFT12_Portal", "count": 14 },
                { "_id": "TFT12_Scholar", "count": 13 }
            ],
            "units": [
                { "_id": "TFT12_Galio", "count": 22 },
                { "_id": "TFT12_Kassadin", "count": 20 },
                { "_id": "TFT12_Jayce", "count": 15 },
                { "_id": "TFT12_Zilean", "count": 14 },
                { "_id": "TFT12_Jinx", "count": 14 }
            ]
        },
        "Consulta 07": [
            {
                "_id": {
                    "augment_1": "TFT9_Augment_YouHaveMySword",
                    "augment_2": "TFT9_Augment_ImpenetrableBulwark",
                    "augment_3": "TFT6_Augment_ItemGrabBag1"
                },
                "count": 8,
                "augments": {
                    "augment_1": "TFT9_Augment_YouHaveMySword",
                    "augment_2": "TFT9_Augment_ImpenetrableBulwark",
                    "augment_3": "TFT6_Augment_ItemGrabBag1"
                }
            },
            {
                "_id": {
                    "augment_1": "TFT7_Augment_ClutteredMind",
                    "augment_2": "TFT_Augment_SpellcastersToolbox",
                    "augment_3": "TFT_Augment_ReinforcedRejuvenation2"
                },
                "count": 8,
                "augments": {
                    "augment_1": "TFT7_Augment_ClutteredMind",
                    "augment_2": "TFT_Augment_SpellcastersToolbox",
                    "augment_3": "TFT_Augment_ReinforcedRejuvenation2"
                }
            },
            {
                "_id": {
                    "augment_1": "TFT9_Augment_YouHaveMyBow",
                    "augment_2": "TFT12_Augment_MultistrikerCrown",
                    "augment_3": "TFT9_Augment_BigGrabBag"
                },
                "count": 8,
                "augments": {
                    "augment_1": "TFT9_Augment_YouHaveMyBow",
                    "augment_2": "TFT12_Augment_MultistrikerCrown",
                    "augment_3": "TFT9_Augment_BigGrabBag"
                }
            }
        ],
        "Consulta 08": [
            { "_id": "20_a_40_min", "avg_placement": 4.35, "interval": "20_a_40_min" },
            { "_id": "mais_40_min", "avg_placement": 4.53, "interval": "mais_40_min" }
        ]
    };

    const prepareBarData = () => {
        const traits = consultas["Consulta 02"][0].otherTraits;
        return {
            labels: traits.map(trait => trait.trait),
            datasets: [
                {
                    label: 'Count',
                    data: traits.map(trait => trait.count),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                }
            ],
        };
    };

    // Prepara os dados para o gráfico de pizza de traits
    const prepareTraitsPieData = () => {
        const traits = consultas["Consulta 06"].traits;
        return {
            labels: traits.map(trait => trait._id),
            datasets: [
                {
                    data: traits.map(trait => trait.count),
                    backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
                }
            ],
        };
    };

    // Prepara os dados para o gráfico de pizza de units
    const prepareUnitsPieData = () => {
        const units = consultas["Consulta 06"].units;
        return {
            labels: units.map(unit => unit._id),
            datasets: [
                {
                    data: units.map(unit => unit.count),
                    backgroundColor: ['rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
                }
            ],
        };
    };

    return (
        <div>
            <h2>Consultas</h2>
            <select onChange={(e) => setSelectedConsulta(e.target.value)} value={selectedConsulta}>
                <option value="">Selecione uma consulta</option>
                {Object.keys(consultas).map((consulta) => (
                    <option key={consulta} value={consulta}>{consulta}</option>
                ))}
            </select>

            <div style={{ marginTop: '20px' }}>
                {selectedConsulta && (
                    <div>
                        <h3>{selectedConsulta}</h3>
                        {selectedConsulta === "Consulta 02" ? (
                            <div style={{ width: '100%', marginTop: '20px' }}>
                                <Bar data={prepareBarData()} options={{ responsive: true }} />
                            </div>
                        ) : (
                            <pre>{JSON.stringify(consultas[selectedConsulta], null, 2)}</pre>
                        )}
                        {selectedConsulta === "Consulta 06" ? (
                            <div>
                                <h4>Distribuição de Traits</h4>
                                <Pie data={prepareTraitsPieData()} options={{ responsive: true }} />
                                <h4>Distribuição de Units</h4>
                                <Pie data={prepareUnitsPieData()} options={{ responsive: true }} />
                            </div>
                        ) : (
                            <pre>{JSON.stringify(consultas[selectedConsulta], null, 2)}</pre>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Consultas;
