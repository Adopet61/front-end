import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Adopt from './components/Adopt';
import Add from './components/Add';
import Home from './components/Home';
import İlan from './components/Animal/İlan';


import İlanDetay from './components/Animal/İlanDetay'


import Donate from './components/Donate';



function App() {
	return (
		<div className='App'>
			<Router>
			
				<Navbar />
				<Switch>
					<Route path="/" exact component={() => <Home/>} />
					<Route path="/Adopt"  exact component={() =><Adopt/> } />
					<Route path="/Add" exact component={() => <Add/> } />
					<Route path="/donate" exact  component={() => <Donate/>} />
					

					<Route exact path="/Animal/:id"  component={() => <İlanDetay/>} />

					<Route path="/Animal" exact component={() => <İlan/>} />
				
				</Switch>
				<Footer />
			</Router>

		</div>
	);

}

export default App;