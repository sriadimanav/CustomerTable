import * as actionTypes from "../actionTypes";

const initialState = {
	customersList: [],
	customersAddressList: {},
};

const customerStore = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_CUSTOMER_DATA:
			return {
				...state,
				customersList: action.payload,
			};
		case actionTypes.FETCH_CUSTOMER_ADDRESS_DATA:
			return {
				...state,
				customersAddressList: action.payload,
			};
		default:
			return state;
	}
};

export default customerStore;
