import React from "react";
import { connect } from "react-redux";

class CustomerDetails extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<h1>CUSTOMER DETAILS</h1>
				<div>
					{Object.keys(this.props.customersAddressList).length ? (
						this.props.customersAddressList.address.map((item) => (
							<p key={item}>{item}</p>
						))
					) : (
						<p>Please click on a row !</p>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		customersAddressList: state.customerStore.customersAddressList,
	};
};

export default connect(mapStateToProps)(CustomerDetails);
