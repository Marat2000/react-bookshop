const Card=(props)=>
{
return (<div className="card">
		<img src={props.imageUrl} alt="book"/>
		<span>
		<h3>{ props.title }</h3>
		<h5 className="author">{props.author}</h5>
		<p className="price">{props.price} €  </p>
		</span>
	</div>)
}

export default Card