import React from 'react';

const Article = props => (
    <li>
      <div>Title: {props.title}</div>
      <div>Author: {props.author}</div>
    </li>
);

export default Article
