export type Task = {
	name: string,
	id: string,
	completed: boolean,
}

interface SingleTaskProps  {
	task: Task
}

const SingleTask: React.FC<SingleTaskProps> = (props: SingleTaskProps) => {
	return (
		<>
			<span>{props.task.name}</span>
			<button>Complete</button> <button>Remove</button>
		</>
	)
}

export default SingleTask;
