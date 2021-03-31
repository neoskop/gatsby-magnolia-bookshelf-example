const fs = require('fs').promises;
const path = require('path');
const fetch = require('node-fetch').default;

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const query = await graphql(`
    query {
      magnolia {
        books {
          title
          description
          authors {
            name
          }
          frontcover {
            link
            path
          }
          _metadata {
            path
          }
        }
      }
    }
  `);

  const books = query.data.magnolia.books;

  // Retrieve images and store them in public directory
  // Use 'link' to download and 'path' to store image.
  books.forEach(async (book) => {
    const response = await fetch(
      `http://localhost:8080${book.frontcover.link}`
    );
    if (response.ok) {
      const assetpath = `public${book.frontcover.path}`;
      await fs.mkdir(path.dirname(assetpath), {
        recursive: true,
      });
      await fs.writeFile(assetpath, await response.buffer());
    }
  });

  // Create index page
  createPage({
    path: '/',
    component: path.resolve(`src/components/BookIndexPage.js`),
    context: {
      books,
    },
  });

  // Create detail pages for each book
  books.forEach((book) => {
    createPage({
      path: book._metadata.path,
      component: path.resolve(`src/components/BookDetailPage.js`),
      context: {
        ...book,
      },
    });
  });
};
