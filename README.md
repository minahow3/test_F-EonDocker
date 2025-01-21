# test_F-EonDocker

2025/01/22
エラーで止まっている。
TypeError: Failed to fetch

恐らくfetchする際に、/api/dataが落ちてしまっているためかと思う。
const response = await fetch('http://localhost:5000/api/data)

調査から続きをすること
