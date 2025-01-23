// src/App.tsx
import React from 'react';
import Register from './components/Register';
import AddTransaction from './components/AddTransaction';

const App: React.FC = () => {
    return (
        <div>
            <h1>MyBank</h1>
            <Register />
            <AddTransaction />
        </div>
    );
};

export default App;