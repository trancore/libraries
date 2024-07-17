# 📚 Libraries

![アプリケーション画像](/doc/assets/libraries.png)

## 使用技術

## 📡 使用ライブラリ・フレームワーク

| ライブラリ・フレームワーク | バージョン | 使用意図                                                                         |
| -------------------------- | ---------- | -------------------------------------------------------------------------------- |
| Volta                      | v1.1.1     | Node.js 管理ツール                                                               |
| Node.js                    | v20.15.1   | JavaScript ランタイム                                                            |
| npm                        | v10.7.0    | Node の package マネージャー                                                     |
| Electron                   | v31.2.0    | JavaScript、HTML、CSS によるデスクトップアプリケーションを構築するフレームワーク |
| TypeScript                 | v4.5.4 ~   | JavaScript の静的型付け言語                                                      |
| Vue.js                     | v3.4.31    | フロントエンドJavaScriptフレームワーク                                           |

## ❓ What's Libraries?

任意のディレクトリパス内にあるファイルを任意の文字列で検索できるアプリケーションです。

そのディレクトリに保存されているファイルのファイル名を出力します。

## 📦 パッケージ化

このアプリケーションをパッケージ化するには、Electron-forgeではなくElectron-builderを使用しています。

なぜなら、Electron-forgeではうまくパッケージ化できなかったからです。

そのため、まず以下のコマンドを実施して、main.js, preload.jsとrendererのビルドを行ってください。

```zsh
npm run package
```

その後、以下のコマンドを実施してmacもしくはwindowsようにアプリケーションをパッケージ化してください。

```zsh
npm run make:mac

# or

npm run make:win
```
