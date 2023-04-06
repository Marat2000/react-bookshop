import { BiBox,BiBell, BiSupport} from 'react-icons/bi';
import {FiSettings , FiSun , FiMoon} from 'react-icons/fi';
import {  Link } from "react-router-dom";
import style from './User.module.scss'

const User=(props)=>
{
	const userMenuContent=[ 

	{ 
link:'orders',
icon:BiBox(),
name:' My Orders'
	 } ,

	{ 
link:'notifications',
icon:BiBell(),
name:' Notifications '
	 } ,

	{ 
link:'support',
icon:BiSupport(),
name:' Support'
	 } ,
	{ 
link:'settings',
icon:FiSettings(),
name:' Settings'
	 } ,	 

	    ]

	return(
	<ul className={style.drawer}   >
	{ props.registered && <li className={style.user}>{props.firstName}  {props.lastName}</li>}

{userMenuContent.map((item)=>{return(
	<Link to={"/react-bookshop/"+`${item.link}`} className={style.link}><li onClick={()=>props.setUserClicked(false)}>{item.icon}{item.name}</li></Link> 
	
	)})}

<div className={style.togglePart}><FiSun/><div onClick={()=>props.setDarkMode(!props.darkMode) } className={style.toggle} >
 <div className={style.toggleCircle} style={{marginLeft:`${props.darkMode? 'calc( 100% - 1rem)':'0.2rem'}`  }}></div>  
</div> <FiMoon/></div>
	</ul>
)

}

export default User