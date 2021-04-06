import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from './Layout';

export default function BookDetailPage({
  pageContext: { title, description, authors, frontcover },
}) {
  return (
    <Layout>
      <Helmet title={title} />
      <div className="row">
        <div className="column">
          <h1>{title}</h1>
          <h2>{authors.map(({ name }) => name).join(', ')}</h2>
          <p>{description}</p>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        <div className="column column-25">
          <img src={frontcover.path} alt={title} />
        </div>
      </div>
    </Layout>
  );
}
