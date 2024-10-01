const tableStyles = {
  container: {
    width: '100%',
    overflowX: 'auto',  // Adiciona rolagem horizontal se necessário
    marginTop: '10px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    padding: '2px',
    minWidth: '600px', // Garantir que a tabela tenha um tamanho mínimo para não ficar muito compacta
  },
  th: {
    padding: '2px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '2px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
};

export default tableStyles;
