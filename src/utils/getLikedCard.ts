export const getLikedCard=()=>{
	const data = localStorage.getItem('liked')
	return data ? JSON.parse(data) : []
}