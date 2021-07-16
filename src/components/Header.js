import React from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export default function Header(){

    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Explorer School</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/website/tutors/">Tutors</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/website/students/">Students</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/website/add-tutor/">Add New Tutor</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/website/add-student/">Add New Student</NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </Navbar>
    )
}