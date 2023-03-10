import { BiSupport} from 'react-icons/bi'
import {useState} from 'react'


const Support=()=>
{

const [message,setMessage]=useState('')
const [areaHeight,setAreaHeight]=useState(1);

const sentBtn=()=>
{
	console.log(message);
	setMessage('')


}





return(
	<>
	<h2 className='headTitle'><BiSupport/> Support</h2>
	<hr/>
	<div className="support">
		<textarea  placeholder=". . ." className="supportText"
			value={message}  style={{height:`${areaHeight }rem`}}
			onChange={e=>{setAreaHeight(e.target.scrollHeight/17 ); setMessage(e.target.value) }} />

		<button className="supportSentBtn" onClick={sentBtn} >Sent ►</button>
	</div>
</>
)

}
export default Support