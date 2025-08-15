import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './Components/Header/Header'
import { Body } from './Components/MainBodySection/Body'
import Footer from './Components/MainBodySection/Footer'
import NewsletterPage from './Components/MainBodySection/NewsletterPage'
import { ProductItems } from './Components/MainBodySection/ProductItems'
import { ProductDetails } from './Components/AboutProduct/ProductDetails'
import ContactUs from './Components/Pages/ContactUs'
import AboutUs from './Components/Pages/AboutUs'
import { CartSection } from './Components/Pages/CartSection'
import { LoginInPage } from './Components/Register Pages/LoginPage'

import SignUpPage from './Components/Register Pages/SignUpPage'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header></Header>
     <Body></Body>
    <ProductItems />
    <NewsletterPage />
     <Footer></Footer> */}
{/* <ProductDetails></ProductDetails> */}
{/* <LoginInPage></LoginInPage> */}
<LoginInPage></LoginInPage>

  </StrictMode>,
)
