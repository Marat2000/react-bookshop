import {BiLocationPlus} from 'react-icons/bi'
import {useState , useEffect} from 'react'
import style from './Address.module.scss'

const Address=(props)=>
{

const	[openCities,setOpenCities]=useState(false)
const	[cityError,setCityError]=useState(true)
const 	[addressError,setAddressError]=useState(true)

let addressInput=props.addressInput
let setAddressInput=props.setAddressInput
let cityInput=props.cityInput
let setCityInput=props.setCityInput



let arrCity= [
'Abovyan', 'Akhtala', 'Alaverdi', 'Aparan', 'Ararat', 
'Armavir', 'Artashat', 'Artik', 'Ashtarak','Ayrum',
 'Berd', 'Byureghavan', 'Chambarak', 'Charentsavan', 
 'Dilijan', 'Gavar', 'Goris', 'Gyumri',  'Hrazdan',
 'Ijevan', 'Jermuk', 'Kajaran', 'Kapan', 'Maralik',
  'Martuni', 'Masis', 'Meghri','Metsamor', 'Nor Hachn',
   'Noyemberyan', 'Sevan', 'Sisian', 'Spitak', 'Stepanavan',
    'Talin', 'Tashir', 'Tsaghkadzor', 'Tumanyan', 
    'Vagharshapat','Vanadzor', 'Vardenis', 'Vayk', 
    'Vedi', 'Yeghegnadzor','Yeghvard', 'Yerevan',]

const cityInputArea	=(text)=>
{
	setCityInput(text.target.value)
	setOpenCities(true)
}



const listItemClick=(el)=>
{
	setCityInput(el)
	setOpenCities(false)
}


useEffect(()=>{


let k=0;
	for (let i=0;i<arrCity.length;i++)
		{if(cityInput.toLowerCase()==arrCity[i].toLowerCase())
			k++;			
			else continue;}
			if(k==0)
				 setCityError(true);
			else  setCityError(false);

			if(addressInput=="" | addressInput==" ")
				 setAddressError(true)
			else  setAddressError(false)


},[cityInput,addressInput])


const accept=()=>
{
	if(cityError==false && addressError==false)
					 props.setAddressAccept(true )
				else  props.setAddressAccept(false )

}

return(<>

	<h3  className={style.headTitle}><BiLocationPlus/> Delivery Address</h3>
	
	{props.addressAccept ? 
		<>
		<h3 className={style.text}>Address accepted.  You can order!</h3>
		<h3 className={style.yourAddress}><i> { cityInput}, {addressInput}</i> </h3>
		</>

		:<div className={style.addressForm}>
			<div className={style.cityInput} >
				<div className={style.settingsInputArea} >	
			<input placeholder="City" value={cityInput}  onChange={e=>{ cityInputArea(e) }} />
				</div>
			{cityError && <div className={style.error} > Not possible to send an order to this city</div>	}
	</div>
		<div className={style.addressInput} >
		<div className={style.settingsInputArea}>	
			<input placeholder="Address"  value={addressInput} onChange={e=> setAddressInput(e.target.value)  } />	
				</div>
			{ addressError && <div className={style.error} >Cannot be blank</div>}
				</div>
	
					 {openCities &&<><ul className={style.cityList}>
								{(arrCity.filter(item=>String(item).toLowerCase().includes(String(cityInput).toLowerCase() ))).map((el)=>{return(
									<li key={el} onClick={()=> listItemClick(el)}>{el}</li>
				
				
									)})}
							</ul>
							<div className="overBar" onClick={()=>setOpenCities(false)}></div>
							</>
							}
							 
	
		</div>}



			{props.addressAccept ?
				<button className={style.submitBtn} onClick={()=> props.setAddressAccept(false)}  >Change</button> 
				:
				<button className={style.submitBtn} onClick={ accept}  >Submit</button>}

</>)}

export default Address