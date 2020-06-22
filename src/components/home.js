import React, { useEffect } from 'react';
import { postAction } from '../actions';
import { connect } from 'react-redux';

export const Home = (props) => {
    useEffect(() => {
        props.getPost();
    },[])
    return (
        <div>
            <br/>
            <br/>
            {props.posts.map(post =>{
                return <div key={post.id}>{post.title}</div>
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    const { posts } = state.post
    return {
        posts
    };
}
const actionCreator = {
    getPost: postAction.getPost
}
export default connect(mapStateToProps, actionCreator)(Home);