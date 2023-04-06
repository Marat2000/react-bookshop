import {Link} from 'react-router-dom'
import {BiX} from 'react-icons/bi'
import style from './Drawer.module.scss'

 

const Drawer=(props)=>
{

	const bookClick=(item)=>{

	props.setCartClicked(false)
	props.setAbout(props.books.indexOf(item))
}

return(
	<div className={style.drawer}>
		<div className={style.cartCards}>
		{

			props.cartItems.map(el=>{
				return(
					<div key={el.title} className={style.card}>
					<Link to='/react-bookshop/aboutbook'><img  onClick={()=> bookClick(el)} src={el.imageUrl} className={style.image} alt='book'/></Link>
					
					<Link className={style.link} to='/react-bookshop/aboutbook'>
					<div  onClick={()=> bookClick(el)}>
					<div className={style.title}>{el.title.length>26?el.title.slice(0,23)+' ...':el.title}</div>
					<div className={style.author}>{el.author}</div>
					</div>
					</Link>
					<BiX className={style.cartDelete} onClick={()=>props.cartDelete(el.title)}/>
					<div className={style.price}>{el.price} €</div>
					</div>
					)
			})


		}

</div>

	{ props.cartItems.length>0 ?
				<>	<div className={style.totalPrice} >
				
				<span>PRICE:</span><div className={style.totalPriceLine} > </div> 	<span> { Math.round( props.totalPrice*100)/100}€</span> 
				</div>
				
				{props.addressAccept==false && <div className={style.enterAddress}> To Place an order you must enter the address in the Settings </div>}
				{props.addressAccept==false &&  <Link to="/react-bookshop/settings" className="link"  onClick={()=>props.setCartClicked(false)}><button className={style.button}>Settings</button></Link> }

				 {props.addressAccept && <button className={style.button} onClick={()=>props.orderClick()}>Order</button>}
				 </>

				: 

				
					<>
					{props.orders.length>0 ?
					<div className={style.orderNumber }><div>Order#{props.orders[props.orders.length-1]['id']}</div><div className={style.orderAcceptedText}>is accepted! Thank you!</div></div>
					:
				 <div className={style.cartIsEmpty}>Cart is Empty</div>
				 	}</>
				 
}
	</div>
	)
}

export default Drawer