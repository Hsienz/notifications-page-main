import Log from './Log'
import avatarAngela from './assets/images/avatar-angela-gray.webp'
import avatarAnna from './assets/images/avatar-anna-kim.webp'
import avatarJacob from './assets/images/avatar-jacob-thompson.webp'
import avatarKimberly from './assets/images/avatar-kimberly-smith.webp'
import avatarMark from './assets/images/avatar-mark-webber.webp'
import avatarNathan from './assets/images/avatar-nathan-peterson.webp'
import avatarRizky from './assets/images/avatar-rizky-hasanuddin.webp'
import imageChess from './assets/images/image-chess.webp'

const logs = [
    {
        userImage: avatarMark,
        userName : 'Mark Webber',
        content : 'reacted to your recent post My first tournament today!',
        when : '1m ago'
    },
    {
        userImage: avatarAngela,
        userName : 'Angela Gray',
        content : 'followed you',
        when : '5m ago',
    },
    {
        userImage: avatarJacob,
        userName : 'Jacob Thompson',
        content : 'has joined your group',
        targetName: 'Chess Club',
        when: '1 day ago',
    },
    {
        userImage: avatarRizky,
        userName: 'Rizky Hasanuddin',
        content: 'sent you a private message',
        when: '5 days ago',
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    {
        userImage: avatarKimberly,
        userName: 'Kimberly Smith',
        content: 'commented on your picture',
        additionalImage: imageChess,
        when: '1 week ago',
    },
    {
        userImage: avatarNathan,
        userName: 'Nathan Peterson',
        content: 'reacted to your recent post 5 end-game strategies to increase your win rate',
        when: '2 weeks ago',
    },
    {
        userImage: avatarAnna,
        userName: 'Anna Kim',
        content: 'left the group',
        targetName: 'Chess Club',
        when: '2 weeks ago',
    },
]


export default function Card() {
	return (
		<div>
			<p>Notifications 3</p>
            <p>Mark all as read</p>
            <div>
                {logs.map(x=><Log {...x}/>)}
            </div>
		</div>
	);
}
