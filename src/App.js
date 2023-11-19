import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./component/home";
import Welcome from "./component/welcome";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "welcome",
      element: <Welcome/>
    },
    
  ])
    return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    );
  }
  export default App