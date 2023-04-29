import { BiBell , BiX} from 'react-icons/bi'
import style from './Notifications.module.scss'
import {Nots} from '../../App'

type NotType={
	nots:Nots[];
	setNots:React.Dispatch<React.SetStateAction<Nots[]>>;
}

const Notifications:React.FC<NotType>=({nots , setNots})=>
{



const checked = (itemId: number) => {
	nots[nots?.indexOf(nots.filter((el: Nots) => el.id == itemId)[0])].unread =
		false;
	setNots([...nots]);
};


const onDelete = (itemId:number) => {
	setNots([...nots.filter((el) => el.id != itemId)]);
};


return(
<>
	<h2 className={style.headTitle}><BiBell /> Notifications</h2>
		{nots.length>0 ? nots.map((not)=>{
			return(
			
		
			<div key={'not'+Math.random()}  className={style.notification}>
			<div onClick={()=>checked(not.id)} style={{width:'100%' , position:'relative'}} >
				
				<span  className={style.notText} >
					<h2>{not.author} </h2>
					<p >{not.title}</p>
					
		
				</span>
				{not.unread && <span className={style.redPoint}>•</span>}
				</div>
				<span className={style.notDelete} onClick={()=> onDelete(not.id) }><BiX/></span>
			
		</div>
	)})
:
<div style={{marginBottom:'1rem' , fontWeight:'bold' , color:'var(--Pink'}}>You don't have notifications yet. </div>
}

		
</>)

}
export default Notifications