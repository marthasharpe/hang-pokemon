import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Badge } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-center">
            <Badge pill variant="success" style={{fontSize: "1rem"}}>Won: {props.won}</Badge>
            <Navbar.Brand style={{margin: "0 1.5rem", fontSize: "1.5rem"}}>Hangémon</Navbar.Brand>
            <Badge pill variant="danger" style={{fontSize: "1rem"}}>Lost: {props.lost}</Badge>
        </Navbar>
    )
}

const mapStateToProps = ({ won, lost }) => ({
    won,
    lost
})

export default connect(mapStateToProps, null)(Header);
