import { postService } from "../services";

function getPost() {
    return dispatch => {
        postService.getPost()
            .then(data => {
                dispatch({ type: 'GETPOSTS_SUCCESS', payload: data })
            })
    }
}


export const postAction = {
    getPost
}