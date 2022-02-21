import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
// import rebase from './rebase';

/*
액셀 다운로드 실제로 동작시키는 코드 -----
*/
const s2ab = (s: any) => {
	// convert s to arrayBuffer
	const buf = new ArrayBuffer(s.length);
	// create uint8array as viewer
	const view = new Uint8Array(buf);
	// convert to octet
	for (let i = 0; i < s.length; i++) {
		view[i] = s.charCodeAt(i) & 0xff;
	}
	return buf;
};

const exportExcel = (pageName: any, sheetName: any) => {
	/* 
    1. workbook 생성 
      + 문서 속성세팅 ( 윈도우에서 엑셀 오른쪽 클릭 속성 -> 자세히에 있는 값들(필요 없으면 안써도 괜찮다.)
  */
	let workbook = XLSX.utils.book_new();
	workbook.Props = {
		Title: `${pageName} ${sheetName}.xlsx`,
		Author: 'AnserAS',
		Company: 'Anser Technologies',
		LastAuthor: 'Anser Technologies',
		CreatedDate: new Date(),
	};

	/*
    2. 시트 만들기
      + 컬럼 너비 지정
  */
	// XLSX.utils.aoa_to_sheet에 보여줄 데이터가 들어감
	let newWorkSheet = XLSX.utils.aoa_to_sheet([['test'], [], ['row1', 'row2', 'row3']]);

	newWorkSheet['!cols'] = Array(12).fill({ wch: 25 });

	// 3. workbook에 새로 만든 워크시트에 이름을 주고 붙인다.
	XLSX.utils.book_append_sheet(workbook, newWorkSheet, sheetName);

	// 4. 엑셀 파일 만들기
	const workbookOut = XLSX.write(workbook, {
		bookType: 'xlsx',
		type: 'binary',
	});

	// 5. 엑셀 파일 내보내기 (파일 다운로드 시작)
	saveAs(new Blob([s2ab(workbookOut)], { type: 'application/octet-stream' }), `${pageName} - ${sheetName}.xlsx`);
};

/*
---------------------------------------------
*/

export default exportExcel;
