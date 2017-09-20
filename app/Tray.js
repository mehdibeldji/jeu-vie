const _ = require('lodash')

/**
 * The Tray class allow you to generate the game
 */
class Tray {

	/**
	 * This constuctor need 2 params for generate the tray
	 * @param {number} x - number of elements
	 * @param {number} y - number of elements in all elements (matrice)
	 * @return {array} gameBord
	 */
	constructor(x, y) {
		if (!Number.isInteger(x) || !Number.isInteger(y)) {
			throw new Error('Please, give me integers')
		}

		this.gameBord = []

		for (let i= 0; i < y; i++) {
			this.gameBord.push(this.generateRandomArrayOfCell(x))
		}
	}

	/** 
	 * Generate random array of cell
	 * @param {number} x - the number of element to generate
	 * @return {Array}
	 */
	generateRandomArrayOfCell(x) {
		return Array.from({length: x}, (val) => _.random(0, 1))
	}

}

module.exports = Tray
