import { useContext } from 'react';

import ValueContext from '../context/valueProvider';

const useValue = () => {
    return useContext(ValueContext);
};

export default useValue;