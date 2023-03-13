import { BiBox} from 'react-icons/bi'
import {useState} from 'react'


const Orders=(props)=>
{





return(
	<>
	<h2 className='headTitle'><BiBox/> Orders</h2>
	<hr/>

{props.orders.length>0 ?	props.orders.map((item)=>{{console.log(item['items'])}
	
return(<div key={'order'+item['id']} style={{border:'1px solid grey' , borderRadius:'1rem' , marginBottom:'.8rem' , padding:'1rem' }}>
	<h3 style={{margin:'0' , borderBottom:'3px #999999 double'}}>Order #{item['id']} </h3>

<div style={{display:'flex', flexWrap:'wrap'}}>


{item['items'].map((cards)=>{return(
<div key={'orderCard'+item['id']+cards['title']} style={{width:'6rem' , height:'14rem' , marginRight:'.95rem' , marginTop:'.5rem'}}>
<img style={{width:'6rem' , height:'9rem' , borderRadius:'.5rem' , border:'1px grey solid'}} src={cards['imageUrl']}/>

<div style={{ fontSize:'.9rem', fontWeight:'bold' , lineHeight:'1rem'}}> {cards['title']} </div>
<div style={{fontSize:'.7rem', letterSpacing:'.08rem' ,opacity:'.7' , textTransform:'uppercase' , fontWeight:'bold'}}> {cards['author']}</div>

</div>

	)})}

</div>

</div>)


	})
:

<div style={{marginBottom:'1rem' , fontWeight:'bold'}}>You don't have orders yet. </div>

}


</>
)

}
export default Orders