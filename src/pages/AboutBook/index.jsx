import style from './AboutBook.module.scss'
import {useState} from 'react'
import {BiCartAlt , BiShare , BiPlusCircle} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {AppContext} from '../../App'


 


const AboutBook=(index)=>
{

window.scrollTo(0,0)


let shareIcons=['assets//shareIcons/icon-facebook.svg' ,  'assets//shareIcons/icon-instagram.svg' , 'assets//shareIcons/icon-pinterest.svg'  ]	
const {about , books  , categoryArray  ,cartItems, AddToCartClick }=useContext(AppContext)
index=about

let isCartAdded=cartItems.some(e=>e.title==books[index].title)


const [allView,setAllView]=useState(false)

return(
	<div className={allView? style.containerOpen: style.container} >
<div className={style.imageButtons}  style={{ placeItems: `${allView && 'center' }` }} >
	<img className={style.image} src={books[index].imageUrl} alt='book'/>
	<div className={style.buttons}>
	<Link to='/react-bookshop/' className={style.link}><button>◄ Back to Store</button></Link>
	<button className={isCartAdded&&style.cartButtonClicked} onClick={()=>AddToCartClick(books[index].title)}> {isCartAdded ?'':<BiPlusCircle/>} {isCartAdded?'Added to Cart':'Add to Cart'}  {isCartAdded &&<BiCartAlt/>} </button>
	</div>
</div>


<div  className={style.text}  style={{ placeItems: `${allView && 'center' }`  }}  >
<div className={style.title} > {books[index].title} </div>
<ul className={style.rate} >
<li>{ books[index].rate>1 ? "★" : "☆"}</li>	
<li>{ books[index].rate>2 ? "★" : "☆"}</li>	
<li>{ books[index].rate>3 ? "★" : "☆"}</li>	
<li>{ books[index].rate>4 ? "★" : "☆"}</li>	
<li>{ books[index].rate>5 ? "★" : "☆"}</li>	
</ul>

<ul className={style.shareIcons}>

{shareIcons.map(iconLink=>{return(
	<li> <img src={`${iconLink}`} alt='icon'/>  </li>	

	)})}
<BiShare/>	
</ul>


<div>
<div><span className={style.info} >By(author):</span>{books[index].author}</div>
<div><span className={style.info} >Categories:</span>{categoryArray[books[index].categories]}</div>
<div><span className={style.info} >Language:</span>{books[index].language}</div>
<div><span className={style.info} >Pages:</span>{books[index].pages}</div>
<div><span className={style.info} >Price:</span>{books[index].price} €</div>
</div>
<pre className={allView? style.aboutOpen :style.about} > {books[index].about} </pre>
{ allView==false && <div onClick={()=>setAllView(true)} className={style.viewall}> . .  . <span className={style.viewallText} >View All</span></div>}
</div>



</div>
)


}
export default AboutBook