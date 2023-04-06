import {useContext,useState,useEffect , useRef } from 'react'
import {AppContext} from '../../App'
import style from './Bestsellers.module.scss'
import {Link} from 'react-router-dom'


const Bestsellers=(n)=>{

const { allBooks,isLoaded , setAbout , books }=useContext(AppContext)
const [bestBooks,setBestBooks]=useState([0,0,0,0])
const [position,setPosition]=useState(0)
const refSlider=useRef()

let k =1

const delay=(ms)=>{return new Promise(resolve=>{setTimeout(()=>{resolve()},ms)}) }

const buttonClick = (l) => {
	k = 0;
	if (k == 0) {
		if (l == 0) {
			if (position > -n * 8.5 + refSlider.current.clientWidth/16) setPosition(position - 8.5);
			else setPosition(0);
		}

		if (l == 1) {
			if (position <= -8.5) setPosition(position + 8.5);
		}
	}
};


const autoSlide = () => {
	delay(1800).then(() => {
		if (k == 1) {
			if (position > -n * 8.5 + refSlider.current.clientWidth/16) setPosition(position - 8.5);
			else setPosition(0);
		}
	});
};



useEffect(() => {
	if (isLoaded) {
		let booksForBestsellers = [...allBooks];
		booksForBestsellers.sort((x, y) => y.sales - x.sales).splice(n);
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
{bestBooks.map(item=>{return(
<>
{isLoaded && <Link to='/react-bookshop/aboutbook' className={style.link} onClick={()=>setAbout(books.indexOf(item))}><img className={style.image} src={item.imageUrl} /></Link> }
</>)})}
</div>
	</div>
	<button onClick={()=>buttonClick(0)} className={style.rightButton}>►</button>
</div>
	</div>)}


export default Bestsellers