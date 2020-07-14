module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:300,400,500,700`],
        display: `swap`,
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
  ],
}

// default font: `roboto\:300,400,500,700`
