let data = require('./src/assets/data.json')

module.exports = function (api) {
  api.createPages(({ createPage }) => {
    data['products'].forEach(product => {
      createPage({
        path: '/product/' + product.id + '/',
        component: './src/templates/Product.vue',
        context: {
          product: product
        }
      })
    })
  })
}
