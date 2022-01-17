import React from 'react';

interface Props {
	name: string;
	mark: string;
	optional?: boolean;
	onClick: (name: string) => boolean;
}

const Greetings = ({ name, mark, optional, onClick }: Props) => {
	return (
		<div>
			Hello, {name}, {mark} {optional && 'options'}
			<button onClick={() => onClick('yes')}>click me</button>
		</div>
	);
};

export default Greetings;
