import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class UserTableRow extends Component {
	constructor(props) {
		super(props);
		this.deleteUser = this.deleteUser.bind(this);
	}
	deleteUser() {
		axios
			.delete('http://localhost:4000/users/delete-user/' + this.props.obj._id)
			.then((res) => {
				console.log('user successfully deleted!');
				this.props.delete(this.props.index);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<tr>
				<td>{this.props.obj.username}</td>
				<td>{this.props.obj.city}</td>
				<td>{this.props.obj.contact}</td>
				<td>{this.props.obj.dob}</td>
				<td>
					<Link className='edit-link' to={'/edit-user/' + this.props.obj._id}>
						Edit
					</Link>
					<Button onClick={this.deleteUser} size='sm' variant='danger'>
						Delete
					</Button>
				</td>
			</tr>
		);
	}
}
