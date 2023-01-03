import React from "react";
import SidebarMenu, { SidebarMenuBody } from "react-bootstrap-sidebar-menu";

export default function Settings() {
	return (
		<React.Fragment>
			<SidebarMenu className="bg-dark" expand="lg">
				<SidebarMenuBody>
					<SidebarMenu.Sub.Toggle>
						<SidebarMenu.Nav>
							<SidebarMenu.Nav.Link>
								<SidebarMenu.Nav.Title>
									<p>Account</p>
								</SidebarMenu.Nav.Title>
							</SidebarMenu.Nav.Link>
						</SidebarMenu.Nav>
						<SidebarMenu.Nav>
							<SidebarMenu.Nav.Link>
								<SidebarMenu.Nav.Title>
									<p>Account</p>
								</SidebarMenu.Nav.Title>
							</SidebarMenu.Nav.Link>
						</SidebarMenu.Nav>
						<SidebarMenu.Nav>
							<SidebarMenu.Nav.Link>
								<SidebarMenu.Nav.Title>
									<p>Account</p>
								</SidebarMenu.Nav.Title>
							</SidebarMenu.Nav.Link>
						</SidebarMenu.Nav>
					</SidebarMenu.Sub.Toggle>
					<SidebarMenu.Sub.Collapse>
						<SidebarMenu.Nav>
							<SidebarMenu.Nav.Link>
								<SidebarMenu.Nav.Icon>
									{/* Submenu item icon */}
								</SidebarMenu.Nav.Icon>
								<SidebarMenu.Nav.Title>
									{/* Submenu item title */}
								</SidebarMenu.Nav.Title>
							</SidebarMenu.Nav.Link>
						</SidebarMenu.Nav>
					</SidebarMenu.Sub.Collapse>
				</SidebarMenuBody>
			</SidebarMenu>

			<div className="d-flex justify-content-between">
				<p>content</p>
			</div>
		</React.Fragment>
	);
}
