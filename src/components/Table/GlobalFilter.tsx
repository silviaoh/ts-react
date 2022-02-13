// GlobalFiltering 1. 파일 작성

// 디바운싱 원하는 경우
import { useState, useEffect } from "react";
import { useAsyncDebounce } from "react-table";
export const GlobalFilter = ({ filter, setGlobalFilter, setFilter }: any) => {
  const [value, setValue] = useState(filter);
  const [selectValue, setSelectValue] = useState("");

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 1000);

  const onFilterChange = useAsyncDebounce((key, value) => {
    setFilter(key, value || undefined);
  }, 1000);

  useEffect(() => {
    if (selectValue === "clientName") {
      onFilterChange("clientName", value);
    } else if (selectValue === "") {
      onChange(value);
    }
  }, [value]);

  return (
    <span>
      <select
        name="filters"
        id="table-filter"
        onChange={(e) => {
          setValue("");
          setSelectValue(e.target.value);
        }}
      >
        <option value="">고르기</option>
        <option value="status">상태</option>
        <option value="clientName">고객명</option>
      </select>
      <input
        value={
          // 디바운싱 필요 없는 경우 -> filter
          value || ""
        }
        onChange={(e) => {
          // 디바운싱 필요 없는 경우 -> setFilter(e.target.value)
          setValue(e.target.value);
        }}
      />
    </span>
  );
};
