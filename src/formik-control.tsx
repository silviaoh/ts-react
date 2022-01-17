import Input from './Input';
// import TextArea from './textarea';
// import Select from './select';
// import Checkbox from './checkbox';
// import Radio from './radio';
// import DatePicker from './date-picker';
// import File from './file';
// import Recursive from './recursive';
// import StepSelect from './step-select';

interface IProps {
	control: string;
	label: string;
	name: string;
	type?: string;
	options?: [];
}

export interface InputProps {
	label: string;
	name: string;
	type?: string;
	options?: [];
}

export interface IOptions {
	key: string;
	value: string;
}

const FormikControl = (props: IProps): JSX.Element | null => {
	const { control, ...rest } = props;

	switch (control) {
		case 'input':
			return <Input {...rest} />;
		// case 'textarea':
		// 	return <TextArea {...rest} />;
		// case 'select':
		// 	return <Select {...rest} />;
		// case 'checkbox':
		// 	return <Checkbox {...rest} />;
		// case 'radio':
		// 	return <Radio {...rest} />;
		// case 'date':
		// 	return <DatePicker {...rest} />;
		// case 'file':
		// 	return <File {...rest} />;
		// case 'recursive':
		// 	return <Recursive {...rest} />;
		// case 'stepselect':
		// 	return <StepSelect {...rest} />;

		default:
			return null;
	}
};

export default FormikControl;
