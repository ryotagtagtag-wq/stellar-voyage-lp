<script setup>
const serviceLinks = [
  { label: '低軌道体験', href: '#plans' },
  { label: '月周遊', href: '#plans' },
  { label: '火星移住準備', href: '#plans' },
  { label: '安全性への取り組み', href: '#safety' },
]

const legalLinks = ['プライバシーポリシー', '特定商取引法に基づく表記', '利用規約']

const companyInfo = [
  { label: '会社名', value: 'ステラーヴォヤージュ株式会社' },
  { label: '設立', value: '2042年4月（架空）' },
  { label: '所在地', value: '東京都港区宇宙港前 1-1-1（架空）' },
  { label: '代表者', value: '星野 遼（架空）' },
]
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/10 bg-[#070a13]">
    <div class="pointer-events-none absolute inset-0 bg-starfield opacity-40" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stellar-accent/60 to-transparent" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <!-- ブランド -->
        <div class="lg:col-span-4">
          <a href="#top" class="inline-flex items-center gap-3" aria-label="ステラーヴォヤージュ トップへ戻る">
            <img
              src="/images/logo.webp"
              alt="ステラーヴォヤージュ ロゴ"
              class="h-10 w-10 rounded-full border border-stellar-accent/50 object-cover"
            />
            <span>
              <span class="block font-display text-lg font-semibold tracking-wide text-stellar-white">ステラーヴォヤージュ</span>
              <span class="block font-display text-[10px] tracking-[0.34em] text-stellar-accent">STELLAR VOYAGE</span>
            </span>
          </a>
          <p class="mt-6 max-w-sm text-sm leading-8 text-stellar-muted">
            まだ誰も見たことがない景色へ。<br />
            宇宙を「特別な夢」から「選べる旅」へ変えるために、私たちは日々設計を続けています。
          </p>
          <p class="mt-6 font-display text-[10px] tracking-[0.3em] text-stellar-muted/70">BEYOND THE KNOWN, TOGETHER.</p>
        </div>

        <!-- 会社概要 -->
        <div class="lg:col-span-3">
          <h2 class="font-display text-xs font-semibold tracking-[0.24em] text-stellar-gold">COMPANY</h2>
          <dl class="mt-6 space-y-4">
            <div v-for="item in companyInfo" :key="item.label" class="grid grid-cols-[4.5rem_1fr] gap-3 text-xs">
              <dt class="text-stellar-muted">{{ item.label }}</dt>
              <dd class="text-stellar-white/80">{{ item.value }}</dd>
            </div>
          </dl>
        </div>

        <!-- サービス・法務 -->
        <div class="lg:col-span-2">
          <h2 class="font-display text-xs font-semibold tracking-[0.24em] text-stellar-gold">SERVICE</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="link in serviceLinks" :key="link.label">
              <a :href="link.href" class="text-sm text-stellar-muted transition hover:text-stellar-gold">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h2 class="font-display text-xs font-semibold tracking-[0.24em] text-stellar-gold">LEGAL</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="link in legalLinks" :key="link">
              <a
                href="#"
                :aria-label="`${link}（デモサイトのため本文はありません）`"
                class="text-sm text-stellar-muted transition hover:text-stellar-gold"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 架空であることの明記 -->
      <div class="mt-14 border-l-2 border-stellar-accent bg-stellar-accent/[0.07] px-5 py-4 md:mt-16 md:px-7 md:py-5">
        <p class="flex items-start gap-3 text-xs leading-6 text-stellar-gold md:text-sm">
          <svg class="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.4" />
            <path d="M10 9v5m0-8h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
          <span>
            本サイトは架空の企業・サービスを題材にしたデモサイトです。実在の企業・サービスとは無関係です。
          </span>
        </p>
      </div>

      <div class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-[11px] text-stellar-muted/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2042 Stellar Voyage. All rights reserved. (Fictional demo)</p>
        <p class="font-display tracking-[0.2em]">DESIGNED FOR IMAGINARY JOURNEYS</p>
      </div>

      <!-- 画像クレジット -->
      <div class="mt-10 border-t border-white/10 pt-8">
        <p class="text-[10px] leading-6 text-stellar-muted/60 max-w-lg">
          <span class="font-display tracking-[0.2em] text-stellar-accent">Image credits:</span>
          NASA / Wikimedia Commons (Public Domain) —
          <span class="text-stellar-muted/80">The Earth seen from Apollo 17 · Earth-moon · Apollo 17 Moon Panorama · NASA Mars Rover · Aldrin Apollo 11</span>
        </p>
      </div>
    </div>
  </footer>
</template>
