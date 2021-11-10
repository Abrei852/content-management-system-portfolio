import React, { useState, useEffect } from "react";
import {
	Container,
	DropdownButton,
	Navbar,
	Row,
	Col,
	Card,
} from "react-bootstrap";
import Dropdown from "@restart/ui/esm/Dropdown";
import { ref, onValue } from "firebase/database";

export default function Dashboard({ db, setToken }) {
	const dbRef = db;
	const [dbExp, setDbExp] = useState([]);

	useEffect(() => {
		const fetchDbData = () => {
			const getFromRef = ref(dbRef, "myexp");
			onValue(getFromRef, (snapshot) => {
				console.log(snapshot.val());
				setDbExp(snapshot.val());
			});
		};
		fetchDbData();
		return function cleanup() {
			setDbExp([])
		};
	}, [dbRef]);

	function signOutUser() {
		setToken(null);
	}

	return (
		<div>
			<header>
				<Navbar bg="dark">
					<Container className="">
						<Navbar.Brand
							href="/dashboard"
							className="text-white p-4 "
						>
							Dashboard
						</Navbar.Brand>
						<DropdownButton
							id="dropdown-item-button"
							title="Account.Name"
							variant="secondary"
							className="justify-content-end d-flex"
						>
							<Dropdown.Item
								className="btn btn-block"
								as="button"
								onClick={() => signOutUser()}
							>
								Sign Out
							</Dropdown.Item>
						</DropdownButton>
					</Container>
				</Navbar>
			</header>
			<Row xs={1} md={2} className="g-4">
				{dbExp ? (
					dbExp.map((object) => (
						<Col key={object.id}>
							<Card id={object.id}>
								<Card.Img
									variant="top"
									src="holder.js/100px160"
								/>
								<Card.Body>
									<Card.Title>
										{object.title}
									</Card.Title>
									<Card.Text>
										{object.specs}
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))
				) : (
					<p>Loading...</p>
				)}
			</Row>
		</div>
	);
}
