import React from 'react';
import {connect} from 'react-redux';

function RepoSearch(props){
    return(
        <div>
            <h1>Repo Search</h1>
            <input value={props.inputValue} onChange={props.handleInputChange}/>
            <ul>
                <li>repo1</li>
                <li>repo2</li>
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        inputValue: state.searchInputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleInputChange:(evt) => {
            console.log('handleInputChange() fired');
            dispatch({type: 'SEARCH_INPUT_CHANGE', value: evt.target.value});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch);