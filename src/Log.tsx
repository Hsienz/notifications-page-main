export default function Log(props: {
	userImage: string;
	userName: string;
	content: string;
	targetName?: string;
	additionalImage?: string;
	when: string;
	message?: string;
}) {
	return (
		<div className="flex flex-col">
			<div className="flex">
				<img src={props.userImage} alt="" />
				<div>
					<p>
						<a href="#">{props.userName}</a> {props.content}{" "}
						{props.targetName ? props.targetName : ""}
					</p>
					<p>{props.when}</p>
				</div>
				{props.additionalImage ? (
					<img src={props.additionalImage} alt=""></img>
				) : (
					""
				)}
			</div>
			{props.message ? <div>{props.message}</div> : ""}
		</div>
	);
}
