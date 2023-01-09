import { useState } from "react";

export default function Log(props: {
	userImage: string;
	userName: string;
	content: string;
	group?: string;
	post?: string;
	additionalImage?: string;
	when: string;
	message?: string;
	read: boolean;
}) {
	const [read, setRead] = useState(props.read);
	return (
		<div
			className={`log flex flex-col rounded-lg p-4 cursor-pointer transition-all ${
				read ? "" : "bg-Light_grayish_blue_1"
			}`}
			onClick={() => setRead(true)}
		>
			<div className="flex">
				<img
					src={props.userImage}
					alt=""
					className="h-12 aspect-square"
				/>
				<div className="mx-4">
					<p>
						<a
							href="#"
							className="font-extrabold text-Very_dark_blue"
						>
							{props.userName}
						</a>{" "}
						{props.content}{" "}
						{props.group ? (
							<a href="#" className="font-extrabold text-Blue">
								{props.group}
							</a>
						) : (
							""
						)}
						{props.post ? (
							<span className="font-extrabold text-Dark_grayish_blue">
								{props.post}
							</span>
						) : (
							""
						)}
						{read ? (
							""
						) : (
							<span className="bg-Red rounded-full h-2.5 w-2.5 inline-block ml-4"></span>
						)}
					</p>
					<p>{props.when}</p>
					{props.message ? (
						<div className="border-2 p-4 rounded-lg mt-4 text-Dark_grayish_blue">
							{props.message}
						</div>
					) : (
						""
					)}
				</div>
				{props.additionalImage ? (
					<img src={props.additionalImage} alt=""></img>
				) : (
					""
				)}
			</div>
		</div>
	);
}
