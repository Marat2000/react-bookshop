import { BiBox} from 'react-icons/bi'
import style from './Orders.module.scss'

const Orders=(props)=>
{


 


return(
	<>
	<h2 className={style.headTitle} ><BiBox/> Orders</h2>

{props.orders.length>0 ?	props.orders.map((item)=>{
	
return(<div key={'order'+item.id} className={style.container}>
	<h3 className={style.orderNumber}>Order #{item.id} </h3>

<div className={style.books}>


{item.items.map((cards)=>{return(
<div key={'orderCard'+item.id+cards.title} className={style.card}>
<img className={style.image} src={cards.imageUrl} alt='book'/>

<div className={style.title}> {cards.title.length>30? cards.title.slice(0,26)+'...' :cards.title} </div>
<div className={style.author}> {cards.author}</div>

</div>

	)})}

</div>

</div>)


	})
:

<div className={style.noOrder}>You don't have orders yet. </div>

}


</>
)

}
export default Orders