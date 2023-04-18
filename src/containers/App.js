import React from "react";
import Cardlist from "../component/Cardlist";
import SearchBox from "../component//SearchBox";
import "./App.css";
import ErrorBoundry from "../component/ErrorBoundry";
import Scroll from "../component//Scroll";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => {
				this.setState({ robots: users });
			});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});
		if (!this.state.robots.length) {
			return <h1>Loading...</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<Cardlist robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}
}
export default App;
