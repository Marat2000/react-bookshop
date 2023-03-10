import {  BiLocationPlus} from 'react-icons/bi'


const Address=()=>
{return(
	<>
	<h2  className='headTitle'><BiLocationPlus/> Delivery Address</h2>
	<hr/>
	<div className="mapouter">
	<div className="gmap_canvas">
	<iframe src="https://maps.google.com/maps?q=yerevan%20,%20opera&t=&z=13&ie=UTF8&iwloc=&output=embed" className="gmap_canvas"/>
	</div>
	</div>

</>
)

}
export default Address