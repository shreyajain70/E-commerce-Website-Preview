import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './Components/Header/Header'
import { Body } from './Components/MainBodySection/Body'
import Footer from './Components/MainBodySection/Footer'
import { Outlet } from 'react-router-dom'
import { FullRouter } from './Router'


export const Main = () => {
  return (
    <>
      <Header></Header>
<Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

const Root = createRoot(document.getElementById("root"))
Root.render(<FullRouter></FullRouter>)