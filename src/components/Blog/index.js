// == Import
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import { getPostsByCategory } from 'src/selectors/posts';
import './styles.scss';

// == Composant
const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => {
      axios
        .get('https://oclock-open-apis.now.sh/api/blog/posts')
        .then((response) => {
          setPosts(response.data);
        });
    },
    [],
  );
  return (
    <div className="blog">

      <Header categories={categoriesData} />

      {categoriesData.map((category) => (
        <Posts
          key={category.label}
          posts={getPostsByCategory(posts, category.label)}
          category={category.label}
        />
      ))}

      <Footer />

    </div>
  );
};

// == Export
export default Blog;
