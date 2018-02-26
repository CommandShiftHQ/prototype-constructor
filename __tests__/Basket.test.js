/* globals test expect */
const Basket = require('../src/Basket.js')

test('user can add product to basket', () => {
  const basket = new Basket()
  const orange = { name: 'Orange' }
  basket.addProduct(orange)

  expect(basket.getItems()).toContain(orange)
})
