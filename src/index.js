import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "./context/authProvider";
import { ValueProvider } from "./context/valueProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <AuthProvider>
            <ValueProvider>
                <App />
            </ValueProvider>
        </AuthProvider>
    </ChakraProvider>
);
