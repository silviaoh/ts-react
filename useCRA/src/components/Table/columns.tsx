import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

type ExampleObject = {
  status: string;
  registerDate: string;
  clientName: string;
  location: string;
  lCategory: string;
  productName: string;
  description: string;
  engineer: string;
  category: [];
  id: number;
};

type DateValue = {
  value: string;
};

export const COLUMNS = [
  {
    Header: "상태",
    Footer: "상태",
    accessor: "status" as keyof ExampleObject,
    // Filter: ColumnFilter,
  },
  {
    Header: "접수일시",
    Footer: "접수일시",
    accessor: "registerDate" as keyof ExampleObject,
    Cell: ({ value }: DateValue) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    // Filter: ColumnFilter,
  },
  {
    Header: "고객명",
    Footer: "고객명",
    accessor: "clientName" as keyof ExampleObject,
    // Filter: ColumnFilter,
  },
  {
    Header: "지역",
    Footer: "지역",
    accessor: "location" as keyof ExampleObject,
    // Filter: ColumnFilter,
  },
  {
    Header: "대분류",
    Footer: "대분류",
    accessor: "lCategory" as keyof ExampleObject,
    // Filter: ColumnFilter,
  },
  {
    Header: "제품명",
    Footer: "제품명",
    accessor: "productName" as keyof ExampleObject,
    // Filter: ColumnFilter,
  },
  {
    Header: "불량내용",
    Footer: "불량내용",
    accessor: "description" as keyof ExampleObject,
    // Filter: ColumnFilter,
  },
  {
    Header: "처리기사",
    Footer: "처리기사",
    accessor: "engineer" as keyof ExampleObject,
    // Filter: ColumnFilter,
  },
  {
    // feat2: 버튼
    Header: "확인/변경",
    Footer: "확인/변경",
    accessor: "id" as keyof ExampleObject,
    disableFilters: true,
    Cell: (): JSX.Element => {
      return <button>확인/변경</button>;
    },
    // Filter: ColumnFilter,
  },
  {
    Header: "카테고리",
    Footer: "카테고리",
    accessor: "category" as keyof ExampleObject,
    // feat1: 한 td 안에 두 줄
    Cell: ({ value }: any) => {
      return value.map((string: string, idx: number) => {
        return <p key={`${string}${idx}`}>{string}</p>;
      });
    },
    // Filter: ColumnFilter,
  },
];
