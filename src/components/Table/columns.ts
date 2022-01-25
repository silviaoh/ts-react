type ExampleObject = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  age: number;
  country: string;
  phone: number;
};

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id" as keyof ExampleObject,
  },
  {
    Header: "First Name",
    accessor: "first_name" as keyof ExampleObject,
  },
  {
    Header: "Last Name",
    accessor: "last_name" as keyof ExampleObject,
  },
  {
    Header: "Email",
    accessor: "email" as keyof ExampleObject,
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth" as keyof ExampleObject,
  },
  {
    Header: "Age",
    accessor: "age" as keyof ExampleObject,
  },
  {
    Header: "Country",
    accessor: "country" as keyof ExampleObject,
  },
  {
    Header: "Phone",
    accessor: "phone" as keyof ExampleObject,
  },
];
