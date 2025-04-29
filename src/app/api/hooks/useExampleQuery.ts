import { useQuery } from "@tanstack/react-query";

// サンプルデータ型の定義
interface ExampleData {
  id: number;
  title: string;
  content: string;
}

// サンプルAPI関数
const fetchExampleData = async (): Promise<ExampleData[]> => {
  // 通常はここでAPI呼び出しを行いますが、サンプルデータを返します
  return [
    { id: 1, title: "サンプル1", content: "これはサンプルコンテンツです。" },
    { id: 2, title: "サンプル2", content: "TanStack Queryの例です。" },
    {
      id: 3,
      title: "サンプル3",
      content: "キャッシュとデータ取得の管理が簡単です。",
    },
  ];
};

// TanStack Queryフック
export function useExampleQuery() {
  return useQuery({
    queryKey: ["exampleData"],
    queryFn: fetchExampleData,
  });
}
