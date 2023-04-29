import loading from '.././loading.gif'

export const Loading=()=>{
	return (
		<div style={{ display:'grid' , placeItems:'center' }}>
		<h1 style={{color:'var(--Pink)'}}> LOADING  </h1> 
		<img style={{height:'8rem'}} src={loading} alt='loading'/>
		</div>
		)
}
