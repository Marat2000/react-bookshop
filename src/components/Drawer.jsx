import {useState, useEffect} from 'react'



const Drawer=(props)=>
{

	

return(
	<div className="drawer">
		<div className="cartCards">
		{

			props.cartItems.map(el=>{
				return(
					<div key={el.title} style={{borderBottom:'1px #222 solid'}}>
					<div className="cartItem"><img style={{width:"1.5rem" ,height:"2.5rem", marginRight:".2rem" }} src={el.imageUrl} alt="book"/>
					<div  >{el.title}</div>
					<div className="cartDelete" onClick={()=>props.cartDelete(el.title)}>×</div></div>
					<div style={{color:'red',  textAlign:'right', fontSize:'.9rem', fontWeight:'bold'  }}>{el.price}</div>
					</div>
					)
			})


		}

</div>

	{props.cartItems.length>0 ?	<div style={{marginTop:'1rem' , display:"flex" , justifyContent:"space-between" , color:"red" , fontWeight:"bold", alignItems:'center'}}>
				<span>PRICE:</span><div style={{ backgroundColor:'grey', opacity:".6", height:"1px", width:'50%'}} > </div> 	<span> { Math.floor( props.totalPrice*100)/100}  </span>  </div>

				: <div style={{fontSize:"2rem" , height:'10rem' , textAlign:'center', alignContent:'center' , display:'grid', size:'10'}}>Cart is Empty</div>}

	</div>
	)
}

export default Drawer