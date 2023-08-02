
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import AddChocolate from './Components/AddChocolate/AddChocolate';
import ViewChocolate from './Components/ViewChocolate/ViewChocolate';
import UpdateChocolate from './Components/UpdateChocolate/UpdateChocolate';

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
          element: <AddChocolate></AddChocolate>
        },
        {
          path: '/update/:id',
          element: <UpdateChocolate></UpdateChocolate>,
          loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`)
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
