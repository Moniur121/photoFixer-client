import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Banner from '../Banner/Banner'
import ClientReview from '../ClientReview/ClientReview'
import Counter from '../Counter/Counter'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Services from '../Services/Services'
import './Home.css'
function Home() {
    return (
         <section className="home-container">
             <div className="home-area">
                 <Header/>
                 <Banner/>
                 <AboutUs/>
                 <Services/>
                 <Counter/>
                 <ClientReview/>
                 <Footer/>
             </div>
         </section>
    )
}

export default Home
