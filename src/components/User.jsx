import { BiBox,BiBell, BiLocationPlus,BiSupport} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';
import {  Link } from "react-router-dom";

const User=(props)=>
{

	return(
	<ul className="userMenu"  onClick={()=>props.setUserClicked(false)} >
	{ props.registered && <li className='userName'>{props.firstName}  {props.lastName}</li>}

	<li><Link to="/react-bookshop/orders" className="link">			<BiBox/> My Orders 					</Link></li> 
	<li><Link to="/react-bookshop/notifications" className="link">	<BiBell/> Notifications 			</Link></li> 
	<li><Link to="/react-bookshop/address" className="link">		<BiLocationPlus/> Delivery Address 	</Link></li> 
	<li><Link to="/react-bookshop/support" className="link">		<BiSupport/> Support 				</Link></li> 
	<li><Link to="/react-bookshop/settings" className="link">		<FiSettings/> Settings 				</Link></li> 

	</ul>
)

}

export default User