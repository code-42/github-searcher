

function getRepos(dispatch) {
    let query = 'steak';
    fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log('do we get data??', data);
            dispatch({type: 'SET_REPOS', repos: data.items});
        });

}

export default {
    getRepos
}