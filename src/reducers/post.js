
export const post = (state = {
    posts: [],
}, action) => {
    switch (action.type) {
        case 'GETPOSTS_SUCCESS':
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}