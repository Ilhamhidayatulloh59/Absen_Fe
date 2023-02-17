import { useEffect, useRef, useState } from "react";
import {
  Box,
  Icon,
  useMediaQuery,
  Flex,
  Center,
  VStack,
  Text,
  Input,
  Heading,
  Circle,
  Select,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import axios from '../api/axios';
import * as Yup from 'yup';
import { Field, ErrorMessage, Formik, Form } from 'formik';
import { BiHide, BiShow } from "react-icons/bi";

const Register = () => {
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const [roles, setRoles] = useState([])
  const [showpass, setShowpass] = useState(false)
  const [showpass2, setShowpass2] = useState(false)

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .required('Please enter your username')
      .min(3, 'Full Name should be at least three characters'),
    email: Yup.string().email().required('Please enter your email address'),
    roleId: Yup.number()
      .required('Please enter your section'),
    password: Yup.string()
      .required('Please enter your password')
      .min(8, 'Password least 8 characters'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Password does not matched'
        )
        .required('Please enter your confirm password')
  });

  const role = async() => {
    try {
      const res = await axios.get('roles')
      setRoles(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    role()
  }, [])

  return (
    <Center>
      {isMobile ? (
        <Box w='100vw' h='100vh' bgColor='orange'>
              <Formik
              initialValues={{
                username: '',
                email: '',
                roleId: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={registerSchema}
              onSubmit={(values, action) => {
                handleSubmit(values);
                action.resetForm();
              }}
            >
              {
                <Form>
            <VStack w='100vw' p='4' h='90vh' mt='10vh' bgColor='white' borderTopRadius='3xl' >
              <Heading alignSelf='start'>Sign Up</Heading>
              <Text alignSelf='start' fontWeight='bold'>Enter the following details to sign up</Text>
              <Box w='90vw' >
                  <Input as={Field} name='username' type='text' borderRadius='3xl' bgColor='gray.100' p='5' h='12' placeholder='Username' mt='4' />
                    <ErrorMessage style={{ color: 'red' }}  component='div' name='username' />
                  <Input as={Field} name='email' type='email' borderRadius='3xl' bgColor='gray.100' p='5' h='12' placeholder='Email' mt='4' />
                    <ErrorMessage style={{ color: 'red' }}  component='div' name='email' />
                  <Field as={Select} name='roleId' borderRadius='3xl' bgColor='gray.100'  h='12' placeholder='Bagian' mt='4'>
                    {roles.map(item => {
                      return(
                        <option value={item.id}>{item.section}</option>
                        )
                      })}
                  </Field>
                    <ErrorMessage style={{ color: 'red' }}  component='div' name='roleId' />
                  <InputGroup mt='4'>
                    <Input as={Field} name='password' type={showpass ? 'text' : 'password'} borderRadius='3xl' bgColor='gray.100' p='5' h='12' placeholder='Password' />
                    <InputRightElement h="12" mr='3' onClick={() => setShowpass(!showpass)}>
                      <Icon w={5} h={5} as={showpass ?  BiShow : BiHide  }/>
                    </InputRightElement>
                  </InputGroup>
                    <ErrorMessage style={{ color: 'red' }}  component='div' name='password' />
                  <InputGroup mt='4'>
                    <Input as={Field} name='confirmPassword' type={showpass2 ? 'text' : 'password'} borderRadius='3xl' bgColor='gray.100' p='5' h='12' placeholder='Confirm Password' />
                    <InputRightElement h="12" mr='3' onClick={() => setShowpass2(!showpass2)}>
                      <Icon w={5} h={5} as={showpass2 ?  BiShow : BiHide  }/>
                    </InputRightElement>
                  </InputGroup>
                      <ErrorMessage style={{ color: 'red' }}  component='div' name='confirmPassword' />

              </Box>
                  <Flex justify='space-between' w='90vw' p='4' align='center'>
                    <Text>
                      Already have an account? <Text as={Link} to='/login' color='orange'>Sign In</Text>
                    </Text>
                    <Circle as={Button}
                      type='submit' bgColor='orange' p='3' color='white'>
                      <Icon w={5} h={5} as={IoArrowForwardOutline}/>
                    </Circle>
                  </Flex>
                  </VStack>
                </Form>
              }
            </Formik>
        </Box>
      ) : (
        "Not Found"
      )}
    </Center>
  );
};

export default Register;
