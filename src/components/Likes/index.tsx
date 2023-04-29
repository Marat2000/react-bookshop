import {Link} from 'react-router-dom'
import {FaHeartBroken as Heart} from 'react-icons/fa'
import style from './Likes.module.scss'
import {useSelector} from 'react-redux'
import {selectBook,Book} from '../../redux/slices/bookSlice'

type LikesProps={
	likedCard:Book[];
	setLikedCard:React.Dispatch<React.SetStateAction<Book[]>>;
	setLikesClicked:React.Dispatch<React.SetStateAction<boolean>>;
}

const Likes:React.FC< LikesProps>=({likedCard ,setLikedCard , setLikesClicked})=>
{


const {allBooks} = useSelector(selectBook)


const deleteLiked = (title:string) => {
	let array = [...likedCard];
	array = array.filter((e) => e.title != title);
	setLikedCard([...array]);
	localStorage.setItem('liked' , JSON.stringify([...array]))

};



return(

	
		<div className={style.drawer}>
			<div className={style.allCards}>



{likedCard.length>0 ? 
	<>
			{likedCard.map((item)=>{return(
				<div  key={'liked'+Math.random()} className={ style.item}>
				<Link className={style.link} to={`/react-bookshop/${allBooks.indexOf(item)}`} ><img className={style.image}   src={ item.imageUrl } alt='book'/></Link>
				<Link className={style.linkText} to={`/react-bookshop/${allBooks.indexOf(item)}`}  >
				<div >
				<div className={style.title} > {item.title.length>26?item.title.slice(0,23)+' ...' :  item.title} </div>
				<div className={style.author}> {item.author} </div>
				</div>
				</Link>
				<Heart className={ style.delete } onClick={()=>deleteLiked( item.title)}/>
				</div>
				)})}
	</>	:
		<div className={style.emptyText} onClick={()=> setLikesClicked(false)}>
			<div className={style.empty}>You Still Don't Have Favorite Books</div>
			<Heart className={style.emptyHeart}/>
		</div>

	}
	
			</div>
		</div>
	
	)

}

export default Likes