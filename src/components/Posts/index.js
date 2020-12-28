import React from 'react';
import PropTypes from 'prop-types';

import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({ posts, category }) => {
  let title = 'Dev of thrones';

  if (category !== 'Accueil') {
    title = `Catégorie : ${category}`;
  }

  return (
    <main className="posts">
      <h1 className="posts-title">{title}</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  category: PropTypes.string.isRequired,
};

export default Posts;
