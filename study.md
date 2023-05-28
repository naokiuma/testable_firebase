### viteとは？
reactのフレームワーク。vueにも使える

### GCP、google cloud plathomeとは
googleが提供するクラウドコンピューティング。firebaseは、その一種。

### Firebase Emulatorとは
firebaseの動作を正確に再現するエミュレータ。本番環境に影響を与えずに、動作確認、テストなどをおこなえる。

### Firebase JavaScript SDK と　Firebase JavaScript SDK
前者は、クライアントサイドにFirebaseを統合する。<br>
https://firebase.google.com/docs/web/setup<br><br>
後者は、サーバーサイドのNode.js環境でFirebaseの機能を操作する。<br>
https://firebase.google.com/docs/admin/setup

## 環境構築の大枠の流れ
globalにfirebaseのtoolを入れた後に、<br>
firebase login、で(一度ブラウザが立ち上がり)cli上でログイン連携する。<br>
それからfirebase init、で開始。<br>

※ライブラリのvite-tsconfig-paths でシンボルパスを簡略化できる

## コマンド一覧
yarn build ・・・ buildする<br>
yarn deploy ・・・連結しているfirebase上にアプリをアップできる

## デプロイurl
https://testable-firebase-chat-afa85.web.app/