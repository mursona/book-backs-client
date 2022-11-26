import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
// import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <div>
      {/* <ThemeProvider> */}
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
