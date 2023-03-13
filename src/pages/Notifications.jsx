import { BiBell} from 'react-icons/bi'
import {useState } from 'react'

const Notifications=(props)=>
{






const checked=(itemId)=>{
	props.nots[props.nots.indexOf(  props.nots.filter(el=>el.id==itemId)[0]  )].unread=false;
	props.setNots([...props.nots]);
}


const onDelete=(itemId)=>
{

	 props.setNots([... props.nots.filter(el=>el.id!=itemId)]);
	
}


return(
<>
	<h2 className="headTitle"><BiBell /> Notifications</h2>
	<hr/> 
		{props.nots.length>0 ? props.nots.map((not)=>{
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
	)})
:
<div style={{marginBottom:'1rem' , fontWeight:'bold'}}>You don't have notifications yet. </div>
}

		
</>)

}
export default Notifications