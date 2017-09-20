const assert = require('chai').assert
const RulesClass = require('../app/rules')

describe('Check each rules of the game', function() {

	let rules = undefined

	before(function() {
		rules = new RulesClass()
	})

	it('If you have 2 neighbors, you are not alive :)', function() {
		const initialValue = 0;
		const tray = [
			[0, 0, 0],
			[1, 0, 1],
			[0, 0, 0]
		]

		/**
		 * Check if a cell is alive
		 * @param {array} the tray
		 * @param {number} y position (vertical)
		 * @param {number} x position (horizontal)
		 * @return {boolean}
		 */
		const isAlive = rules.isAliveNextTime(tray, initialValue, 1, 1)

		assert.strictEqual(isAlive, initialValue, 'The cell 1.1 will not be alive')
	})

	it('If you have 3 neighbors, your can born ! (middle)', function() {
		const initialValue = 0
		const tray = [
			[1, 0, 0],
			[1, 0, 1],
			[0, 0, 0]
		]

		const isAlive = rules.isAliveNextTime(tray, initialValue, 1, 1)

		assert.strictEqual(isAlive, !initialValue, 'The cell 1.1 will be born')
	})

	it('If you have 3 neighbors, your can born ! (first)', function() {
		const initialValue = 0
		const tray = [
			[0, 1, 0],
			[1, 1, 1],
			[0, 0, 0]
		]

		const isAlive = rules.isAliveNextTime(tray, initialValue, 0, 0)

		assert.strictEqual(isAlive, !initialValue, 'The cell 1.1 will be dead')
	})

	it('If you have 3 neighbors, your can born ! (last)', function() {
		const initialValue = 0
		const tray = [
			[0, 1, 0],
			[1, 1, 1],
			[0, 1, 0]
		]

		const isAlive = rules.isAliveNextTime(tray, initialValue, 2, 2)

		assert.strictEqual(isAlive, !initialValue, 'The cell 1.1 will be dead')
	})

	it('If you have more than 3 neighbors, you will be dead next time', function() {
		const initialValue = 0
		const tray = [
			[1, 1, 0],
			[1, 0, 1],
			[0, 0, 0]
		]

		const isAlive = rules.isAliveNextTime(tray, initialValue, 1, 1)

		assert.strictEqual(isAlive, !initialValue, 'The cell 1.1 will be dead')
	})

	it('If you have less than 2 neighbors, you will be dead next time', function() {
		const initialValue = 1
		const tray = [
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 0]
		]

		const isAlive = rules.isAliveNextTime(tray, initialValue, 1, 1)

		assert.strictEqual(isAlive, !initialValue, 'The cell 1.1 will be dead')
	})

})
