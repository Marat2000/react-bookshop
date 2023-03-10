import { BiBell} from 'react-icons/bi'
import {useState } from 'react'

const Notifications=()=>
{


const [nots,setNots]=useState([
	{
		"id":1,
		author:'BookShop',
		title:"Thanks for using our service. If you don't like something write to us in Support",
		unread:true
	},
	{
		id:2,
		author:"BookShop",
		title:"girq em caxm karoxa uzeq",
		unread:false
	},
	
])




const checked=(itemId)=>{
	nots[nots.indexOf(  nots.filter(el=>el.id==itemId)[0]  )].unread=false;
	setNots([...nots]);
}


const onDelete=(itemId)=>
{

	 setNots([... nots.filter(el=>el.id!=itemId)]);
	
}


return(
<>
	<h2 className="headTitle"><BiBell /> Notifications</h2>
	<hr/> 
		{nots.map((not)=>{
			return(
			
		
			<div key={not.id} className="notification"  >
				
				<span  className="notText">
					<h2>{not.author} </h2>
					<p onClick={()=>checked(not.id)}>{not.title}</p>
		
		
				</span>
				<div>
				{not.unread && <span className="redPoint">•</span>}
				<span className="notDelete" onClick={()=> onDelete(not.id) }>×</span>
				</div>
			
		</div>
	
	
	
		)})}	
</>)

}
export default Notifications