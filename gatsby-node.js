const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

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
  // Use 'link' to download and 'path' to store image (= url).
  books.forEach(async (book) => {
    const response = await fetch(
      'http://localhost:8080' + book.frontcover.link
    );
    fs.mkdirSync(path.dirname('public' + book.frontcover.path), {
      recursive: true,
    });
    fs.writeFileSync('public' + book.frontcover.path, await response.buffer());
  });

  // Create index page
  createPage({
    path: '/',
    component: path.resolve(`src/components/BookListing.js`),
    context: {
      books: books,
    },
  });

  // Create detail pages for each book
  books.forEach((book) => {
    createPage({
      path: book._metadata.path,
      component: path.resolve(`src/components/BookDetail.js`),
      context: {
        ...book,
      },
    });
  });
};
