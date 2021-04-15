import mockData from "../../mockData/mock";
import * as actionTypes from "../actionTypes";

export const getCusotmerData = () => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.FETCH_CUSTOMER_DATA,
			payload: mockData.data,
		});
	};
};

export const getCusotmerAddressData = (id) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.FETCH_CUSTOMER_ADDRESS_DATA,
			payload: mockData.addressData.find(
				(item) => item.id === parseInt(id)
			),
		});
	};
};
