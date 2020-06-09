import React, {useState, useRef} from 'react';
import { useOnClickOutside } from './hooks';
import Header from './Header';
import Menu from './Menu/Menu';
import Banner from './Banner/Banner';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer/Footer';
import '../styles.scss';

const App = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return(
        <div className='container'>
            <div ref={node}>
                <Menu open={open} setOpen={setOpen}/> 
                <Header open={open} setOpen={setOpen} />
            </div>
            <Banner/>
            <About />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;