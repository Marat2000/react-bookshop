import {useContext} from 'react'
import User from '.././User'
import Drawer from '.././Drawer'
import {BiUserCircle, BiCartAlt , BiHeart} from 'react-icons/bi'
import {AiFillHeart as FullHeart} from 'react-icons/ai'
import {AppContext} from '../../App'
import {Link} from 'react-router-dom'
import style from './Header.module.scss'
import Likes from '.././Likes'


const Header=()=>
{

const {
setCartClicked,
cartItems,
userClicked,
registered,
values,
setUserClicked,
cartClicked,
orders,
orderClick,
totalPrice,
addressAccept,
likedCard,
setLikedCard,
likesClicked,
setLikesClicked,
deleteLiked,
setAbout,
books,
darkMode,
setDarkMode,
logo,

cartDelete}=useContext(AppContext)


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
{userClicked && <>	<User 	
							registered={registered} 
							firstName={values[0]}
							 lastName={values[1]}
							 darkMode={darkMode}
							setDarkMode={setDarkMode}
							 setUserClicked={setUserClicked}/> 
							 <div className="overBar"  onClick={()=>setUserClicked(false)} ></div> 
							 </>}

{cartClicked && <>	<Drawer 
							setCartClicked={setCartClicked}
							addressAccept={addressAccept}
							orders={orders} 
							orderClick={orderClick}  
							totalPrice={totalPrice} 
							cartItems={cartItems} 
							setAbout={setAbout}
							books={books}
							cartDelete={cartDelete} /> <div 
							className="overBar"  onClick={()=>setCartClicked(false)} ></div> 
							</>}

{likesClicked && <>	<Likes 	deleteLiked={deleteLiked}
							likedCard={likedCard}
							setLikedCard={setLikedCard}
							setAbout={setAbout}
							books={books}
							setLikesClicked={setLikesClicked}
							 /> <div 
							className="overBar"  onClick={()=>setLikesClicked(false)} ></div> 
							</>}
</div>
</>)}
						

export default Header