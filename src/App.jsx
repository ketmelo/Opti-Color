import React from 'react'
import {createBrowserRouter , RouterProvider  } from "react-router-dom";
import Home from './components/Home' 
import Ref from './components/Ref';
import Guia from './components/Guia';
import Participantes from './components/Participantes';
import Materiais from './components/Materiais';

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>,
    },
    {
      path:"/Participantes",
      element: <Participantes/>,
    },
    {
      path:"/Guia",
      element: <Guia/>,
    },
    {
      path:"/Ref",
      element: <Ref/>,
    },
    {
      path:"/Materiais",
      element: <Materiais/>,
    },


  ])

  function App() {
    return (
      <RouterProvider router={router} />
    );
  }
  export default App;