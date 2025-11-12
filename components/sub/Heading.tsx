type Props = {
	text?: string;
	className?: string;
};

const Heading = ({ text = "", className = "" }: Props) => {
	return (
		<h1
			className={`text-2xl sm:text-3xl font-bold select-none ${className}`}
		>
			{text}
		</h1>
	);
};

export default Heading;
