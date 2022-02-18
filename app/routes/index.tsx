import { useLoaderData } from "remix";

export type Task = {
	name: string,
	id: string,
	completed: boolean,
}

export const loader = async () => {
	return [
		{
			name: "abc",
			id: "akjhjsahjkahfd",
			completed: true,
		},
		{
			name: "abcde",
			id: "akjhjsfd",
			completed: false,
		},
		{
			name: "abcdef",
			id: "ahjkahfd",
			completed: false,
		}
	];
}

export default function app() {
	const tasks = useLoaderData<Task[]>();

	return (
			<div>
				<h2>Here are your tasks:</h2>
				<ul>
					{ tasks.map(task => (
						<li>{task.name} <button>Complete</button> <button>Remove</button></li>
					))}
				</ul>
			</div>
	)
}