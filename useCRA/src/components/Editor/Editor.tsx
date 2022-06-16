import React, { useMemo, memo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type EditorProps = {
	quillRef: any;
	htmlContent: string;
	setHtmlContent: any;
	form: any;
};

// Editor Component 생성

const Editor = memo(({ quillRef, htmlContent, setHtmlContent, form }: EditorProps) => {
	const imageHandler = () => {
		const input = document.createElement('input');

		let url = '';

		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();

		// 파일이 input 태그에 담기면 실행될 함수
		input.onchange = async () => {
			const file = input.files;
			if (file !== null) {
				form.append('image', file[0]);

				try {
					// response data
					//const res
					// response 데이터에 담기는 url을 변수에 담음
					//url = res.data.url
					// 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
					// 해당 DOM의 데이터가 필요하기에 useRef를 사용
					// const range = quillRef.current?.getEditor().getSelection()?.index;
					// if (range !== null && range !== undefined) {
					//   let quill = quillRef.current?.getEditor();
					//   quill.setSelection(range, 1);
					//   quill.clipboard.dangerouslyPasteHTML(range, `<img src=${url} alt="이미지 태그가 삽입됩니다." />`)
					// }
					// return {...res, success: true}
				} catch (err) {
					// const err = error as AxiosError;
					// return { ...err.response, success: false };
				}
			}
		};
	};
	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [1, 2, 3, 4, 5, 6, false] }],
					['bold', 'italic', 'underline', 'strike', 'blockquote'],
					[{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
					[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }],
					['link', 'image'],
				],
				// handlers: {
				// 	image: imageHandler,
				// },
			},
		}),
		[]
	);
	return (
		<React.Fragment>
			<ReactQuill
				ref={(element) => {
					if (element !== null) {
						quillRef.current = element;
					}
				}}
				value={htmlContent}
				onChange={setHtmlContent}
				modules={modules}
				theme="snow"
				placeholder="Anseras에 글을 작성해주세요."
				style={{ height: '85%', marginBottom: '6%' }}
			/>
		</React.Fragment>
	);
});

export default Editor;
