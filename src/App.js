import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import axios from './api/axios';
import Menu from './Components/Menu';
import Name from './Components/Profile';
import Home from './Pages/Home';
import Input from './Pages/Input';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Report from './Pages/Report';
import Setting from './Pages/Setting';
import RequireAuth from './Components/RequireAuth';
import NavBar from './Components/Nabvar';
import Form from './Pages/Form';
import Caraousel from './Components/Caraousel/Caraousel';

const router = createBrowserRouter([
  {
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: '/register',
        element: [
          <NavBar key={1}/>,
          <Register key={2} />
        ],
      },
      {
        path: '/login',
        element: [
          <NavBar key={1}/>,
          <Login key={2} />
        ],
      },
      {
        element:  <RequireAuth />,
        children: [
          {
            path: '/',
            element:  <Home />,
            children: [
              {
                path: '/',
                element: [
                  <Name key={1} />,
                  <Menu key={2} />,
                  <Caraousel key={3}/>,
                ],
              },
              {
                path: '/input',
                element: <Input />,
              },
              {
                path: '/report',
                element: <Report />,
              },
              {
                path: '/setting',
                element: <Setting />,
              },
              {
                path: '/profile',
                element: <Profile />,
              },
              {
                path: '/input/:jenis',
                element: <Form />,
              },
            ],
          },
        ]
      },
    ],
  },
]);

function App() {
  const {setAuth} = useAuth()
  const token = localStorage.getItem('token')
  const keepLogin = async () => {
    try {
      const res = await axios.get(`user/keeplogin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const {email, username, photo, role} = res.data
      setAuth({
        email,
        username,
        photo,
        section: role.section,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    token ?
    keepLogin() : console.log('login first');
  })

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
