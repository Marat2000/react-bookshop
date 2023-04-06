import { BiSupport} from 'react-icons/bi'
import {useState} from 'react'
import style from './Support.module.scss'


const Support=()=>
{

const [message,setMessage]=useState('')
const [sent , setSent]=useState(false)
const [areaHeight,setAreaHeight]=useState(1);

const sentBtn=()=>
{
	console.log(message);
	setMessage('')
	if( message.length>0)
		{setSent(true)
				setTimeout(()=>{setSent(false)},1500)}
		
}


 


return(
	<>
	<h2 className={style.headTitle}><BiSupport/> Support</h2>
	<div className={style.support}>
		<textarea  placeholder=". . ." className={style.supportText}
			value={message}  style={{height:`${areaHeight }rem`}}
			onChange={e=>{setAreaHeight(e.target.scrollHeight/17 ); setMessage(e.target.value) }} />

		<button className={sent?style.supportSentBtn:style.supportSendBtn} onClick={sentBtn} >{sent? 'Sent!': 'Send ►'}</button>
	</div>
</>
)

}
export default Support