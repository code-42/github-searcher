import axios from "axios";


function getRepos(dispatch, query) {
    fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('do we get data??', data);
            dispatch({type: 'SET_REPOS', repos: data.items});
        });

}

function getReposAxios(dispatch, query){
    // Make a request for a github query
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
        .then(function (response) {
            console.log('axios response',response);
            // handle success
            dispatch({type: 'SET_REPOS', repos: response.data.items});

        });
}

export default {
    getRepos
}