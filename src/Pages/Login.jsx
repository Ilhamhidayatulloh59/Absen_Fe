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
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import * as Yup from 'yup';
import { Field, ErrorMessage, Formik, Form } from 'formik';

const Login = () => {
  const { auth ,setAuth } = useAuth()
  const [show, setShow] = useState(false)
  const [isMobile] = useMediaQuery("(max-width: 481px)");
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short'),
    email: Yup.string()
      .email('invalid email')
      .required('email is required'),
  })

  const onLogin = async (data) => {
    try {
      const res = await axios.post('./user/login', data)
      localStorage.setItem('token', res.data.token)
      const {email, username, photo, role} = res.data.isUserExist
      setAuth({
        email,
        username,
        photo,
        section: role.section,
      });
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Center>
      {isMobile ? (
        <Box w="100vw" h="100vh" bgColor="orange">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, action) => {
                onLogin(values);
                action.resetForm();
              }}
            >
              {
                <Form>
                  <VStack
                    w="100vw"
                    p="4"
                    h="90vh"
                    mt="10vh"
                    bgColor="white"
                    borderTopRadius="3xl"
                  >
                    <Heading alignSelf="start">Sign In</Heading>
                    <Box w="90vw">
                      <Input as={Field}
                        name='email'
                        type="email"
                        borderRadius="3xl"
                        bgColor="gray.100"
                        p="5"
                        h="12"
                        placeholder="Email"
                        mt="4"
                      />
                    <ErrorMessage
                          style={{ color: 'red' }}
                          component='div'
                          name='email'
                        />
                      <InputGroup mt="4">
                        <Input as={Field}
                        name='password'
                        type={show ? 'text' : 'password'}
                        borderRadius="3xl"
                        bgColor="gray.100"
                        p="5"
                        h="12"
                        placeholder="Password"
                        
                      />
                          <InputRightElement h="12" mr='3' onClick={() => setShow(!show)}>
                            <Icon w={5} h={5} as={show ?  BiShow : BiHide  }/>
                          </InputRightElement>
                      </InputGroup>
                      <ErrorMessage
                        style={{ color: 'red' }}
                        component='div'
                        name='password'
                      />
                    </Box>
                    <Flex justify="space-between" w="90vw" p="4" align="center">
                      <Text>
                        <Text as={Link} to="/register" color="orange">
                          Register
                        </Text>{" "}
                        or{" "}
                        <Text as={Link} color="orange">
                          Forgot Password
                        </Text>
                      </Text>
                      <Circle as={Button} type='submit' bgColor="orange" p="3" color="white" >
                        <Icon w={5} h={5} as={IoArrowForwardOutline} />
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

export default Login;
