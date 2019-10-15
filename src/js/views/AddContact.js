import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class AddContact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phone: "",
			address: ""
		};
	}
	crearContacto(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	anadirContacto(e) {
		e.preventDefault();
		const contacts = JSON.parse(localStorage.getItem("contact"));
		if (contacts == null) {
			const newContact = [];
			newContact.push(this.state);
			localStorage.setItem("contact", JSON.stringify(newContact));
			this.props.history.push("/");
		} else {
			contacts.push(this.state);
			localStorage.setItem("contact", JSON.stringify(contacts));
			this.props.history.push("/");
		}
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<form onChange={e => this.crearContacto(e)}>
						<div className="form-group">
							<label>Full Name</label>
							<input type="text" name="name" className="form-control" placeholder="Full Name" />
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" name="email" className="form-control" placeholder="Enter email" />
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="phone" name="phone" className="form-control" placeholder="Enter phone" />
						</div>
						<div className="form-group">
							<label>Address</label>
							<input type="text" name="adress" className="form-control" placeholder="Enter address" />
						</div>
						<button
							type="button"
							onClick={e => this.anadirContacto(e)}
							className="btn btn-primary form-control">
							save
						</button>
						<Link className="mt-3 w-100 text-center" to="/">
							or get back to contacts
						</Link>
					</form>
				</div>
			</div>
		);
	}
}

AddContact.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};
