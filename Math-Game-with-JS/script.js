class App extends React.Component {
	state = {
		nr1: undefined,
		nr2: undefined,
		sign: undefined,
		correct_answer: undefined,
		answer: undefined,
		score: 0,
		isWrong: false,
		database: undefined,
		users: [],
		user: undefined
	};

	componentWillMount = () => {
		const database = firebase.database().ref('/users');
		this.setState(
			{
				database
			},
			() => {
				this.getUsers();
				this.createCalculation();
			}
		);
	};

	getUsers = () => {
		const { database } = this.state;

		database.on('value', snapshot => {
			const users = [];
			const usersObj = snapshot.val();
			if (usersObj) {
				Object.keys(usersObj).forEach(key => {
					users.push(usersObj[key]);
				});

				this.setState({
					users
				});
			}
		});
	};

	getRandomNumber = (size = 1) => {
		const minNr = 1; // +'1'.padEnd(size, '0'); <- this for more complex calculations
		const maxNr = +Array(size)
			.fill(9)
			.join('');
		const nr = Math.floor(Math.random() * (maxNr - minNr + 1) + minNr);
		return nr;
	};

	getRandomSign = () => {
		const signs = ['+', '-', '*', '/'];
		const idx = Math.floor(Math.random() * signs.length);
		return signs[idx];
	};

	createCalculation = (size = 1) => {
		const nr1 = this.getRandomNumber(size);
		const nr2 = this.getRandomNumber(size);
		const sign = this.getRandomSign();
		const correct_answer = eval(`${nr1} ${sign} ${nr2}`);

		// Don't allow floating point answers nor Infinity
		if (
			Math.floor(correct_answer) !== correct_answer ||
			correct_answer === Infinity
		) {
			return this.createCalculation(size);
		} else {
			this.setState({
				nr1,
				nr2,
				sign,
				correct_answer
			});
		}
	};

	handleChange = e => {
		this.setState({
			// convert it to number
			answer: +e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { correct_answer, answer, score } = this.state;

		// increasing/decreasing the score & difficulty based on how far the user goes
		// score increment = how many digits does his score has <- old one
		// score increment = every 20 points
		const score_increment = Math.floor(Math.abs(score) / 25) + 1; // score.toString().split('').length; <- old
		let newScore = undefined;

		if (correct_answer === answer) {
			newScore = score + score_increment;
			e.target.reset();
			this.createCalculation(score_increment);
			this.setState({
				score: newScore,
				isWrong: false
			});
		} else {
			newScore = score - 1;
			this.setState({
				isWrong: true,
				score: newScore
			});
		}

		this.updateScoreInDB(newScore);
	};

	updateScoreInDB = score => {
		const { database, user } = this.state;

		database.child(user.id).update({
			score
		});
	};

	handleNameChange = e => {
		this.setState({
			// convert it to number
			name: e.target.value
		});
	};

	handleNameSubmit = e => {
		const { name, database } = this.state;

		if (!name) return;

		const newUser = {
			score: 0,
			name,
			lastUpdated: Date.now(),
			// generating a random id
			id: Math.random()
				.toString()
				.substr(2)
		};

		database.child(newUser.id).set(newUser);

		this.setState({
			user: newUser
		});
	};

	render() {
		const { nr1, nr2, sign, score, isWrong, user, users } = this.state;

		return (
			<>
				<h1>Math Wizz</h1>
				{user && <small className='name'>Hello, {user.name}</small>}
				{user ? (
					<div className='row'>
						<div className='col-1'>
							<form className='form' onSubmit={this.handleSubmit}>
								<h3>Calculate:</h3>
								<div className='calculation'>
									<p className='op'>{nr1}</p>
									<p className='op'>{sign}</p>
									<p className='op'>{nr2}</p>
									<p className='op'>=</p>
									<input
										type='number'
										className={`answer ${isWrong && 'wrong'}`}
										onChange={this.handleChange}
									/>
								</div>
								<div className='score'>Score: {score}</div>
							</form>
						</div>
						<div className='col-2'>
							<div className='leaderboard'>
								<h3>Leaderboard</h3>
								<ul>
									{users.length > 0 &&
										users
											.sort((a, b) => b.score - a.score)
											.slice(0, 10)
											.map((user, idx) => (
												<li key={idx}>
													<span>{user.name}</span> {user.score}
												</li>
											))}
								</ul>
							</div>
						</div>
					</div>
				) : (
					<div className='text-center'>
						<p>
							Welcome to the Math Wizz game. <br />
							Let's test your math skills! 😃 <br />
							<br />
							You'll be given random math questions that you'll have to answer.
							<br />
							Level changes when you reach the score of: 25, 50, 75...
						</p>
						<p>Please enter your username to start:</p>
						<input type='text' onChange={this.handleNameChange} />
						<button className="btn" onClick={this.handleNameSubmit}>Submit</button>
					</div>
				)}
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
