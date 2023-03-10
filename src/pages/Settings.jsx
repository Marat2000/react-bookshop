import {FiSettings} from 'react-icons/fi'
import {useState, useEffect} from 'react'

const Settings=()=>
{

const [submitIsError,setSubmitIsError]=useState([false,false,false,false])
const [values,setValues]=useState([])

useEffect(()=>{
for(let i=0;i<submitIsError.length;i++)
	values[i]=null
setValues([...values])
console.log(values)
},[])

const nameSubmit=(text,n)=>
{
	
	 values[n]=text;
	for(let i=0;i<text.length;i++)
	if('A'<=text[i] && text[i]<='Z' | 'a'<=text[i] && text[i]<='z' )
		submitIsError[n]=false; 
	else {submitIsError[n]=true; 
		break;}
		setSubmitIsError([...submitIsError])
		
}

const  mailSubmit=(text)=>
{
	values[2]=text
	for(let i=0;i<text.length;i++)
	if(  /^([a-zA-Z\.\-\_\d]+)\@([a-zA-Z\.\-\_\d]+)\.([a-zA-Z]+)([\s]{0,2})$/.test(text)  )
		submitIsError[2]=false;
	else {submitIsError[2]=true; break;}
	setSubmitIsError([...submitIsError])

}

const passwordSubmit=(text)=>
{
	values[3]=text
	for(let i=0;i<text.length;i++)
		{if(text[i]!=" ")
	{if(text.length>12 || text.length<8)
			submitIsError[3]=true
		else submitIsError[3]=false}
	else {submitIsError[3]=true; break;}}
	

	setSubmitIsError([...submitIsError])
}

const submitClick=()=>
{
	

	for(let i=0;i<values.length;i++)
			if(values[i]==null | values[i]=='')
			submitIsError[i]=true;
		setSubmitIsError([...submitIsError])

let k=0;

	for(let i=0;i<values.length;i++)
		if(submitIsError[i]==false)
			k++;
		if(k==4)
			console.log(values)


}


	return(
	<>
	<h2  className='headTitle'><FiSettings/> Settings</h2>
	<hr/>
	<div className="settings">

	<div className="settingsInputArea">	
		<input placeholder="First Name"  onChange={e=>nameSubmit(e.target.value,0)} />	
		{submitIsError[0] &&	<span className="errorText"> Looks like this is not an First Name </span>}
	</div>


	<div className="settingsInputArea">	
		<input placeholder="Last Name"  onChange={e=>nameSubmit(e.target.value,1)} />		
		{submitIsError[1] &&	<span className="errorText"> Looks like this is not an Last Name </span>}
	</div>


	<div className="settingsInputArea">	
		<input placeholder="Email Address"  onChange={e=>mailSubmit(e.target.value)}/>	
		{submitIsError[2] &&	<span className="errorText"> Looks like this is not an Email Address </span>}
	</div>


	<div className="settingsInputArea">	
		<input placeholder="Password"   onChange={e=>passwordSubmit(e.target.value)} type="password"/>		
		{submitIsError[3] &&	<span className="errorText"> The Password should be between 8-12 letters </span>}
	</div>


	<button className="submitBtn"  onClick={submitClick }  >Submit</button>


	</div>
</>
)

}
export default Settings