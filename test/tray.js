const assert = require('chai').assert
const Tray = require('../app/tray')
let game = undefined
const x = 5
const y = 5

describe('generate tray', function() {

	before(function() {
		game = new Tray(x, y)
	})

	describe('constructor()', function() {
		it('generate tray', function() {
			assert.isArray(game.gameBord, 'The tray should be an aray')
			assert.lengthOf(game.gameBord, x, 'the tray should be an array of 5 items')

			game.gameBord.map(el => {
				assert.isArray(el, 'each element should be an array')
				assert.lengthOf(el, y, 'each element should have 5 elements')
			})
		})

		// it('should return an error if x or y is not an integer', function() {
		// 	// assert.throws(new Tray('t', 2), Error, 'Please, give me integers')
		// 	// assert.throws(new Tray(2, 't'), Error, 'Please, give me integers')
		// })

	})

	describe('generateRandomArrayOfCell()', function() {
		it('generate an array with random value between 0 and 1', function() {
			const randomArray = game.generateRandomArrayOfCell(x)

			assert.isArray(randomArray, 'This element should be an array')
			assert.lengthOf(randomArray, x, 'This element should contains x elements')
		})
	})
})