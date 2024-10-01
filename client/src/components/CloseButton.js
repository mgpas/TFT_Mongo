// src/components/CloseButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CloseButton = () => {
    const navigate = useNavigate();

    const fecharTabela = () => {
        navigate('/'); // Redireciona para a página principal
    };

    return (
        <button onClick={fecharTabela} className="close-btn" style={{ float: 'right', fontSize: '30px', backgroundColor: 'transparent', border: 'none', color: 'darkred', cursor: 'pointer' }}>
            X
        </button>
    );
};

export default CloseButton;
