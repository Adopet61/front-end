import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

import Home from '../Home';
import Donate from '../Donate';
import Add from '../Add';
import Animal from '../Animal';
import cat from "../Animal/cat";
import dog from "../Animal/dog";


function Navbar() {
  return (
    <Router>
      <header id="navbar" className="fixed-top">
        <div className="container">
          <h1 className="logo">
            <NavLink to="/">Adopet</NavLink>
          </h1>

          <nav className="nav-menu ">
            <ul>
              <li>
                <NavLink to="/">Ana Sayfa</NavLink>
              </li>
              <li>
                <NavLink to="/Add">Sahiplendir</NavLink>
              </li>
              <li>
                <NavLink to="/donate">Bağış</NavLink>
              </li>
              <li>
                <Dropdown
                  nav
                  toggle={function noRefCheck() { }}
                >
                  
                  <DropdownToggle
                    caret
                    nav 
                  >   Sahipsiz Dostlarımız
                  
                  </DropdownToggle>
                 
                  <DropdownMenu>
                    <DropdownItem to="/cat">
                      Kedi
                    </DropdownItem>
                    <DropdownItem to = "/dog">
                      Köpek
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Add" component={Add} />
        <Route path="/donate" component={Donate} />
        <Route path="/cat" component={cat} />
        <Route path="/dog" component={dog} />
        <Route path ="/animal" component= {Animal}/>
      </Switch>


    </Router>
  );
}
export default Navbar;
