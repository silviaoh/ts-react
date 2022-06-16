import styled from 'styled-components';
import React, { useEffect, useRef, useState, memo } from 'react';
import Editor from '../Editor/Editor';

// 게시글 create

const NoticeCreateDialog = memo(() => {
	const quillRef = useRef();
	const [htmlContent, setHtmlContent] = useState('');
	const [noticeTitle, setNoticeTitle] = useState<string>('');
	const [cont, setCont] = useState<string>('');

	const form = new FormData();

	// 다이얼로그 닫힐 때 에디터초기화
	const handleClose = () => {
		setHtmlContent('');
	};

	// 공지사항 등록
	const handleCreateAlert = () => {
		// 서버로 form 전송 코드
		form.append('title', noticeTitle);
		form.append('cont', htmlContent);
	};

	for (let key of Object.keys(form)) {
		if (key !== 'length') {
			console.log('form', form.get(key));
		}
	}

	const onChangeTitle = (e: any) => {
		setNoticeTitle(e?.target.value);
	};

	return (
		<React.Fragment>
			<EditorForm onSubmit={handleCreateAlert}>
				<table className="tb_data tb_write">
					<tbody>
						<tr>
							<th>제목</th>
							<td colSpan={3}>
								<input
									id="dataset-title"
									type="text"
									placeholder="제목을 입력하세요."
									className="title"
									value={noticeTitle}
									onChange={onChangeTitle}
								/>
							</td>
						</tr>
						<tr>
							<th>상세내용</th>
							<td colSpan={3} style={{ height: '300px' }}>
								<Editor quillRef={quillRef} htmlContent={htmlContent} form={form} setHtmlContent={setHtmlContent} />
							</td>
						</tr>
					</tbody>
				</table>
			</EditorForm>
			{htmlContent}
		</React.Fragment>
	);
});

export default NoticeCreateDialog;

const EditorForm = styled.form`
	.title {
		width: 100%;
		padding: 8px;
		border-radius: 20px;

		border: 1px solid #ccc;
	}

	.title:focus {
		outline: 0;
	}

	.ql-toolbar.ql-snow {
		border-radius: 20px;
		margin-bottom: 16px;
	}

	.ql-container.ql-snow {
		border-radius: 20px;
	}
`;
const CTextField = styled.div``;
const QuillEditors = styled.div``;
