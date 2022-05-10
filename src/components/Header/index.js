import "./style.css";
import React from "react";
import { Container, DropdownButton, Dropdown, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header({ signOut }) {
    return (
        <header>
            <Navbar bg="dark">
                <Container className="">
                    <Navbar.Brand href="/dashboard" className="text-white py-4">
                        Dashboard
                    </Navbar.Brand>
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
                            className="rotate"
                            as="button"
                            title="settings"
                        >
                            <div className="d-flex justify-content-between align-items-center">
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
                            </div>
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
                </Container>
            </Navbar>
        </header>
    );
}
