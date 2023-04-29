import ContentLoader from "react-content-loader";

const Skeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={274}
			height={216.4}
			viewBox="0 0 290 232.4"
			backgroundColor="var(--Light)"
			foregroundColor="var(--Pink)"
			style={{ gridArea: "1/1/3/1" }}
			//{...props}
		>
			<rect x="24" y="8" rx="6" ry="6" width="82" height="130" />
			<rect x="30" y="164" rx="0" ry="0" width="84" height="24" />
			<rect x="120" y="19" rx="0" ry="0" width="160" height="38" />
			<rect x="151" y="72" rx="0" ry="0" width="104" height="13" />
			<rect x="156" y="106" rx="0" ry="0" width="91" height="22" />
			<rect x="141" y="163" rx="14" ry="14" width="120" height="33" />
		</ContentLoader>
	);
};

export default Skeleton;