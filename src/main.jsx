import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Components/route/router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-7xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
