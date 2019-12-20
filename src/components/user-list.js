import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';
export default class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}
	componentDidMount() {
		axios
			.get('http://localhost:4000/users/')
			.then((res) => {
				this.setState({
					users: res.data
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	deleteItem(index) {
		this.setState({ users: this.state.users.filter((_, i) => i !== index) });
	}
	DataTable() {
		return this.state.users.map((res, i) => {
			return <UserTableRow obj={res} key={i} index={i} delete={(ind) => this.deleteItem(ind)} />;
		});
	}

	render() {
		return (
			<div className='table-wrapper'>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>city</th>
							<th>contact</th>
							<th>dob</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>{this.DataTable()}</tbody>
				</Table>
			</div>
		);
	}
}
