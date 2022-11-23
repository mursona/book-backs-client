import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes/Routes';

function App() {
  return (
    <div className='bg-white pt-8'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
