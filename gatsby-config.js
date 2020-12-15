module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'MAGNOLIA',
        fieldName: 'magnolia',
        url: 'http://localhost:8080/magnoliaAuthor/.graphql',
      },
    },
  ],
};
