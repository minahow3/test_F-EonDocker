import { useEffect, useState } from 'react';
import axios from 'axios';

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
        // axiosを使ってバックエンドAPIからデータを取得
        const response = await axios.get(`${apiUrl}/api/data`);

        // データをステートに保存
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // Axiosエラーの場合、エラーメッセージを取得
          console.error('Axios Error: ', error.response?.data || error.message);
        } else {
          // その他のエラー
          console.error('Error: ', error);
        }
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
