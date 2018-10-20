import React from 'react';
import {connect} from 'react-redux';

function RepoSearch(props){
    return(
        <div>
            <h1>Repo Search</h1>
            <form onSubmit={props.handleSubmit}>
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
        handleSubmit: (evt) => {
            evt.preventDefault();
            let query = 'steak';
            fetch(`https://api.github.com/search/repositories?q=${query}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log('do we get data??', data);
                    dispatch({type: 'SET_REPOS', repos: data.items});
                });
            console.log('submit');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);