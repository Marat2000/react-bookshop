const getDarkMode=()=>{
const data = localStorage.getItem('darkMode')

return data? JSON.parse(data): false}
export default getDarkMode