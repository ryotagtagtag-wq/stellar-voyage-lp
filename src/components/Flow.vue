<script setup>
const steps = [
  {
    title: 'お申し込み',
    period: 'DAY 0',
    description: 'フォームよりご相談ください。ご希望のプランと日程をお伺いします。',
  },
  {
    title: '健康診断',
    period: 'DAY 14',
    description: '提携医療機関で、宇宙飛行に適した身体状態かを詳しく確認します。',
  },
  {
    title: 'トレーニング',
    period: 'DAY 30〜',
    description: '無重力への適応、G耐性、緊急時手順を段階的に体得します。',
  },
  {
    title: '出発',
    period: 'LAUNCH',
    description: '宇宙港にて最終チェック。カウントダウンの後、宇宙へ向かいます。',
  },
  {
    title: '帰還',
    period: 'RETURN',
    description: '地球に戻った後も、医学検査と振り返りまでしっかり寄り添います。',
  },
]
</script>

<template>
  <section id="flow" aria-labelledby="flow-title" class="relative overflow-hidden border-y border-white/10 bg-stellar-navy/40 py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
    <div class="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-stellar-accent/10 blur-3xl" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center">
        <p class="font-display text-xs font-medium tracking-[0.34em] text-stellar-accent">YOUR JOURNEY</p>
        <h2 id="flow-title" class="mt-5 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
          申し込みから、<span class="text-stellar-gold">帰還</span>まで。
        </h2>
        <p class="mx-auto mt-6 max-w-xl text-sm leading-8 text-stellar-muted">
          一歩ずつ、確実に。専門チームが旅の全過程を設計し、支えます。
        </p>
      </div>

      <ol class="relative mx-auto mt-16 grid max-w-6xl gap-9 md:mt-20 md:grid-cols-5 md:gap-4">
        <!-- 時系列の線：モバイルは縦、デスクトップは横 -->
        <div class="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-stellar-accent/60 via-white/15 to-stellar-accent/30 md:hidden" aria-hidden="true" />
        <div class="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-stellar-accent/60 to-transparent md:block" aria-hidden="true" />

        <li v-for="(step, index) in steps" :key="step.title" class="relative flex gap-6 md:block md:text-center">
          <div
            class="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-stellar-accent/50 bg-stellar-dark font-display text-lg font-medium text-stellar-gold shadow-[0_0_30px_-10px_rgba(197,160,89,0.7)] md:mx-auto"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </div>
          <div class="pt-1 md:pt-0">
            <p class="font-display text-[10px] tracking-[0.28em] text-stellar-accent md:mt-7">{{ step.period }}</p>
            <h3 class="mt-2 text-base font-bold text-stellar-white md:mt-3 md:text-lg">{{ step.title }}</h3>
            <p class="mt-2 max-w-[17rem] text-xs leading-6 text-stellar-muted md:mx-auto md:mt-3 md:max-w-[13rem] md:text-[13px]">
              {{ step.description }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
