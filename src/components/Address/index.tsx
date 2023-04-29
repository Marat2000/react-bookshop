import {BiLocationPlus} from 'react-icons/bi'
import {useState , useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import style from './Address.module.scss'
import {setAddressInput , setCityInput, setCityError, setAddressError , setAddressAccept , selectSetting} from '../../redux/slices/settingSlice'


const Address=()=>
{
const [openCities, setOpenCities] = useState(false);

const {addressInput,cityInput,arrCity,cityError,addressError,addressAccept} = useSelector(selectSetting);
const dispatch = useDispatch();

const cityInputArea	=(text:React.ChangeEvent<HTMLInputElement>)=>{
	dispatch(setCityInput(text.target.value))
	localStorage.setItem('city' , text.target.value)
	setOpenCities(true)
}

const listItemClick=(el:string)=>
{
	dispatch(setCityInput(el))
	localStorage.setItem('city' , el)
	setOpenCities(false)
}

const onChangeAddress=(e:React.ChangeEvent<HTMLInputElement>)=>{
	dispatch(setAddressInput(e.target.value))
	localStorage.setItem('address' , e.target.value)
}

const accept=()=>{
if (cityError == false && addressError == false) 
	{dispatch(setAddressAccept(true));
	localStorage.setItem('address_accept' , 'true')}
else {dispatch(setAddressAccept(false));
localStorage.setItem('address_accept' , 'false')}
}

useEffect(()=>{
arrCity.some( (e)=> e.toLowerCase()==cityInput.toLowerCase() )? dispatch(setCityError(false)):dispatch(setCityError(true));
addressInput.split('').some((e:string)=> e!=' ')?dispatch(setAddressError(false)):dispatch(setAddressError(true))
	if (!addressAccept) 
	localStorage.setItem('address_accept' , 'false')
},[cityInput,addressInput])


return(<>

	<h3  className={style.headTitle}><BiLocationPlus/> Delivery Address</h3>
	
	{addressAccept ? 
		<>
		<h3 className={style.text}>Address accepted.  You can order!</h3>
		<h3 className={style.yourAddress}><i> { cityInput}, {addressInput}</i> </h3>
		<button className={style.submitBtn} onClick={()=> dispatch(setAddressAccept(false))}  >Change</button> 
		</>

		:<>
		<div className={style.addressForm}>
			<div className={style.cityInput} >
				<div className={style.settingsInputArea} >	
			<input placeholder="City" value={cityInput}  onChange={cityInputArea} />
				</div>
				{cityError && <div className={style.error} > Not possible to send an order to this city</div>}
			</div>
		
		<div className={style.addressInput} >
				<div className={style.settingsInputArea}>	
			<input placeholder="Address"  value={addressInput} onChange={onChangeAddress} />	
				</div>
				{ addressError && <div className={style.error} >Cannot be blank</div>}
		</div>
	
					 {openCities &&<>
					 <ul className={style.cityList}>
						{(arrCity.filter((item)=>item.toLowerCase().includes(cityInput.toLowerCase() ))).map((el:string)=>{return(
						<li key={'city'+Math.random()} onClick={()=> listItemClick(el)}>{el}</li>)})}
					</ul>
					<div className="overBar" onClick={()=>setOpenCities(false)}></div>
					</>}	
		</div>
<button className={style.submitBtn} onClick={ accept}  >Submit</button>
</>}
</>)}

export default Address