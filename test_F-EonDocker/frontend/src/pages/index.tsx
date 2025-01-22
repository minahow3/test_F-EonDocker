import { useEffect, useState } from 'react';

interface ApiResponse {
  message: string;
}

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);

  // コンポーネントがマウントされたときにバックエンドAPIを呼び出す
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(apiUrl);

    const fetchData = async () => {
      try {
        // バックエンドAPIからデータを取得
        const response = await fetch('${apiUrl}/api/data', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);

        // レスポンスが正常かどうかをチェック
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result: ApiResponse = await response.json();  // 型を指定
        setData(result);  // データをステートに保存
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);  // 空の依存配列で、コンポーネントが初回マウントされたときのみ実行

  return (
    <div>
      <h1>Next.js + Express</h1>
      {/* データがまだ取得されていない場合はLoading表示、それ以外はデータを表示 */}
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
}
