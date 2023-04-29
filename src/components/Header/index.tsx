import { useState , useEffect} from 'react'
import User from '.././User'
import Drawer from '.././Drawer'
import {BiUserCircle, BiCartAlt , BiHeart} from 'react-icons/bi'
import {AiFillHeart as FullHeart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import style from './Header.module.scss'
import Likes from '.././Likes'
import logo from '../../logo.png'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import {Book} from '../../redux/slices/bookSlice'


const Header:React.FC<{
	likedCard:Book[] ,
	setLikedCard:React.Dispatch<React.SetStateAction<Book[]>>}
	>=({likedCard , setLikedCard})=>
{



	const [cartClicked, setCartClicked] = useState(false)
	const [userClicked, setUserClicked] = useState(false)
	const [likesClicked, setLikesClicked] = useState(false)
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const {cartItems}=useSelector((state:RootState)=>state.cart)

	useEffect(() => {

		const totalPriceCalc = () => {
			let priceCalc = 0;
			if (cartItems.length > 0) {
				cartItems.forEach((el) => (priceCalc += el.price));
				setTotalPrice(priceCalc);
			}
		};
		totalPriceCalc();

	}, [cartItems]);




return (<>
<div className={style.header}>

	<Link to="/react-bookshop/"    className={style.logoContainer}>
	<img  className={style.logo}  src={logo} alt='logo'/>
	<h1>Book<div className={style.logoShop}>Shop</div></h1>
	</Link>
	



	<div className={style.rightPart}>


<span className={style.headerPrice}>{cartItems.length>0 &&Math.round(totalPrice*100)/100+' €'}   </span>
<BiCartAlt  onClick={()=>setCartClicked(!cartClicked)}  className={style.headerIcon} />

{cartItems.length>0 && 	<span className={style.cartCount}>{cartItems.length} </span>}

{likedCard.length>0?
	<>
		<div  className={style.headerIcon}>
<FullHeart onClick={()=>setLikesClicked(!likesClicked)} className={style.fullHeart} />
	<span  onClick={()=>setLikesClicked(!likesClicked)} className={style.likeCount}>{likedCard.length} </span>
</div>
	</>
:
<BiHeart onClick={()=>setLikesClicked(!likesClicked)} className={style.headerIcon}/>
}
<BiUserCircle onClick={()=>setUserClicked(!userClicked)} className={style.headerIconUser}/>
</div>	
{userClicked && <>	<User setUserClicked={setUserClicked}/> 
 <div className="overBar"  onClick={()=>setUserClicked(false)} ></div> 
							 </>}

{cartClicked && <>	<Drawer setCartClicked={setCartClicked}  totalPrice={totalPrice} /> <div 
className="overBar"  onClick={()=>setCartClicked(false)} ></div> 
							</>}

{likesClicked && <>	<Likes setLikesClicked={setLikesClicked} likedCard={likedCard} setLikedCard={setLikedCard}/> <div 
							className="overBar"  onClick={()=>setLikesClicked(false)} ></div> 
							</>}
</div>
</>)}
						

export default Header