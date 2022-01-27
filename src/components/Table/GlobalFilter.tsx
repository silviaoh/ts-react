// GlobalFiltering 1. 파일 작성

// 디바운싱 원하는 경우
import { useState } from "react";
import { useAsyncDebounce } from "react-table";
export const GlobalFilter = ({ filter, setFilter }: any) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    <span>
      Search: {""}
      <input
        value={
          // 디바운싱 필요 없는 경우 -> filter
          value || ""
        }
        onChange={(e) => {
          // 디바운싱 필요 없는 경우 -> setFilter(e.target.value)
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
