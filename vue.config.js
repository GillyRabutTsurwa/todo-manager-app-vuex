module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/sass/_variables.scss";
        @import "@/assets/sass/_mixins.scss";
          `,
      },
    },
  },
};
