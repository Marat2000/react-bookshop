import {useState,useEffect , useRef }  from 'react'
import style from './Bestsellers.module.scss'
import {Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectBook} from '../../redux/slices/bookSlice'



const Bestsellers:React.FC<{value:number}>=({value})=>{

const {allBooks , isLoaded} = useSelector(selectBook)
const [bestBooks,setBestBooks]=useState<string[]>()
const [position,setPosition]=useState(0)

const refSlider=useRef<HTMLDivElement>(null)


let k =1

const delay=(ms:number)=>{
	
	return new Promise<void>((resolve)=>{
	setTimeout(function () { resolve()  }, (ms)) as unknown as number;
	}) }

const buttonClick = (l:number) => {
	k = 0;
	if (k == 0 && refSlider.current!=null) {
		if (l == 0) {
			if (position > -value * 8.5 + refSlider.current.clientWidth/16) setPosition(position - 8.5);
			else setPosition(0);
		}

		if (l == 1) {
			if (position <= -8.5) setPosition(position + 8.5);
		}
	}
};


const autoSlide = async() => {
	delay(1800).then(() => {
		if (k == 1 && refSlider.current!=null) {
			if (position > -value * 8.5 + refSlider.current.clientWidth/16) setPosition(position - 8.5);
			else setPosition(0);
		}
	});
};
 



useEffect(() => {
	if (allBooks) {
		let books = [...allBooks];
		books.sort((x, y) => y.sales - x.sales).splice(value);
		let booksForBestsellers:string[]=[]
		books.forEach((e,i)=>booksForBestsellers.push(e.imageUrl))
		setBestBooks([...booksForBestsellers]);
	}
}, [isLoaded]);

useEffect(()=>{ autoSlide() },[position])


	return(<div className={style.all}>
<h2 style={{color:'var(--Dark)'}} >Bestsellers</h2>
<div className={style.sliderButtons }>
<button onClick={()=>buttonClick(1)} className={style.leftButton}>◄</button>
<div className={style.slider} ref={refSlider}>
<div className={style.container}  style={{ transform:`translateX(${position}rem)` }} >
 {bestBooks? bestBooks.map(itemUrl=>{return(
<div key={'best'+Math.random()}>
  <Link to={`/react-bookshop/${allBooks?.indexOf(allBooks?.filter(e=>e.imageUrl==itemUrl)[0])}`} className={style.link} >
  <img className={style.image} src={itemUrl} />

</Link> 
</div>)}) :
[0,0,0,0,0,0].map(item=>{return(
	<div key={'emptyBest'+Math.random()} className={style.image}></div>
	)})
}

</div>
	</div>
	<button onClick={()=>buttonClick(0)} className={style.rightButton}>►</button>
</div>
	</div>)}


export default Bestsellers