import { BiBox ,BiBell, BiSupport} from 'react-icons/bi';
import {FiSettings , FiSun , FiMoon} from 'react-icons/fi';
import React from 'react'
import {  Link } from "react-router-dom";
import style from './User.module.scss'
import {useSelector , useDispatch} from 'react-redux'
import {setDarkMode , selectBook} from '../../redux/slices/bookSlice'
import {selectSetting} from '../../redux/slices/settingSlice'


const User:React.FC<{
setUserClicked:React.Dispatch<React.SetStateAction<boolean>>
}>=({setUserClicked})=>
{ 
	const {values ,registered}=useSelector(selectSetting)
	const {darkMode} = useSelector(selectBook)
	const dispatch=useDispatch()
	type MenuContent={
		link:string;
		icon:JSX.Element;
		name:string;
	}
	const userMenuContent:MenuContent[]=[ 

	{ 
link:'orders',
icon:<BiBox/> ,
name:' My Orders'
	 } ,

	{ 
link:'notifications',
icon:<BiBell/>,
name:' Notifications '
	 } ,

	{ 
link:'support',
icon:<BiSupport/>,
name:' Support'
	 } ,
	{ 
link:'settings',
icon:<FiSettings/>,
name:' Settings'
	 } ,	 

	    ]

	return(
	<ul className={style.drawer}   >
	{ registered && <li className={style.user}>{values[0]}  {values[1]}</li>}

{userMenuContent.map((item)=>{return(
	<Link key={'user'+Math.random()} to={"/react-bookshop/"+`${item.link}`} className={style.link}><li onClick={()=>setUserClicked(false)}>{item.icon}{item.name}</li></Link> 
	
	)})}

<div className={style.togglePart}><FiSun/><div onClick={()=>  dispatch(setDarkMode(!darkMode))} className={style.toggle} >
 <div className={style.toggleCircle} style={{marginLeft:`${darkMode? 'calc( 100% - 1rem)':'0.2rem'}`  }}></div>  
</div> <FiMoon/></div>
	</ul>
)

}

export default User