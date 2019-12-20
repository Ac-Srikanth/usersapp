import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateUser from './components/create-user';
import UserList from './components/user-list';
import EditUser from './components/edit-user';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Navbar bg='dark' variant='dark'>
						<Container>
							<Navbar.Brand>
								<Link to={'/create-user'} className='nav-link'>
									React MERN Stack App
								</Link>
							</Navbar.Brand>
							<Nav className='justify-content-end'>
								<Nav>
									<Link to={'/create-user'} className='nav-link'>
										Create User
									</Link>
								</Nav>
								<Nav>
									<Link to={'/user-list'} className='nav-link'>
										User List
									</Link>
								</Nav>
							</Nav>
						</Container>
					</Navbar>
				</header>
				<Container>
					<Row>
						<Col md={12}>
							<div className='wrapper'>
								<Switch>
									<Route exact path='/' component={UserList} />
									<Route path='/create-user' component={CreateUser} />
									<Route path='/edit-user/:id' component={EditUser} />
									<Route path='/user-list' component={UserList} />
								</Switch>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Router>
	);
}

export default App;
