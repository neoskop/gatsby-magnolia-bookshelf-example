import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from './Layout';

export default function BookIndexPage({ pageContext: { books } }) {
  return (
    <Layout>
      <Helmet title="Book index" />
      <h1>Magnolia bookcase demo</h1>
      <ul>
        {books.map(({ title, authors, _metadata }) => (
          <li key={_metadata.path}>
            <Link to={_metadata.path}>
              <b>{authors.map(({ name }) => name).join(', ')}</b>: {title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
