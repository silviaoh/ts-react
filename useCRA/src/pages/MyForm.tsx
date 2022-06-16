import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import FormikControl from '../formik-control';
const id = 'daum-postcode'; // script가 이미 rending 되어 있는지 확인하기 위한 ID
const src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const MyForm = () => {
	const [input, setInput] = useState<string | number>('');

	const loadLayout = () => {
		window.daum.postcode.load(() => {
			const postcode = new window.daum.Postcode({
				oncomplete: function (data) {
					console.log('data', data);
					setInput(data.zonecode);
				},
			});
			postcode.open();
		});
	};

	type InitialProps = {
		zonecode: number | string;
	};

	console.log('input', input);

	useEffect(() => {
		// script 없는지 확인하고 추가
		const isAlready = document.getElementById(id);

		if (!isAlready) {
			const script = document.createElement('script');
			script.src = src;
			script.id = id;
			document.body.append(script);
		}
	}, []);

	return (
		<div>
			<Formik initialValues={{ zonecode: input }} onSubmit={(values: InitialProps) => console.log('first')}>
				{(formik) => (
					<Form>
						{console.log('formik', formik)}
						<FormikControl control="input" label="우편번호" name="zonecode" type="number" />
						<button type="button" onClick={loadLayout}>
							우편번호 찾기
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default MyForm;
