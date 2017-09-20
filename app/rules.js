/** 
 * This class contains all the game rules
 */
class Rules {

	constructor() {}

	/** 
	 * Check if a cell is alive next time
	 * @param {array[]} tray - the game board
	 * @param {number} x - the x coordonate
	 * @param {number} x - the y coordonate
	 * @return {boolean}
	 */
	isAliveNextTime(tray, initialVal, x, y) {
		if (!Array.isArray(tray)) {
			throw new Error('The tray should be an array')
		}

		if (!Number.isInteger(x) || !Number.isInteger(y)) {
			throw new Error('Please, give me integers')
		}

		if (!this.validCoordonate(tray, x, y)) {
			return false
		}

		const neighbors = this.getNbNeighbors(tray, x, y)

		switch (neighbors) {
			case 1:
			case 3:
			case 4:
				return !initialVal
			case 2:
				return initialVal
		}
	}

	/** 
	 * Check if the coordonate is valid
	 * @param {array} tray - game board
	 * @param {number} x - the x coordonate
	 * @param {number} y - the y coordonate
	 * @return {boolean}
	 */
	validCoordonate(tray, x, y) {

		if (typeof tray[x] === 'undefined') {
			console.log(`The element ${x} is not on the array`)
			return false
		}

		if (typeof tray[x][y] === 'undefined') {
			console.log(`The element ${y} is not on the array`)
			return false
		}

		return true
	}

	/**
	 * Check the position of a coordonate for know where the neighbords
	 * @param {array[]} tray
	 * @param {number} x - the coordonate
	 * @param {string}
	 */
	checkMyPosition(tray, x) {
		switch (x) {
			case 0:
				return 'first'
			case tray.length -1:
				return 'last'
			default: 
				return 'other'
		}
	}

	/**
	 * Get number of neighbors
	 * @param {array[]} tray
	 * @param {number} x
	 * @param {number} y
	 * @return {number} 
	 */
	getNbNeighbors(tray, x, y) {

		const yPosition = this.checkMyPosition(tray, y)
		const xPosition = this.checkMyPosition(tray, x)
		let neighbors = 0

		if (xPosition === 'other' && yPosition === 'other') {
			
			// Get the number of neighbors on the same line
			neighbors += tray[x][y-1] + tray[x][y+1]
			
			// Get the number of neighbors on line -1
			neighbors += tray[x-1][y-1] + tray[x-1][y] + tray[x-1][y+1]
			
			// Get the number of neighbors on line +1
			neighbors += tray[x+1][y-1] + tray[x+1][y] + tray[x+1][y+1]

		} else if (xPosition === 'first' && yPosition === 'other') {
			
			// Get the number of neighbors on the same line
			neighbors += tray[x][y-1] + tray[x][y+1]
			
			// Get the number of neighbors on the line +1
			neighbors += tray[x+1][y-1] + tray[x+1][y] + tray[x+1][y+1]

		} else if (xPosition === 'last' && yPosition === 'other') {
			
			// Get the number of neighbors on the same line
			neighbors += tray[x][y-1] + tray[x][y+1]
			
			// Get the number of neighbors on the line -1
			neighbors += tray[x-1][y-1] + tray[x-1][y] + tray[x-1][y+1]

		} else if (xPosition === 'other' && yPosition === 'first') {

			// Get the number of neighbors on the same line
			neighbors += tray[x][y+1]

			// Get the number of neighbors on the line - 1
			neighbors += tray[x-1][y] + tray[x-1][y+1]

			// Get the number of neighbors on the line + 1
			neighbors += tray[x+1][y] + tray[x+1][y+1]

		} else if (xPosition === 'other' && yPosition === 'last') {

			// Get the number of neighbors on the same line
			neighbors += tray[x][y-1]

			// Get the number of neighbors on the line - 1
			neighbors += tray[x-1][y] + tray[x-1][y-1]

			// Get the number of neighbors on the line + 1
			neighbors += tray[x+1][y] + tray[x+1][y-1]

		} else if (xPosition === 'last' && yPosition === 'last') {
			neighbors += tray[x][y-1]
			neighbors += tray[x-1][y-1] + tray[x-1][y]
		} else if (xPosition === 'first' && yPosition === 'first') {
			neighbors += tray[x][y+1]
			neighbors += tray[x+1][y] + tray[x+1][y+1]
		} else if (xPosition === 'first' && yPosition === 'last') {
			neighbors += tray[x][y-1]
			neighbors += tray[x+1][y] + tray[x+1][y-1]
		} else if (xPosition === 'last' && yPosition === 'first') {
			neighbors += tray[x][y+1]
			neighbors += tray[x-1][y] + tray[x-1][y+1]
		}

		return neighbors

	}
}

module.exports = Rules