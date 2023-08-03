
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import AddChocolate from './Components/AddChocolate/AddChocolate';
import ViewChocolate from './Components/ViewChocolate/ViewChocolate';
import UpdateChocolate from './Components/UpdateChocolate/UpdateChocolate';
import Login from './Components/Login/Login';
import SignIn from './Components/SignIn/SignIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <ViewChocolate></ViewChocolate>,
          loader: () => fetch('http://localhost:5000/chocolates')
        },
        {
          path: '/addchocolate',
          element: <PrivateRoute><AddChocolate></AddChocolate></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <UpdateChocolate></UpdateChocolate>,
          loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`)
        }, {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
