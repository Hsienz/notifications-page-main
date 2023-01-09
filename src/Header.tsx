export default function Header() {
    const readAll = () => {
        const logs = document.getElementsByClassName('log')
        for( let i = 0; i < logs.length; i++ ) {
            ( logs[i] as HTMLElement ).click()
        } 
    }
	return (
		<div className="flex justify-between p-4">
			<div className="flex">
				<h1 className="text-lg font-extrabold text-Very_dark_blue">Notifications <span className="text-Very_light_grayish_blue bg-Blue ml-2 px-3 rounded-md text-sm py-0.5">3</span></h1>
			</div>
			<button className="text-Dark_grayish_blue transition-all hover:text-Blue font-medium" onClick={readAll}>Mark all as read</button>
		</div>
	);
}
