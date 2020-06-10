import React, {useState} from 'react';
import Header from './Header';
import Banner from './Banner/Banner';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer/Footer';
import '../styles.scss';

const App = () => {
    const [open, setOpen] = useState(false);

    return(
        <div className='container'>
            <Header open={open} setOpen={setOpen} />
            <Banner/>
            <About />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;