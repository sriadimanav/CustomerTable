import "./App.css";
import CustomerTable from "./CustomerTable/CustomerTable";
import CustomerDetails from "./CustomerDetails/CustomerDetails";
import React from "react";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<CustomerTable />
				<CustomerDetails />
			</div>
		);
	}
}

export default App;
