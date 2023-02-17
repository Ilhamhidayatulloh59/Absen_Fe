import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useKeeplogin from '../hooks/useKeeplogin';
import { Flex, Spinner } from '@chakra-ui/react';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useKeeplogin();

  useEffect(() => {
    const keepLogin = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    !localStorage.getItem('token') ? keepLogin() : setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='teal'
            size='xl'
            marginTop={'30vh'}
          />
        </Flex>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
