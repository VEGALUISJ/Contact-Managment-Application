import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "../component/ContactCard.js";
import Modal from "../component/Modal";

export default class Contacts extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			contact: []
		};
	}

	UNSAFE_componentWillMount() {
		const contacto = JSON.parse(localStorage.getItem("contact"));
		if (contacto == null) {
			this.setState({ contact: [] });
		} else {
			this.setState({ contact: contacto });
		}
	}

	render() {
		console.log(this.state.contact);
		return (
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">
							Add new contact
						</Link>
					</p>
					<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
						<ul className="list-group pull-down" id="contact-list">
							{this.state.contact.map((item, ind) => (
								<ContactCard
									onDelete={() => this.setState({ showModal: true })}
									key={ind}
									id={ind}
									name={item.name}
									email={item.email}
									phone={item.phone}
									adress={item.adress}
								/>
							))}
						</ul>
					</div>
				</div>
				<Modal show={this.state.showModal} onClose={() => this.setState({ showModal: false })} />
			</div>
		);
	}
}
