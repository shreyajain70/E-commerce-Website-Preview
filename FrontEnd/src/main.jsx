import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { Header } from './Components/Header/Header'
import { Body } from './Components/MainBodySection/Body'
import { Footer } from './Components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Header></Header>
 <Body></Body>
{/*<Footer></Footer> */}
  </StrictMode>,
)
