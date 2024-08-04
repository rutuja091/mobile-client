import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from "./views/Home/Home"
import AddMobile from "./views/Addmobile/AddMobile.js"
import UpdateMobile from "./views/UpdateMobile/UpdateMobile.js"



const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
{
  path:"/",
  element:<Home/>
},
{
  path:"/add",
  element:<AddMobile/>
},
{
  path:"/update/:id",
  element:<UpdateMobile/>
},
{
path:"*",
  element:<h1>404 Not Found</h1>
}
])

root.render((<div>
  <RouterProvider router={router}/>

  </div>));


