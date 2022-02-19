import { useLoaderData } from "remix";
import SingleTask from "~/task";
import type { Task } from "~/task";

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
						<li key={task.id}><SingleTask task={task}/></li>
					))}
				</ul>
			</div>
	)
}