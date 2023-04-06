import {AppContext} from "../App"
import Card from '../components/Card'
import {useContext } from 'react'
import SortingPart from '../components/SortingPart'
import Bestsellers from '../components/Bestsellers'
import {TbPlayerTrackNextFilled as ToLast , TbPlayerTrackPrevFilled as ToFirst} from 'react-icons/tb'


const Home=()=>
{


const {books,
			categoryArray,
			booksInPage,
			page,
			setPageClick,
			categories,
			
			pageClick } =useContext(AppContext)


return(

<>


<SortingPart/>

<h1 style={{color:'var(--Dark)' }} > {categoryArray[categories]} </h1>
<div className="books">

{booksInPage.map((book)=>{
	return(<Card 
				index={books.indexOf(book)}	
				key={book.title}
				title={book.title} 
				imageUrl={book.imageUrl}
				author={book.author}
				price={book.price}
				rate={book.rate}
			 />)
					 })}
 
</div>
 

{page.length>1&&<div className='pagination'>
{page.length>2 && <ToFirst className='prevLastBtn' onClick={()=>setPageClick(1)}/>}
	{page.map((item,i)=>{
			
				return( <button className={'pageBtn '+`${i+1==pageClick &&'pageBtnClicked'}`} key={i+1} onClick={()=> setPageClick(i+1)}> {i+1} </button>)
			})}
{page.length>2 && <ToLast className='prevLastBtn' onClick={()=>setPageClick(page.length)}/>}
</div>
}

{Bestsellers(10)}



</>)}

export default Home