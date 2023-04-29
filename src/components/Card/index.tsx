import { Link } from "react-router-dom";
import style from "./Card.module.scss";
import { BiPlusCircle } from "react-icons/bi";
import { AiFillHeart as Heart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {setAllBooks,selectBook,Book} from "../../redux/slices/bookSlice";
import { selectFilter } from "../../redux/slices/filterSlice";
import { setCartItems } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import { useEffect } from 'react'
import { getCartItems } from '../../utils/getCartItems'



type CardProps = {
	title: string;
	index: number;
	imageUrl: string;
	author: string;
	rate: number;
	price: number;
	likedCard: Book[];
	setLikedCard:React.Dispatch<React.SetStateAction<Book[]>>
};


// const setEx: 

const Card:React.FC <CardProps>=({ title,index,imageUrl,author,rate,price,likedCard,setLikedCard })=>
{
	
const { books ,  allBooks  } = useSelector(selectBook)
const cart = useSelector((state:RootState)=>state.cart)
const {cartItems}=useSelector((state:RootState)=>state.cart)
const {searchInput} = useSelector(selectFilter)
let starArray=[1,2,3,4,5]
let bookLink='/react-bookshop/'+index



const dispatch=useDispatch()

let cartCheck=cartItems.some(e=>e.title==title)
let likeCheck= likedCard.some(e=>e.title==title) 

const starClick = (n:number) => {
	let arrBooks = [...allBooks]
	let item = {...arrBooks[index]}
	item.rate = n
	arrBooks.splice(index , 1 , item)
	dispatch(setAllBooks( [...arrBooks] ))
};

	
const searchWord = (text:string) => { 
	if(searchInput.length > 0 && 
	 text.toLowerCase().split("").filter(e=> e>='A' && e<='z').join("").includes(
	 searchInput.toLowerCase().split("").filter(e=> e>='A' && e<='z').join("")))
	return "var(--Light)";
	else return "";
};

const addToLiked = () => {
	let array = [...likedCard];

	if (likedCard.some((e) => e.title == title)) {
		array = array.filter((e) => e.title != title);
	} else allBooks.forEach((e) => e.title == title && array.unshift(e));

	setLikedCard([...array]);
	localStorage.setItem('liked' , JSON.stringify([...array]))
};

const AddToCartClick = (title:string) => {
	let book = books.filter((e) => e.title == title)[0];
	if (cart.cartItems.some((e) => e.title === title))
		dispatch (setCartItems([...cart.cartItems.filter((e) => e.title !== title)]));
	else dispatch (setCartItems([book, ...cart.cartItems]));
	
};




return (<div className={style.card} >
		{ <>

			<div  className={style.imageContainer} >
				<Link to={bookLink}><img src={imageUrl} alt="book"/></Link>
		<div  className={style.hearts} onClick={addToLiked}><Heart className={style.heart}/><Heart className={likeCheck ? style.heartInsideClicked:style.heartInside} />  </div>
	</div>
		<span className={style.text}>
		<Link className={style.link} to={bookLink}>
			<h3  style={{backgroundColor:`${searchWord(title)}` }}> {title.length>30  ? title.slice(0,26)+' ...': title } </h3>
		</Link>
		<h5 className={style.author} style={{backgroundColor:`${searchWord(author)}`}}>{author}</h5>
			
			<ul className={style.rate}>
				{starArray.map((num) => {
					return (<li  key={'star'+Math.random()} onClick={() => starClick(num)}> {rate >= num ? "★" : "☆"} </li>)})}
			</ul>

		</span>
		<p className={style.price}>{price}€</p>
<button className={ cartCheck ? style.addedToCartBtn:style.addToCartBtn } onClick={()=>AddToCartClick(title)}> {cartCheck ?'':<BiPlusCircle className={style.plusInButton}/>}  {cartCheck?'Added To Cart':'Add to Cart'}</button>
	</>
		}
	</div>)}


export default Card



