import useInput from '../hooks/useInput';

const ReactHooks = () => {
	const maxLen = (value: string) => value.length <= 10;
	const name = useInput('Miss.', maxLen);

	return (
		<div>
			<div>
				<h1>Hello! This is Input Hook Example</h1>
				<input placeholder="Name" {...name} />
			</div>
		</div>
	);
};

export default ReactHooks;
