import {FiSettings} from 'react-icons/fi'
import Address from '../.././components/Address'
import style from './Settings.module.scss'
import {setValues , setRegistered , setInputIsError , selectSetting } from '../../redux/slices/settingSlice'
import {useDispatch , useSelector} from 'react-redux'
import {useEffect} from 'react'

 


const Settings=()=>
{

const {values , registered , inputIsError } = useSelector(selectSetting)
const dispatch=useDispatch()

const nameSubmit=(i:React.ChangeEvent<HTMLInputElement>,n:number)=>
{

	let text:string=i.target.value
	let submitIsError=[...inputIsError]
	if( /^([a-zA-Z]+)$/.test(text) )
	submitIsError[n] = false;
	else submitIsError[n] = true;
	

	let arr=[...values]
	arr[n]=text

	dispatch (setValues([...arr]))
	dispatch(setInputIsError([...submitIsError]))
	localStorage.setItem('settings' , JSON.stringify([...arr]))
	localStorage.setItem('settings_error' , JSON.stringify([...submitIsError]))		
}

const  mailSubmit=(i:React.ChangeEvent<HTMLInputElement>)=>
{
	let text:string=i.target.value
	let submitIsError=[...inputIsError]
	if(  /^([a-zA-Z\.\-\_\d]+)\@([a-zA-Z\.\-\_\d]+)\.([a-zA-Z]+)([\s]{0,2})$/.test(text)  )
		submitIsError[2]=false
	else submitIsError[2]=true
	
	let arr=[...values]	
	arr[2]=text
	dispatch (setValues([...arr]))
	dispatch(setInputIsError([...submitIsError]))
	localStorage.setItem('settings' , JSON.stringify([...arr]))
	localStorage.setItem('settings_error' , JSON.stringify([...submitIsError]))
}

const passwordSubmit=(i:React.ChangeEvent<HTMLInputElement>)=>
{
	let text:string=i.target.value
	let submitIsError=[...inputIsError]	
	if (text.split("").every((e) => e != " ")) {
	if (text.length > 12 || text.length < 8) submitIsError[3] = true;
	else submitIsError[3] = false;
	} else submitIsError[3] = true;
	
	let arr=[...values]	
	arr[3]=text
	dispatch (setValues([...arr]))
	dispatch(setInputIsError([...submitIsError]))
	localStorage.setItem('settings' , JSON.stringify([...arr]))
	localStorage.setItem('settings_error' , JSON.stringify([...submitIsError]))
}

const submitClick=()=>
{
	if(inputIsError.some((e,i)=> e==true ||  values[i]=='' )) 
		{dispatch(setRegistered(false))
			localStorage.setItem('registered' , 'false')}
	else {dispatch(setRegistered(true))
			localStorage.setItem('registered' , 'true')}

}

useEffect(()=>{
	if(inputIsError.some((e,i)=> e==true ||  values[i]=='' )) 
	localStorage.setItem('registered' , 'false')
},[values])



	return(
	<>
	<h2  className={style.headTitle}><FiSettings/> Settings</h2>

		{	registered? <><div className={style.welcome} >Welcome to the BookShop,<span className={style.name}>{values[0]} {values[1]}</span></div>
		<button className={style.submitBtn}  onClick={()=>dispatch(setRegistered(false))}  >Change Settings</button></>
		
		:
	
		<div className={style.settings}>


			<div className={style.settingsInputArea}>	
				<input placeholder="First Name" value={values[0]}  onChange={e=>nameSubmit(e, 0)} />	
				{inputIsError[0] &&	<span className={style.errorText}> Looks like this is not an First Name </span>}
			</div>
		
		
			<div className={style.settingsInputArea}>	
				<input placeholder="Last Name" value={values[1]} onChange={e=>nameSubmit(e,1)} />		
				{inputIsError[1] &&	<span className={style.errorText}> Looks like this is not an Last Name </span>}
			</div>
		
		
			<div className={style.settingsInputArea}>	
				<input placeholder="Email Address" value={values[2]} onChange={mailSubmit}/>	
				{inputIsError[2] &&	<span className={style.errorText}> Looks like this is not an Email Address </span>}
			</div>
		
		
			<div className={style.settingsInputArea}>	
				<input placeholder="Password" value={values[3]}  onChange={passwordSubmit} type="password"/>		
				{inputIsError[3] &&	<span className={style.errorText}> The Password should be between 8-12 letters </span>}
			</div>
		
		
			<button className={style.submitBtn}  onClick={submitClick }  >Submit</button>
		
	
		</div>
	}

	<Address/>
		

</>
)

}
export default Settings