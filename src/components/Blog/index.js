// == Import
import React from 'react';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import { getPostsByCategory } from 'src/selectors/posts';
import './styles.scss';

// == Composant
const Blog = () => (
  <div className="blog">
    <Header categories={categoriesData} />
    {categoriesData.map((category) => (
      <Posts
        key={category.label}
        posts={getPostsByCategory(postsData, category.label)}
        category={category.label}
      />
    ))}
    <Footer />
  </div>
);

// == Export
export default Blog;
