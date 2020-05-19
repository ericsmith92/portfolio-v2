import React from 'react';
import Header from './Header'
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import '../styles.scss';

const App = () => {
    return(
        <div className="container">
            <Header />
            <Banner />
            <Footer />
        </div>
    )
}

export default App;