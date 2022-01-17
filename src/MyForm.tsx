import React, { useState } from "react";

interface MyFormProps {
  onSubmit: (form: { name: string; description: string }) => void;
}

const MyForm = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({ name: "", description: "" });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e 값을 무엇으로 설정해야할까요?
    // 일단 모를 때는 any로 설정
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 여기도 모르니까 any
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    }); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default MyForm;
