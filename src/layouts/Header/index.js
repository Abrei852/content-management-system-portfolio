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
import {
	faCog,
	faSignOutAlt,
	faUser,
	faFile,
} from "@fortawesome/free-solid-svg-icons";
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
						<DropdownButton className="drop-down-button" id="" title="Name" variant="secondary">
							<Dropdown.Item
								className="btn btn-block w-100"
								as="button"
								title="Account"
							>
								<div className="d-flex justify-content-between align-items-center">
									<FontAwesomeIcon
										icon={faUser}
										style={{ fontSize: 12 + "px" }}
									/>
									<h6
										className="pointer"
										style={{
											marginBottom: 0 + "px",
											fontSize: 12 + "px",
											fontWeight: "normal",
										}}
									>
										Account
									</h6>
								</div>
							</Dropdown.Item>
							<PopUpTrigger firebaseStorage={firebaseStorage} firebaseFolder="cv">
								<Dropdown.Item
									className="btn btn-block w-100"
									as="button"
									title="Manage CV"
								>
									<div className="d-flex justify-content-between align-items-center">
										<FontAwesomeIcon
											icon={faFile}
											style={{ fontSize: 12 + "px" }}
										/>
										<h6
											className="pointer"
											style={{
												marginBottom: 0 + "px",
												fontSize: 12 + "px",
												fontWeight: "normal",
											}}
										>
											CV files
										</h6>
									</div>
								</Dropdown.Item>
							</PopUpTrigger>
							<Dropdown.Item
								className="rotate d-flex justify-content-between align-items-center rounded"
								title="settings"
								href="settings"
							>
								<FontAwesomeIcon
									icon={faCog}
									style={{ fontSize: 12 + "px" }}
									className="gear"
								/>
								<h6
									className="pointer"
									style={{
										marginBottom: 0 + "px",
										fontSize: 12 + "px",
										fontWeight: "normal",
									}}
								>
									Settings
								</h6>
							</Dropdown.Item>
							<Dropdown.Divider/>
							<Dropdown.Item
								className="btn btn-block w-100"
								as="button"
								title="Sign Out"
								onClick={() => signOut()}
							>
								<div className="d-flex justify-content-between align-items-center">
									<FontAwesomeIcon
										icon={faSignOutAlt}
										style={{ fontSize: 12 + "px" }}
									/>
									<h6
										className="pointer"
										style={{
											marginBottom: 0 + "px",
											fontSize: 12 + "px",
										}}
									>
										Sign out
									</h6>
								</div>
							</Dropdown.Item>
						</DropdownButton>
					</div>
				</Container>
			</Navbar>
		</header>
	);
}
