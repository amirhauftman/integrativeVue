module.exports = {
  // devServer: {
  //   proxy: "http://localhost:8081",
  // },

  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
