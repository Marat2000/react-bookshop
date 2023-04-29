export const getSettings=()=>{
	const data = localStorage.getItem('settings')
	return data? JSON.parse(data) : [...new Array(4)].fill("")
}

export const getSettingsError=()=>{
	const data = localStorage.getItem('settings_error')
	return data? JSON.parse(data) : [...new Array(4)].fill(false)
}

export const getRegistered=()=>{
	const data = localStorage.getItem('registered')
	return data? JSON.parse(data) : false
}