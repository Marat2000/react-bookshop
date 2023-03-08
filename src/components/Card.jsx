import Rate from './Rate'

const Card=(props)=>
{
return (<div className="card">
		{/* <div> {props.index} </div> */}
		<img src={props.imageUrl} alt="book"/>
		<span>
		<h3>{ props.title }</h3>
		<h5 className="author">{props.author}</h5>
			<Rate/>
		<p className="price">{props.price} €  </p>
		</span>
	</div>)
}

export default Card


