module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto\:300,400,500,700`],
        display: `swap`,
      },
    },
    `gatsby-plugin-material-ui`,
  ],
}
