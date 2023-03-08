import {useState} from 'react'



const Rate =()=>
{
	const [star,setStar]=useState([1]);
	return(
		<ul className="rate">
			<li onClick={()=> {setStar(1) }	}> {star>=1? "★" : "☆"} </li>
			<li onClick={()=> {setStar(2) }	}> {star>=2? "★" : "☆"} </li>
			<li onClick={()=> {setStar(3) }	}> {star>=3? "★" : "☆"} </li>
			<li onClick={()=> {setStar(4) }	}> {star>=4? "★" : "☆"} </li>
			<li onClick={()=> {setStar(5) }	}> {star>=5? "★" : "☆"} </li>
		</ul>
		)

}

export default Rate