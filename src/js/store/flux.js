const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [
				{
					id: 1,
					full_name: "",
					email: "",
					phone: "",
					address: ""
				},

				{
					id: 2,
					full_name: "",
					email: "",
					phone: "",
					address: ""
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
