"use client";

import { useExampleQuery } from "../api/hooks/useExampleQuery";

export default function ExamplePage() {
  const { data, isLoading, isError, error } = useExampleQuery();

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (isError) {
    return <div>エラーが発生しました: {error?.message}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">TanStack Query サンプル</h1>
      <ul className="space-y-4">
        {data?.map((item) => (
          <li key={item.id} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
