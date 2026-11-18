# ステラーヴォヤージュ (Stellar Voyage) — 宇宙旅行 LP

Vue 3 + Vite + Tailwind CSS で構築した、架空の宇宙旅行会社「ステラーヴォヤージュ (Stellar Voyage)」のランディングページです。

## ⚠️ 重要：これは架空のサイトです

本サイトは**架空の企業・サービスを題材にしたデモサイト**です。
実在の企業・サービス・組織とは**無関係**です。掲載されているプラン・料金・所要時間・連絡先などはすべて架空のものであり、実際の予約や購入はできません。

## 構成

| セクション | 内容 |
|---|---|
| Hero | ファーストビュー・キャッチコピー・CTA |
| Mission | 3つのミッション原則 |
| PlanList / PlanCard | 3つの旅行プラン（低軌道 / 月周遊 / 火星移住準備） |
| Safety | 安全性・トレーニングの取り組み |
| Flow | 申し込みから帰還までの5ステップ |
| FAQ | よくある質問（アコーディオン） |
| ContactForm | 資料請求フォーム（API未実装・スタブ） |
| Footer | 会社概要・法務リンク・架空明記 |

## 使用技術

- Vue 3 (Composition API, `<script setup>`)
- Vite
- Tailwind CSS
- フォント: Outfit（見出し）、Noto Sans JP（本文）

## 画像クレジット

LP で使用している宇宙・惑星の写真は、NASA / Wikimedia Commons のパブリックドメイン（または同等のフリー）素材を使用しています。

| 画像 | 素材名 | 出典 | ライセンス |
|---|---|---|---|
| hero-main.webp | The Earth seen from Apollo 17 | NASA / Wikimedia Commons | パブリックドメイン (米国政府著作物) |
| plan-low-orbit.webp | Earth-moon | NASA / Wikimedia Commons | パブリックドメイン (米国政府著作物) |
| plan-moon.webp | Apollo 17 Moon Panorama | NASA / Wikimedia Commons | パブリックドメイン (米国政府著作物) |
| plan-mars.webp | NASA Mars Rover | NASA / Wikimedia Commons | パブリックドメイン (米国政府著作物) |
| safety-training.webp | Aldrin Apollo 11 (Buzz Aldrin on the Moon) | NASA / Wikimedia Commons | パブリックドメイン (米国政府著作物) |

出典ページ: https://commons.wikimedia.org

## お問い合わせフォームについて

`src/components/ContactForm.vue` の送信処理は **スタブ（console.log のみ）** であり、実際のAPIへの送信は行われません。デモサイトのため、入力内容は外部に送られません。

## ライセンス

本ソフトウェアは [MIT License](LICENSE) の下で公開されています。

画像素材については、それぞれの出典元のライセンス（パブリックドメイン等）に従います。

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プレビュー
npm run preview
```

## 作成者

ステラーヴォヤージュアーキテクチャデモ（架空）
