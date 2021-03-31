import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from './Layout';

export default function BookIndexPage({ pageContext: { books } }) {
  return (
    <Layout>
      <Helmet title="Book index" />
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
