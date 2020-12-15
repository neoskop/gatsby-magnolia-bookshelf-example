import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
        />
      </Helmet>
      <div class="container">
        <div class="row">
          <div class="column">
            <h1>Magnolia Bookshelf Demo</h1>
          </div>
        </div>
        {children}
        <div class="row">
          <div class="column">powered by Magnolia &amp; Gatsby</div>
        </div>
      </div>
    </>
  );
}
