import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import './index.css';
import Api from './Api';

// inspired by https://www.youtube.com/watch?v=pCgDRgmfilE
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

function RepoSearch(props){
    return(
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action 1</MenuItem>
                        <MenuItem eventKey={3.2}>Action 2</MenuItem>
                        <MenuItem eventKey={3.3}>Action 3</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separate Link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <h1>Repo Search</h1>
            <form onSubmit={(evt) => props.handleSubmit(evt, props.inputValue)}>
                <input value={props.inputValue} onChange={props.handleInputChange}/>
            </form>
            <ul>
                {props.repos.map((repo) => {
                    return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        inputValue: state.searchInputValue,
        repos: state.repos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputChange:(evt) => {
            console.log('handleInputChange() fired');
            dispatch({type: 'SEARCH_INPUT_CHANGE', value: evt.target.value});
        },
        handleSubmit: (evt, query) => {
            evt.preventDefault();
            // Api.getRepos(dispatch, query);
            Api.getReposAxios(dispatch, query);

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);