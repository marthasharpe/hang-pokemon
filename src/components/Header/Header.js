import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Badge } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Hangémon</Navbar.Brand>
            <Badge variant="success">Won: {props.won}</Badge>
            <Badge variant="danger">Lost: {props.lost}</Badge>
        </Navbar>
    )
}

const mapStateToProps = ({ won, lost }) => ({
    won,
    lost
})

export default connect(mapStateToProps, null)(Header);
