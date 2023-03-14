import {FiSettings} from 'react-icons/fi'
import {useState, useEffect} from 'react'
import Address from '.././components/Address'

const Settings=(props)=>
{



const nameSubmit=(text,n)=>
{
	
	 props.values[n]=text;
	for(let i=0;i<text.length;i++)
	if('A'<=text[i] && text[i]<='Z' | 'a'<=text[i] && text[i]<='z' )
		props.submitIsError[n]=false; 
	else {props.submitIsError[n]=true; 
		break;}
		props.setSubmitIsError([...props.submitIsError])
		
}

const  mailSubmit=(text)=>
{
	props.values[2]=text
	for(let i=0;i<text.length;i++)
	if(  /^([a-zA-Z\.\-\_\d]+)\@([a-zA-Z\.\-\_\d]+)\.([a-zA-Z]+)([\s]{0,2})$/.test(text)  )
		props.submitIsError[2]=false;
	else {props.submitIsError[2]=true; break;}
	props.setSubmitIsError([...props.submitIsError])

}

const passwordSubmit=(text)=>
{
	props.values[3]=text
	for(let i=0;i<text.length;i++)
		{if(text[i]!=" ")
	{if(text.length>12 || text.length<8)
			props.submitIsError[3]=true
		else props.submitIsError[3]=false}
	else {props.submitIsError[3]=true; break;}}
	

	props.setSubmitIsError([...props.submitIsError])
}

const submitClick=()=>
{
	console.log(props.registered)

	for(let i=0;i<props.values.length;i++)
			if(props.values[i]==null | props.values[i]=='')
			props.submitIsError[i]=true;
		props.setSubmitIsError([...props.submitIsError])

let k=0;

	for(let i=0;i<props.values.length;i++)
		if(props.submitIsError[i]==false)
			k++;
		if(k==4)
			props.setRegistered(true);
}




	return(
	<>
	<h2  className='headTitle'><FiSettings/> Settings</h2>
	<hr/>

		{	props.registered? <><div style={{marginBottom:'1rem' , fontWeight:'bold'}}>Welcome to the BookShop,<span style={{textTransform:"uppercase"}}>{props.values[0]} {props.values[1]}</span></div>
		<button className="submitBtn"  onClick={()=>props.setRegistered(false) }  >Change Settings</button></>
		
		:
	
		<div className="settings">


			<div className="settingsInputArea">	
				<input placeholder="First Name"  onChange={e=>nameSubmit(e.target.value, 0)} />	
				{props.submitIsError[0] &&	<span className="errorText"> Looks like this is not an First Name </span>}
			</div>
		
		
			<div className="settingsInputArea">	
				<input placeholder="Last Name"  onChange={e=>nameSubmit(e.target.value,1)} />		
				{props.submitIsError[1] &&	<span className="errorText"> Looks like this is not an Last Name </span>}
			</div>
		
		
			<div className="settingsInputArea">	
				<input placeholder="Email Address"  onChange={e=>mailSubmit(e.target.value)}/>	
				{props.submitIsError[2] &&	<span className="errorText"> Looks like this is not an Email Address </span>}
			</div>
		
		
			<div className="settingsInputArea">	
				<input placeholder="Password"   onChange={e=>passwordSubmit(e.target.value)} type="password"/>		
				{props.submitIsError[3] &&	<span className="errorText"> The Password should be between 8-12 letters </span>}
			</div>
		
		
			<button className="submitBtn"  onClick={submitClick }  >Submit</button>
		
	
		</div>
	}

	<Address values={props.values} addressAccept={props.addressAccept} setAddressAccept={props.setAddressAccept} 
								addressInput={props.addressInput} setAddressInput={props.setAddressInput} 
							cityInput={props.cityInput} setCityInput={props.setCityInput}/>
		

</>
)

}
export default Settings