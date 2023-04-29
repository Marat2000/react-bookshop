import Card from '../components/Card'
import { useEffect } from 'react'
import SortingPart from '../components/SortingPart'
import Bestsellers from '../components/Bestsellers'
import {TbPlayerTrackNextFilled as ToLast , TbPlayerTrackPrevFilled as ToFirst} from 'react-icons/tb'
import {useSelector , useDispatch } from 'react-redux'
import { updateBooksInPage , setPageClick , pageCount, selectBook, Book } from '../redux/slices/bookSlice'
import {selectFilter} from '../redux/slices/filterSlice'
import Skeleton from '../components/Card/Skeleton'

type HomeProps={
likedCard:Book[];
setLikedCard:React.Dispatch<React.SetStateAction<Book[]>>
}
const Home:React.FC<HomeProps>=({likedCard,setLikedCard})=>
{
const { booksInPage, books ,allBooks ,isLoaded, pageClick , page } = useSelector(selectBook)
const  filter  = useSelector(selectFilter)
const dispatch=useDispatch()

useEffect(() => {
dispatch(pageCount());
dispatch(updateBooksInPage())
}, [books , isLoaded , pageClick  ]);


return(
<> 
<SortingPart/>

<h1 style={{color:'var(--Dark)' }} > {filter.categoryArray[filter.category]} </h1>
<div className="books">

{ isLoaded ? booksInPage.map((book)=>{
	return( <Card 
				key={book.title}
				index={allBooks.indexOf(book)}	
				title={book.title} 
				imageUrl={book.imageUrl}
				author={book.author}
				price={book.price}
				rate={book.rate}
				likedCard={likedCard}
				setLikedCard={setLikedCard}
			 />)} )
				
: [...new Array(6)].fill(0).map(book=>{return(<div key={'skeleton'+Math.random() }><Skeleton/></div>)})
}

</div>
 
{page.length>1&&<div className='pagination'>
{page.length>2 && <ToFirst className='prevLastBtn' onClick={()=>dispatch(setPageClick(1))}/>}
	{page.map((item,i)=>{
			
				return( <button className={'pageBtn '+`${i+1==pageClick &&'pageBtnClicked'}`} key={'button'+Math.random()} onClick={()=> dispatch(setPageClick(i+1))}> {i+1} </button>)
			})}
{page.length>2 && <ToLast className='prevLastBtn' onClick={()=>dispatch(setPageClick(page.length))}/>}
</div>
}

<Bestsellers value={10}/>

</>)}

export default Home