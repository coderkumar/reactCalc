function getPost(){
    const requestOption = {
        method: 'GET'
    }
    return fetch('https://jsonplaceholder.typicode.com/posts', requestOption).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text =>{
        const data = JSON.parse(text);
        if(!response.ok){
            return Promise.reject(data);
        }
        return data;
    })

}

export const postService = {
    getPost
}