import Header from './Header'
import {Outlet} from 'react-router-dom'
import {Book} from '../redux/slices/bookSlice'

type LikeProps={
likedCard:Book[];
setLikedCard:React.Dispatch<React.SetStateAction<Book[]>>;
}
const MainLayout:React.FC<LikeProps>=({likedCard , setLikedCard})=>
{return( 
	<div className="container">
	<Header likedCard={likedCard} setLikedCard={setLikedCard} />
	<Outlet/>
	</div>
)}

export default MainLayout