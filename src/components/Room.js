import React from 'react';
import _ from "lodash";
import ReactMarkdown from "react-markdown";

/*
    A Room looks like this:

    
    title: "living room",
    uid: 1
    posts: {
      0: {
        markdownText: "**Hello World** was los",
        createdAt: Date.now(),
        files: null
      }
    

*/

const Room = (props) => {

    const renderPosts = () => {

        let { posts } = props;

        // transform posts object into array
        posts = _.map(posts, (value, uid) => ({ ...value, uid }))

        return posts.map(post => <ReactMarkdown source={post.markdownText} key={post.uid} />)
    }


    return (
        <div>
            <h2>{props.title}</h2>
            <hr />
            {renderPosts()}
        </div>
    )
}

export default Room;