import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GuessedWords extends Component {
	
	render() {
		const { guessedWords } = this.props;
		let contents
		
		if(guessedWords.length === 0){
			contents = (
				<span data-test="guess-instructions">Try to guess the secret word!</span>
			)
		}else {
			const guessedWordsRow = guessedWords.map((word, index) => (
				<tr data-test="guessed-word" key={index}>
					<td>{word.guessedWord}</td>
					<td>{word.letterMatchCount}</td>
				</tr>
			))

			contents = (
				<div data-test="guessed-words">
					<h3>GuessedWords</h3>
					<table className="table table-sm">
						<thead className="thead-light">
							<tr>
								<th>Guess</th>
								<th>Matching Letters</th>
							</tr>
						</thead>
						<tbody>
							{guessedWordsRow}
						</tbody>
					</table>
					<h3>Total guesses: <span data-test="guessed-count">{guessedWords.length}</span></h3>
				</div>
			)
		}
		return(
			<div data-test="component-guessed-words">
				{contents}
			</div>
		)
	}		
}

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord:PropTypes.string.isRequired,
			letterMatchCount:PropTypes.number.isRequired,
		})
	).isRequired
}

export default GuessedWords;
