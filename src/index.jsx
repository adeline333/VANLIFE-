import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import {loader as vansLoader} from "./pages/vans/Loader"
import {loader as vanDetailLoader} from "./pages/vans/vanDetailLoader"
import VanDetail from './pages/vans/VanDetail';
import Layout from './components/Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income';
import Review from "./pages/host/Review"
import HostLayout from "./components/HostLayout"
import HostVans from './pages/host/HostVans';
import HostVanDetail from './pages/host/HostVanDetail';

import { loader as hostVansLoader } from "./pages/host/HostVansLoader"
import { loader as hostVanDetailLoader } from "./pages/host/HostVanDetailLoader"


import HostVanInfo from './pages/host/HostVanInfo';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanPricing from './pages/host/HostVanPricing';
import Notfound from './pages/Notfound';
import Error from './components/Error';
import "./assets/Server"
import Login from './pages/Login';
import {loader as loginLoader, action as loginAction} from "./pages/LoginFiles"
import { requireAuth } from './utils';

const router=createBrowserRouter(createRoutesFromElements( 
<Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
      path="/login"
      element={<Login />}
        loader={loginLoader}
        action={loginAction}
    />
          <Route path="vans" element={<Vans />} loader={vansLoader} 
           />
          <Route path="vans/:id" element={<VanDetail />}
          loader={vanDetailLoader} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index
             element={<Dashboard />}
              loader={async()=>{
                return await requireAuth()
                
              }}
              errorElement={<Error />}
              />
 
            <Route path="income"
             element={<Income />}
              loader={async()=>{
                return await requireAuth()
                
              }}/>
            <Route path="reviews"
             element={<Review />}
              loader={async()=>{
                return await requireAuth()
                
              }}/>

            <Route path="vans"
      
             element={<HostVans/>}
             loader={hostVansLoader}
             ></Route>


            <Route path="vans/:id"
             element={<HostVanDetail/>}
             loader={hostVanDetailLoader}>
              
            <Route index element={<HostVanInfo/>}
             loader={async()=>{
                return await requireAuth()
                
              }}/>
            <Route path="pricing"
             element={<HostVanPricing/>}
              loader={async()=>{
                return await requireAuth()
                
              }}/>
            <Route path="photos"
             element={<HostVanPhotos/>}

              loader={async()=>{
                return await requireAuth()
                
              }}/>

             </Route>

          </Route>
            <Route path="*" element={<Notfound/>}></Route>
        </Route>))
export default function App() {
  return (
   <RouterProvider router={router}/>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);