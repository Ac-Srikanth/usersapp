import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class CreateUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			city: '',
			contact: '',
			dob: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		const userObject = {
			username: this.state.username,
			city: this.state.city,
			contact: this.state.contact,
			dob: this.state.dob
		};
		axios.post('http://localhost:4000/users/create-user', userObject).then((res) => {
			console.log(res.data);
			this.props.history.push('/user-list');
		});

		console.log('User Created !!');
		console.log(`UserName: ${this.state.username}`);
		console.log(`city: ${this.state.city}`);
		console.log(`contact : ${this.state.contact}`);
		console.log(`Dob : ${this.state.dob}`);
		this.setState({ username: '', city: '', contact: '', dob: '' });
	}

	render() {
		return (
			<div>
				<p>React Create user Component!</p>
				<div className='form-wrapper'>
					<Form onSubmit={this.onSubmit}>
						<Form.Group controlId='UserName'>
							<Form.Label>UserName</Form.Label>
							<Form.Control
								type='text'
								placeholder='username'
								name='username'
								value={this.state.username}
								onChange={this.onChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId='City'>
							<Form.Label>City</Form.Label>
							<Form.Control
								type='text'
								placeholder='city'
								name='city'
								value={this.state.city}
								onChange={this.onChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId='Contact'>
							<Form.Label>Contact</Form.Label>
							<Form.Control
								type='number'
								placeholder='Contact No'
								name='contact'
								value={this.state.contact}
								onChange={this.onChange}
								required
							/>
						</Form.Group>
						<Form.Group controlId='DOB'>
							<Form.Label>DOB</Form.Label>
							<Form.Control
								type='date'
								placeholder='Date of Birth'
								name='dob'
								value={this.state.dob}
								onChange={this.onChange}
								required
							/>
						</Form.Group>
						<Button variant='danger' size='lg' block='block' type='submit'>
							Create user
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}
