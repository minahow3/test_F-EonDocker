# test_F-EonDocker

プロジェクトフォルダ直下で
$ docker-compose up --build
で起動可能

2025/01/22
エラーで止まっている。
TypeError: Failed to fetch

恐らくfetchする際に、/api/dataが落ちてしまっているためかと思う。
const response = await fetch('http://localhost:5000/api/data)

調査から続きをすること
→ '$aaa' `$aaa`にしたら治った

2025/01/23
CORSエラーから逃れられない・・・・

バックエンド側のポートの表示範囲をpublicにすることで確認できるようになった
