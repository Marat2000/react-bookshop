import {Link} from 'react-router-dom'
const NotFound=()=>
{
return (
	<div style={{ display: "grid", placeItems: "center" }}>
		<pre
			style={{
				color: "var(--Pink)",
				textAlign: "center",
				marginTop: " 2rem",
				fontSize: " 3rem",
			}}
		>
			{"Page\nnot\nfound :("}
		</pre>
		<Link to="react-bookshop/">
			<button
				style={{
					border: "2px solid var(--Pink)",
					color: "var(--Pink)",
					borderRadius: "1rem",
					padding: ".5rem",
				}}
			>
				Back To Store
			</button>
		</Link>
	</div>
);
}
export default NotFound