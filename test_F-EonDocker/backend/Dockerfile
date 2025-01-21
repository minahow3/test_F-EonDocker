# 使用するNode.jsのバージョンを指定
FROM node:16

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# パッケージファイルをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# サーバーをポート5000で実行
EXPOSE 5000
CMD ["node", "index.js"]
