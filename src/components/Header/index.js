import React from "react";
import { Container, DropdownButton, Navbar } from "react-bootstrap";
import Dropdown from "@restart/ui/esm/Dropdown";

export default function Header({ signOut }) {
    return (
        <header>
            <Navbar bg="dark">
                <Container className="">
                    <Navbar.Brand href="/dashboard" className="text-white p-4 ">
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
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </Dropdown.Item>
                    </DropdownButton>
                </Container>
            </Navbar>
        </header>
    );
}
