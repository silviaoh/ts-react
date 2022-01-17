import { ErrorMessage, Field } from 'formik';
import { FormError } from './formerror';
import { InputProps } from './formik-control';

const Input = (props: InputProps): JSX.Element => {
	const { label, name, ...rest } = props;

	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<Field className="small" id={name} name={name} {...rest} />
			<ErrorMessage name={name} component={FormError} />
		</div>
	);
};

export default Input;
