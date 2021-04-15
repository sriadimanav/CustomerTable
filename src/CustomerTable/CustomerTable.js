import React from "react";
import { connect } from "react-redux";
import { getCusotmerData } from "../store/actions/customerAPi";
import "./customerStyle.css";
import CustomerRow from "./CustomerRow";

class CustomerTable extends React.Component {
	state = {
		loader: true,
	};

	componentDidMount() {
		this.props.getCusotmerData();
		if (this.state.loader) {
			this.setState({
				loader: false,
			});
		}
	}
	render() {
		return (
			<div className="container">
				{this.state.loader ? (
					<p>Loading</p>
				) : (
					<>
						<h1>CUSTOMER TABLE</h1>
						<div className="parentTableDiv">
							<div className="cell cellFirst">ID</div>
							<div className="cell cellFirst">Name</div>
							<div className="cell cellFirst">Age</div>
							<div className="cell cellFirst">Gender</div>
						</div>

						<CustomerRow customersList={this.props.customersList} />
					</>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		customersList: state.customerStore.customersList,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getCusotmerData: () => dispatch(getCusotmerData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTable);
