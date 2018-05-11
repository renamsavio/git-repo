const initial = {
  repositories: []
};

export const repository = (state = initial, action) => {
  switch (action.type) {
    case 'GET_REPOS_SUCCESS':
      return {...state, repositories: action.payload};
      // return getRepositories(state, action);
    case  'GET_REPOS_FAIL':
      // return clear(state, action);
    case 'CLEAR_REPOS': 
      return {...state, repositories: initial.repositories}
    default:
      return state;
  }
};