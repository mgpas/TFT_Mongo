import React, { useState } from 'react';
import tableStyles from '../tableStyles';
import CloseButton from './CloseButton'; // Importa o botão X

const DictionaryTable = () => {
  const [selectedTable, setSelectedTable] = useState('augmentos');

  const dictionary = {
    augmentos: [
      { field: 'augment_1', type: 'string' },
      { field: 'augment_2', type: 'string' },
      { field: 'augment_3', type: 'string' },
      { field: 'match_id', type: 'bigint' },
      { field: 'puuid', type: 'string' }
    ],
    composicao: [
      { field: 'active_units_count', type: 'bigint' },
      { field: 'match_id', type: 'bigint' },
      { field: 'puuid', type: 'string' },
      { field: 'unit_1', type: 'string' },
      { field: 'unit_2', type: 'string' },
      { field: 'unit_3', type: 'string' },
      { field: 'unit_4', type: 'string' },
      { field: 'unit_5', type: 'string' },
      { field: 'unit_6', type: 'string' },
      { field: 'unit_7', type: 'string' },
      { field: 'unit_8', type: 'string' },
      { field: 'unit_9', type: 'string' },
      { field: 'unit_10', type: 'string' }
    ],
    info_partida: [
      { field: 'info_partida_id', type: 'bigint' },
      { field: 'last_round', type: 'bigint' },
      { field: 'level', type: 'bigint' },
      { field: 'match_id', type: 'bigint' },
      { field: 'placement', type: 'bigint' },
      { field: 'puuid', type: 'string' }
    ],
    partidas: [
      { field: 'game_length', type: 'double' },
      { field: 'game_length_minutes', type: 'bigint' },
      { field: 'match_id', type: 'bigint' }
    ],
    traits: [
      { field: 'active_traits_count', type: 'bigint' },
      { field: 'match_id', type: 'bigint' },
      { field: 'puuid', type: 'string' },
      { field: 'trait_1', type: 'string' },
      { field: 'trait_2', type: 'string' },
      { field: 'trait_3', type: 'string' },
      { field: 'trait_4', type: 'string' },
      { field: 'trait_5', type: 'string' },
      { field: 'trait_6', type: 'string' },
      { field: 'trait_7', type: 'string' },
      { field: 'trait_8', type: 'string' }
    ],
    jogadores: [
      { field: 'puuid', type: 'string' }
    ]
  };

  return (
    <div>
      <CloseButton /> {/* Adiciona o botão de fechar */}
      <h1>Dicionário de Dados</h1>
      <label htmlFor="table-select">Selecione a tabela: </label>
      <select
        id="table-select"
        value={selectedTable}
        onChange={(e) => setSelectedTable(e.target.value)}
      >
        {Object.keys(dictionary).map((table) => (
          <option key={table} value={table}>
            {table}
          </option>
        ))}
      </select>

      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th style={tableStyles.th}>Campo</th>
            <th style={tableStyles.th}>Tipo de Dado</th>
          </tr>
        </thead>
        <tbody>
          {dictionary[selectedTable].map((field, index) => (
            <tr key={index} style={index % 2 === 0 ? tableStyles.evenRow : tableStyles.oddRow}>
              <td style={tableStyles.td}>{field.field}</td>
              <td style={tableStyles.td}>{field.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DictionaryTable;
