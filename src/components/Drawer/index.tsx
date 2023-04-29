import {Link} from 'react-router-dom'
import {BiX} from 'react-icons/bi'
import style from './Drawer.module.scss'
import {useSelector,useDispatch} from 'react-redux'
import {selectBook} from '../../redux/slices/bookSlice'
import {selectSetting} from '../../redux/slices/settingSlice'
import {setCartItems,setOrders} from '../../redux/slices/cartSlice'
import {RootState} from '../../redux/store'


type DrawerType={
	setCartClicked:React.Dispatch<React.SetStateAction<boolean>>;
	totalPrice:number;
}  

const Drawer:React.FC<DrawerType>=({setCartClicked , totalPrice})=>
{

const {addressAccept} = useSelector(selectSetting)
const {orders, cartItems}=useSelector((state:RootState)=>state.cart)
const {allBooks} = useSelector(selectBook)
const dispatch=useDispatch()


const orderClick = () => {
	if (addressAccept) {
		let newOrder = { id: `${orders.length}`, items: cartItems };
		let updateOrder=[...orders, newOrder]
		dispatch(setOrders(updateOrder));
		localStorage.setItem('orders' , JSON.stringify(updateOrder))
		dispatch(setCartItems([]));
	}
};

const cartDelete=(title:string)=>{
	let updateCart=[...cartItems]
	updateCart=updateCart.filter(e=>e.title != title)
	dispatch(setCartItems([...updateCart]));
}



return(
	<div className={style.drawer}>
		<div className={style.cartCards}>
		{

			cartItems.map(el=>{
				return(
					<div key={'cart'+Math.random()} className={style.card}>
					<Link to={`/react-bookshop/${allBooks.indexOf(el)}`} ><img   src={el.imageUrl} className={style.image} alt='book'/></Link>
					
					<Link className={style.link} to={`/react-bookshop/${allBooks.indexOf(el)}`}>
					<div >
					<div className={style.title}>{el.title.length>26?el.title.slice(0,23)+' ...':el.title}</div>
					<div className={style.author}>{el.author}</div>
					</div>
					</Link>
					<BiX className={style.cartDelete} onClick={()=>cartDelete(el.title)}/>
					<div className={style.price}>{el.price} €</div>
					</div>
					)
			})


		}

</div>

	{ cartItems.length>0 ?
				<>	<div className={style.totalPrice} >
				
				<span>PRICE:</span><div className={style.totalPriceLine} > </div> 	<span> { Math.round( totalPrice*100)/100}€</span> 
				</div>
				
				{addressAccept==false && <div className={style.enterAddress}> To Place an order you must enter the address in the Settings </div>}
				{addressAccept==false &&  <Link to="/react-bookshop/settings" className="link"  onClick={()=>setCartClicked(false)}><button className={style.button}>Settings</button></Link> }

				 {addressAccept && <button className={style.button} onClick={()=>orderClick()}>Order</button>}
				 </>

				: 

				
					<>
					{orders.length>0 ?
					<div className={style.orderNumber }><div>Order#{orders[orders.length-1]['id']}</div><div className={style.orderAcceptedText}>is accepted! Thank you!</div></div>
					:
				 <div className={style.cartIsEmpty}>Cart is Empty</div>
				 	}</>
				 
}
	</div>
	)
}

export default Drawer