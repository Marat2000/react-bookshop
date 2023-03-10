import { BiBell, BiLocationPlus,BiSupport} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';
import {  Link } from "react-router-dom";

const User=(props)=>
{

	return(
	<ul className="userMenu"  onClick={()=>props.setUserClicked(false)} >
	<Link to="/notifications" className="link">	<li><BiBell/>Notifications</li> 				</Link>
	<Link to="/address" className="link">		<li><BiLocationPlus/> Delivery address </li>	</Link>
	<Link to="/support" className="link">		<li><BiSupport/> Support </li>					</Link>
	<Link to="/settings" className="link">		<li><FiSettings/> Settings </li>				</Link>

	</ul>
)

}

export default User