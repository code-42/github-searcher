import React from 'react';
import {connect} from 'react-redux';
import Api from './Api';
import axios from 'axios';

function RepoSearch(props){
    return(
        <div>
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

            // Make a request for a github query
            axios.get(`https://api.github.com/search/repositories?q=${query}`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    dispatch({type: 'SET_REPOS', repos: response.data.items});
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);