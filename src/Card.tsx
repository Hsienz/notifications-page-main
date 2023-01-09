import Log from "./Log";
import Header from "./Header";
import {logs} from './constants/logs'


export default function Card() {
	return (
		<div className="font-sans font-medium text-Grayish_blue text-base bg-white lg:rounded-lg p-4">
			<div>
				<Header />
			</div>
			<div className="px-4 flex flex-col gap-y-4 pt-2">
				{logs.map((x,i) => (
					<Log key={i} {...x} />
				))}
			</div>
		</div>
	);
}
