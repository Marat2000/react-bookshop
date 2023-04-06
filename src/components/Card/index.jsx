import {useState,useContext } from 'react'
import {AppContext} from '../../App'
import {Link} from 'react-router-dom'
import style from './Card.module.scss'
import {BiPlusCircle } from 'react-icons/bi'
import  {  AiFillHeart as Heart } from 'react-icons/ai'
import ContentLoader from "react-content-loader"

const Card=(props)=>
{

const {AddToCartClick ,  setAbout , allBooks , isLoaded , searchInput , books,setBooks,likedCard,setLikedCard , cartItems }=useContext(AppContext)
const [liked,setLiked]=useState(false)
let star=props.rate
let starArray=[1,2,3,4,5]

let cartCheck=cartItems.some(e=>e.title==props.title)
let likeCheck= likedCard.some(e=>e.title==props.title) 


const starClick = (n) => {
	star = n;
	books.filter((e) => e.title == props.title)[0].rate = n;
	setBooks([...books]);
};

	
const searchWord = (text) => {
	if (
		searchInput.length > 0 &&
		text.toLowerCase().includes(searchInput.toLowerCase())
	)
		return "var(--Light)";
	else return "";
};

const addToLiked = () => {
	let array = [...likedCard];
	setLiked(!liked);

	if (likedCard.some((e) => e.title == props.title)) {
		array = array.filter((e) => e.title != props.title);
	} else allBooks.forEach((e) => e.title == props.title && array.push(e));

	setLikedCard([...array]);
};




return (<div className={style.card} >
		{isLoaded?<>

			<div  className={style.imageContainer} >
				<Link to='/react-bookshop/aboutbook'><img onClick={()=>setAbout(props.index)} src={props.imageUrl} alt="book"/></Link>
		<div  className={style.hearts} onClick={addToLiked}><Heart className={style.heart}/><Heart className={likeCheck ? style.heartInsideClicked:style.heartInside} />  </div>
	</div>
		<span className={style.text}>
		<Link className={style.link} to='/react-bookshop/aboutbook'>
			<h3  onClick={ ()=>setAbout(props.index)}  style={{backgroundColor:`${ searchWord(props.title)}` }}> {isLoaded&&props.title.length>30 ?props.title.slice(0,26)+' ...': props.title } </h3>
		</Link>
		<h5 className={style.author} style={{backgroundColor:`${ searchWord(props.author)}`}}>{props.author}</h5>
			
			<ul className={style.rate}>
				{starArray.map((num) => {
					return (<li onClick={() => starClick(num)}> {star >= num ? "★" : "☆"} </li>)})}
			</ul>

		</span>
		<p className={style.price}>{props.price}€</p>
<button className={ cartCheck ? style.addedToCartBtn:style.addToCartBtn } onClick={()=>AddToCartClick(props.title)}> {cartCheck ?'':<BiPlusCircle className={style.plusInButton}/>}  {cartCheck?'Added To Cart':'Add to Cart'}</button>
	</>
		:<ContentLoader 
    speed={2}
    width={274}
    height={216.4}
    viewBox="0 0 290 232.4"
    backgroundColor="var(--Light)"
    foregroundColor="var(--Pink)"
    style={{gridArea:'1/1/3/1'}}
    {...props}
  >
    <rect x="24" y="8" rx="6" ry="6" width="82" height="130" /> 
    <rect x="30" y="164" rx="0" ry="0" width="84" height="24" /> 
    <rect x="120" y="19" rx="0" ry="0" width="160" height="38" /> 
    <rect x="151" y="72" rx="0" ry="0" width="104" height="13" /> 
    <rect x="156" y="106" rx="0" ry="0" width="91" height="22" /> 
    <rect x="141" y="163" rx="14" ry="14" width="120" height="33" />
  </ContentLoader>}


	</div>)
}

export default Card



