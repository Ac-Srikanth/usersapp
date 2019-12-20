import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditUser extends Component {
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

	componentDidMount() {
		axios
			.get('http://localhost:4000/users/edit-user/' + this.props.match.params.id)
			.then((res) => {
				this.setState({
					username: res.data.username,
					city: res.data.city,
					contact: res.data.contact,
					dob: res.data.dob
				});
			})
			.catch((error) => {
				console.log(error);
			});
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

		axios
			.put('http://localhost:4000/users/update-user/' + this.props.match.params.id, userObject)
			.then((res) => {
				console.log(res.data);
				console.log('user successfully updated');
				this.props.history.push('/user-list');
			})
			.catch((error) => {
				console.log(error);
			});

		// Redirect to User- List
	}
	render() {
		return (
			<div>
				<p>React Edit User Component!</p>
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
							/>
						</Form.Group>
						<Button variant='danger' size='lg' block='block' type='submit'>
							Update user
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}
