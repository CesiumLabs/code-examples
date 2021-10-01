import React from 'react';
import { useLanyard } from 'use-lanyard';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router'

export default function Lanyard() {
	const router = useRouter()
	const { id } = router.query

	const DISCORD_ID = id?.toString() || "567885938160697377"; // Change with your Discord ID. E.G 567885938160697377

	const { data: lanyard } = useLanyard(DISCORD_ID);

	const activity = lanyard?.activities.find(activity => activity.type === 0);

	const timestamp = moment(activity?.timestamps?.start);

	const isGitHub = activity?.name === 'GitHub' ? <span><i className="fab fa-github"></i>{' '}GitHub</span> : activity?.name === "Visual Studio Code" ? <span><i className="fad fa-code text-blue-500"></i>{' '}Visual Studio Code</span> : activity?.name;

	return (
		<div>
			<div className="rounded-md h-auto w-96 bg-gray-800 first:p-5 card">
				<div className="flex items-center">
					<Image src={activity ? `https://cdn.discordapp.com/app-assets/${activity?.application_id}/${activity?.assets?.large_image}.png` : "https://i.stack.imgur.com/y9DpT.jpg"} alt={activity?.assets?.large_text || "Placeholder"} className="rounded-md" draggable="false" width="96px" height="96px" />
					<p className="ml-4 leading-snug flex flex-col justify-between">
						<span className="text-white text-xl font-bold">Playing {isGitHub || "Nothing..."}</span>
						<span className="text-white">{activity?.details?.split('', 35).reduce((o, c) => o.length === 34 ? `${o}${c}...` : `${o}${c}`, '') || "Nothing..."}</span>
						<span className="text-white">{activity?.state?.split('', 35).reduce((o, c) => o.length === 34 ? `${o}${c}...` : `${o}${c}`, '') || "Nothing"}</span>
						<span className="text-white">⏰ {timestamp.fromNow().split('ago')[0] || "0 minutes"} elapsed</span>
					</p>
				</div>
			</div>
			<br />
			<div className="flex items-center justify-center">
				<h1 className="text-white font-semibold">Please input a Discord Snowflake id in the url. i.e <span className="focus:outline-none bg-none bg-gray-800 rounded-lg p-3 h-4 w-4">?id=567885938160697377</span></h1>
			</div>
		</div>
	);
}