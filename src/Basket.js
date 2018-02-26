function Basket () {
  this.products = []
}

Basket.prototype = {
  addProduct (product) {
    this.products.push(product)
  },
  getItems () {
    return this.products
  }
}

module.exports = Basket
