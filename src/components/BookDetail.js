import { Link } from 'gatsby';
import React from 'react';
import Layout from './Layout';

export default function BookDetail({
  pageContext: { title, description, authors, frontcover },
}) {
  return (
    <Layout>
      <div className="row">
        <div className="column">
        <Link to="/">
            <button>Back</button>
          </Link>
          <h2>{title}</h2>
          <h3>
            {authors.map(({ name }) => {
              return <b key={name}>{name}</b>;
            })}
          </h3>
          <p>
          {description}
          </p>
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
