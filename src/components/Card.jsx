import {useState,useContext} from 'react'
import {AppContext} from '../App'


const Card=(props)=>
{

const {AddToCartClick}=useContext(AppContext)
const [star,setStar]=useState(props.rate);

	const starClick=(n)=>
	{
		setStar(n) ; 
		console.log(props.title);
		props.CardRate(props.title, n)
	}






return (<div className="card" >
		{/* <div> {props.index} </div> */}
		<img src={props.imageUrl} alt="book"/>
		<span>
		<h3 size={1}> {props.title } </h3>
		<h5 className="author">{props.author}</h5>
			
			<ul className="rate">
			<li onClick={()=> starClick(1) 	}> {star>=1? "★" : "☆"} </li>
			<li onClick={()=> starClick(2)	}> {star>=2? "★" : "☆"} </li>
			<li onClick={()=> starClick(3)	}> {star>=3? "★" : "☆"} </li>
			<li onClick={()=> starClick(4)	}> {star>=4? "★" : "☆"} </li>
			<li onClick={()=> starClick(5)	}> {star>=5? "★" : "☆"} </li>
			</ul>
		<div style={{display:"flex" , justifyContent:"flex-end" , width:"10rem"}}>
		<p className="price">{props.price} €  </p>

		{ props.cartAdded ? <button className="addToCartBtn"  onClick={()=>AddToCartClick(props.title)} style={{backgroundColor:'red'}} >Added to Cart</button>
		:					<button className="addToCartBtn"  onClick={()=>AddToCartClick(props.title)}>Add to Cart</button>}

	
		</div>
		</span>
	</div>)
}

export default Card



