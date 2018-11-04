import React from "react";
import _ from "lodash";
import ReactMarkdown from "react-markdown";

const Room = props => {
  const renderPosts = () => {
    let { posts } = props;

    // transform posts object into array
    posts = _.map(posts, (value, uid) => ({ ...value, uid }));

    return posts.map(post => (
      <ReactMarkdown source={post.markdownText} key={post.uid} />
    ));
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <p>Test</p>
      <hr />
      {renderPosts()}
    </div>
  );
};

export default Room;
