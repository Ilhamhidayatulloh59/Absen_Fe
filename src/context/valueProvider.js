import { createContext, useState } from 'react';

const ValueContext = createContext({});

export const ValueProvider = ({ children }) => {
    const [value, setValue] = useState('');
    const [dates, setDates] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    return (
        <ValueContext.Provider value={{ value, setValue, date, setDate, dates, setDates }}>
            {children}
        </ValueContext.Provider>
    );
};

export default ValueContext;