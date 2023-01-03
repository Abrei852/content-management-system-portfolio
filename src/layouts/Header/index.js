import "./style.css";
import React from "react";
import PopUpTrigger from "components/PopUpTrigger";
import {
	Container,
	DropdownButton,
	Dropdown,
	Navbar,
	Button,
} from "react-bootstrap";
import { faCog, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { firebaseStorage } from "db/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ signOut }) {
	return (
		<header>
			<Navbar bg="dark">
				<Container className="py-4">
					<Navbar.Brand href="/dashboard" className="text-white">
						Dashboard
					</Navbar.Brand>
					<div className="d-flex align-items-center">
						<PopUpTrigger firebaseStorage={firebaseStorage}>
							<Button
								title="Update CV"
								className="cv-picker expand-sm"
							>
								Update CV
							</Button>
						</PopUpTrigger>
						<DropdownButton id="" title="Name" variant="secondary">
							<Dropdown.Item
								className="btn btn-block w-100 rounded-0"
								as="button"
								title="Account"
							>
								<div className="d-flex justify-content-between align-items-center">
									<h6
										style={{
											marginBottom: 0 + "px",
											fontSize: 12 + "px",
											fontWeight: "normal",
										}}
									>
										Account
									</h6>
									<FontAwesomeIcon
										icon={faUser}
										style={{ fontSize: 12 + "px" }}
									/>
								</div>
							</Dropdown.Item>
							<Dropdown.Item
								className="rotate d-flex justify-content-between align-items-center"
								title="settings"
								href="settings"
							>
								<h6
									style={{
										marginBottom: 0 + "px",
										fontSize: 12 + "px",
										fontWeight: "normal",
									}}
								>
									Settings
								</h6>
								<FontAwesomeIcon
									icon={faCog}
									style={{ fontSize: 12 + "px" }}
									className="gear"
								/>
							</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item
								className="btn btn-block w-100 rounded-0"
								as="button"
								title="Sign Out"
								onClick={() => signOut()}
							>
								<div className="d-flex justify-content-between align-items-center">
									<h6
										style={{
											marginBottom: 0 + "px",
											fontSize: 12 + "px",
										}}
									>
										Sign out
									</h6>
									<FontAwesomeIcon
										icon={faSignOutAlt}
										style={{ fontSize: 12 + "px" }}
									/>
								</div>
							</Dropdown.Item>
						</DropdownButton>
					</div>
				</Container>
			</Navbar>
		</header>
	);
}
