import { BiBell , BiX} from 'react-icons/bi'
import style from './Notifications.module.scss'

const Notifications=(props)=>
{



const checked = (itemId) => {
	props.nots[
		props.nots.indexOf(props.nots.filter((el) => el.id == itemId)[0])
	].unread = false;
	props.setNots([...props.nots]);
};


const onDelete = (itemId) => {
	props.setNots([...props.nots.filter((el) => el.id != itemId)]);
};


return(
<>
	<h2 className={style.headTitle}><BiBell /> Notifications</h2>
		{props.nots.length>0 ? props.nots.map((not)=>{
			return(
			
		
			<div key={not.id} className={style.notification}  >
				
				<span  className={style.notText} onClick={()=>checked(not.id)}>
					<h2>{not.author} </h2>
					<p >{not.title}</p>
		
		
				</span>
				<div>
				{not.unread && <span className={style.redPoint}>•</span>}
				<span className={style.notDelete} onClick={()=> onDelete(not.id) }><BiX/></span>
				</div>
			
		</div>
	)})
:
<div style={{marginBottom:'1rem' , fontWeight:'bold'}}>You don't have notifications yet. </div>
}

		
</>)

}
export default Notifications