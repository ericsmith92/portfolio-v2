import React, {useRef} from 'react';
import { useOnClickOutside } from './hooks';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

const Header = ({open, setOpen}) => {

    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return(
        <header>
            <a className="logo" href="/portfolio-v2">
                ES
            </a>
            <div className="menu_container" ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen}/> 
            </div>
        </header>
    ) 
}

export default Header;