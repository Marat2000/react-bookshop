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
					<div className="cartItem">
					<div style={{display:'flex'}}><img style={{width:"1.5rem" ,height:"2.5rem", marginRight:".2rem", border:'#555 solid 5px' ,borderRadius:'.2rem' }} src={el.imageUrl} alt="book"/>
					<div  style={{fontWeight:'bold' , textAlign:'left' }} >{el.title}</div>
					</div>
					<div className="cartDelete" onClick={()=>props.cartDelete(el.title)}>×</div></div>
					<div style={{color:'red',  textAlign:'right', fontSize:'.9rem', fontWeight:'bold'  }}>{el.price}</div>
					</div>
					)
			})


		}

</div>

	{ props.cartItems.length>0 ?
				<>	<div style={{marginTop:'1rem' , display:"flex" , justifyContent:"space-between" , color:"red" , fontWeight:"bold", alignItems:'center'}}>
				<span>PRICE:</span><div style={{ backgroundColor:'grey', opacity:".6", height:"1px", width:'50%'}} > </div> 	<span> { Math.floor( props.totalPrice*100)/100}€</span> 
				</div>

				 <button style={{width:'100%' , marginTop:'.5rem'}} onClick={()=>props.orderClick()}>Order</button>
				 </>

				: 

				
					<>
					{props.orders.length>0 ?
					<div style={{fontSize:"2rem" , height:'10rem' , textAlign:'center', alignContent:'center' , display:'grid', size:'10'}}><b>Order#{props.orders[props.orders.length-1]['id']}</b><br/> is accepted! Thank you! </div>
					:
				 <div style={{fontSize:"2rem" , height:'10rem' , textAlign:'center', alignContent:'center' , display:'grid', size:'10'}}>Cart is Empty</div>
				 	}</>
				 
}
	</div>
	)
}

export default Drawer