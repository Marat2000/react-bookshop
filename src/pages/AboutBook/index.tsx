import style from './AboutBook.module.scss'
import {useState } from 'react'
import {BiCartAlt , BiShare , BiPlusCircle} from 'react-icons/bi'
import {Link,useParams} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import {selectBook} from '../../redux/slices/bookSlice'
import {selectFilter} from '../../redux/slices/filterSlice'
import {setCartItems} from '../../redux/slices/cartSlice'
import {RootState} from '../../redux/store'

 


const AboutBook=()=>
{
	

window.scrollTo(0,0)
const {id}=useParams<string>()
const index:number=Number(id)
let shareIcons=['assets/shareIcons/icon-facebook.svg' ,  'assets/shareIcons/icon-instagram.svg' , 'assets/shareIcons/icon-pinterest.svg'  ]	
console.log(index)

const dispatch=useDispatch()

const {allBooks,books} = useSelector(selectBook)
const filter = useSelector(selectFilter)
const {cartItems} = useSelector((state:RootState)=>state.cart)
const [allView,setAllView]=useState(false)

const AddToCartClick = (title:string) => {
	let book = books.filter((e) => e.title == title)[0];
	if (cartItems.some((e) => e.title === title))
		dispatch (setCartItems([...cartItems.filter((e) => e.title !== title)]));
	else dispatch (setCartItems([book, ...cartItems]));
};

console.log(index+1)

if( allBooks[index] )	{
let isCartAdded:boolean=cartItems.some(e=>e.title==allBooks[index].title)
return(
	<div className={allView? style.containerOpen: style.container} >
	<div className={style.imageButtons}  style={{ placeItems: `${allView && 'center' }` }} >
		<img className={style.image} src={allBooks[index].imageUrl} alt='book'/>
		<div className={style.buttons}>
		<Link to='/react-bookshop/' className={style.link}><button>◄ Back to Store</button></Link>
		<button className={isCartAdded && style.cartButtonClicked} onClick={()=>AddToCartClick(allBooks[index].title)}> {isCartAdded ?'':<BiPlusCircle/>} {isCartAdded?'Added to Cart':'Add to Cart'}  {isCartAdded &&<BiCartAlt/>} </button>
		</div>
	</div>
	
	
	<div  className={style.text}  style={{ placeItems: `${allView && 'center' }`  }}  >
	<div className={style.title} > {allBooks[index].title} </div>
	<ul className={style.rate} >
	<li>{ allBooks[index].rate>=1 ? "★" : "☆"}</li>	
	<li>{ allBooks[index].rate>=2 ? "★" : "☆"}</li>	
	<li>{ allBooks[index].rate>=3 ? "★" : "☆"}</li>	
	<li>{ allBooks[index].rate>=4 ? "★" : "☆"}</li>	
	<li>{ allBooks[index].rate>=5 ? "★" : "☆"}</li>	
	</ul>
	
	<ul className={style.shareIcons}>
	
	{shareIcons.map(iconLink=>{return(
		<li key={'icon'+Math.random()}> <img src={`${iconLink}`} alt='icon'/>  </li>	
	
		)})}
	<BiShare/>	
	</ul>
	
	
	<div>
	<div><span className={style.info} >By(author):</span>{allBooks[index].author}</div>
	<div><span className={style.info} >Categories:</span>{filter.categoryArray[allBooks[index].categories]}</div>
	<div><span className={style.info} >Language:</span>{allBooks[index].language}</div>
	<div><span className={style.info} >Pages:</span>{allBooks[index].pages}</div>
	<div><span className={style.info} >Price:</span>{allBooks[index].price} €</div>
	</div>
	<pre className={allView? style.aboutOpen :style.about} > {allBooks[index].about} </pre>
	{ allView==false && <div onClick={()=>setAllView(true)} className={style.viewall}> . .  . <span className={style.viewallText} >View All</span></div>}
	</div>
	</div>
)}

return <div className={style.loading}>Loading. . .</div>
}
export default AboutBook