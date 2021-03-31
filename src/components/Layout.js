import React from 'react';
import '../styles/milligram.css';

export default function Layout({ children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h1>Magnolia Bookcase Demo</h1>
          <hr />
        </div>
      </div>
      {children}
      <div className="row">
        <div className="column">
          <hr />
          powered by{' '}
          <a
            href="https://www.magnolia-cms.com/"
            target="_blank"
            rel="noreferrer"
          >
            Magnolia
          </a>{' '}
          &amp;{' '}
          <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
            Gatsby
          </a>
        </div>
      </div>
    </div>
  );
}
