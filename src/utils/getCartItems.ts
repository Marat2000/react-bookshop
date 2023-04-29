export const getCartItems=()=>{
	const data=localStorage.getItem('cart')
	return data? JSON.parse(data) : []

}

