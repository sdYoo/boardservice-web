import React, {Component} from 'react';
import styled from 'styled-components';

class Navigation extends Component {
    render() {
        return (
            <Nav>
                <NavList>
                    <NavItem>소개</NavItem>
                    <NavItem>게시판</NavItem>
                    <NavItem>연락</NavItem>
                    <NavItem>메뉴1</NavItem>
                    <NavItem>메뉴2</NavItem>
                    <NavItem>메뉴3</NavItem>            
                </NavList>
            </Nav>
        );
    }
}

export default Navigation;

const Nav = styled.div`
    width: 100%;
    height:30px;
    border-bottom: 1px solid #d1d8e4;
`
const NavList = styled.ul`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`
const NavItem = styled.li`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    background-color: #a8ff78;
`