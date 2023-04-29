export const getAddress=()=>{
	const data = localStorage.getItem('address')
	return data ? data : ''
}

export const getCity=()=>{
	const data = localStorage.getItem('city')
	return data ? data : ''
}

export const getAddressAccept=()=>{
	const data = localStorage.getItem('address_accept')
	return data ? JSON.parse(data) : false
}