import React from 'react';
import {connect} from 'react-redux';

function RepoSearch(props){
    return(
        <div>
            <h1>Repo Search</h1>
            <input value={props.inputValue}/>
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

export default connect(mapStateToProps)(RepoSearch);