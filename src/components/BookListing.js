import { Link } from 'gatsby';
import React from 'react';
import Layout from './Layout';

export default function BookListing({ pageContext: { books } }) {
  return (
    <Layout>
      <ul>
        {books.map(({ title, authors, _metadata }) => {
          return (
            <li key={_metadata.path}>
              <Link to={_metadata.path}>
                {authors.map(({ name }) => {
                  return <b key={name}>{name}</b>;
                })}
                : {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
