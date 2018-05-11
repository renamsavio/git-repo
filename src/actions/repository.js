export const listRepositories = (name) => {
    return async dispatch => {
        function success(success) {
            dispatch({
                type: 'GET_REPOS_SUCCESS',
                payload: success
            });
            return success;
        }
        function fail(error) {
            dispatch({
                type: 'GET_REPOS_FAIL',
                error
            });
            return error;
        }
        try {
            const url = `https://api.github.com/users/${name}/repos`;
            const res = await fetch(url);
            const repo = await res.json();
          return success(repo);
        } catch(e) {
            return fail(e);
        }
    }
}

export const clear = () => {
    return {
        type: 'CLEAR_REPOS'
    }
}