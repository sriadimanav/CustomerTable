import React from "react";
import { connect } from "react-redux";
import { getCusotmerAddressData } from "../store/actions/customerAPi";
import "./customerStyle.css";

class CustomerRow extends React.Component {
	state = {};

	handleRowClick = (id) => {
		this.props.getCusotmerAddressData(id);
	};

	render() {
		return this.props.customersList.map((item) => (
			<div
				className="parentTableDiv parentTableDivTop"
				key={item.id}
				onClick={() => this.handleRowClick(item.id)}
			>
				<div className="cell" style={{ color: "#ce1212" }}>
					{item.id}
				</div>
				<div className="cell">{item.name}</div>
				<div className="cell">{item.age}</div>
				<div className="cell">{item.sex}</div>
			</div>
		));
	}
}

const mapDispatchToProps = (dispatch) => ({
	getCusotmerAddressData: (id) => dispatch(getCusotmerAddressData(id)),
});

export default connect(null, mapDispatchToProps)(CustomerRow);
