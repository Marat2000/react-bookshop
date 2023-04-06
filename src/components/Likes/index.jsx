import {Link} from 'react-router-dom'
import {FaHeartBroken as Heart} from 'react-icons/fa'
import style from './Likes.module.scss'

const Likes=(props)=>
{

const bookClick=(item)=>{

	props.setLikesClicked(false)
	props.setAbout(props.books.indexOf(item))
}


return(

	
		<div className={style.drawer}>
			<div className={style.allCards}>



{props.likedCard.length>0 ? 
	<>
			{props.likedCard.map((item)=>{return(
				<div className={ style.item}>
				<Link className={style.link} to='/react-bookshop/aboutbook' ><img onClick={()=> bookClick(item)} className={style.image}   src={ item.imageUrl } alt='book'/></Link>
				<Link className={style.linkText} to='/react-bookshop/aboutbook' >
				<div  onClick={()=> bookClick(item) }>
				<div className={style.title} > {item.title.length>26?item.title.slice(0,23)+' ...' :  item.title} </div>
				<div className={style.author}> {item.author} </div>
				</div>
				</Link>
				<Heart className={ style.delete } onClick={()=>props.deleteLiked( item.title)}/>
				</div>
				)})}
	</>	:
		<div className={style.emptyText} onClick={()=> props.setLikesClicked(false)}>
			<div className={style.empty}>You Still Don't Have Favorite Books</div>
			<Heart className={style.emptyHeart}/>
		</div>

	}
	
			</div>
		</div>
	
	)

}

export default Likes