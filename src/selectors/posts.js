/* eslint-disable import/prefer-default-export */

/**
 * Get filtered posts by category name (excluding 'Accueil')
 * @param {array} posts
 * @param {string} category
 */
export const getPostsByCategory = (posts, category) => {
  let list = posts;

  if (category !== 'Accueil') {
    list = posts.filter((post) => post.category === category);
  }

  return list;
};
