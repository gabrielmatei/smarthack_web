module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://smarthack-backend.herokuapp.com'
  }
}
