import {useContext} from 'react'
import User from './User'
import Drawer from './Drawer'
import {BiUserCircle, BiCartAlt} from 'react-icons/bi'
import {AppContext} from '../App'


const Header=()=>
{

const {
setCartClicked,
cartItems,
userClicked,
registered,
values,
setUserClicked,
cartClicked,
orders,
orderClick,
totalPrice,
addressAccept,
cartDelete}=useContext(AppContext)


return (<>
<div className="header">
<BiCartAlt  onClick={()=>setCartClicked(!cartClicked)}  className="headerIcon"   />

{cartItems.length>0 && 	<span className="cartCount">{cartItems.length} </span>}

<BiUserCircle onClick={()=>setUserClicked(!userClicked)} className="headerIcon"/>
</div>	
{userClicked && <>	<User 	
							registered={registered} 
							firstName={values[0]}
							 lastName={values[1]}
							 setUserClicked={setUserClicked}/> 
							 <div className="overBar"  onClick={()=>setUserClicked(false)} ></div> 
							 </>}

{cartClicked && <>	<Drawer 
							setCartClicked={setCartClicked}
							addressAccept={addressAccept}
							orders={orders} 
							orderClick={orderClick}  
							totalPrice={totalPrice} 
							cartItems={cartItems} 
							cartDelete={cartDelete} /> <div 
							className="overBar"  onClick={()=>setCartClicked(false)} ></div> 
							</>}
</>)}
						

export default Header