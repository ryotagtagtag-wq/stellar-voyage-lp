<script setup>
import PlanCard from './PlanCard.vue'

const plans = [
  {
    name: '低軌道体験',
    nameEn: 'LOW ORBIT EXPERIENCE',
    price: '¥28,000,000〜',
    duration: '3日間',
    capacity: '6名',
    features: ['地球周回軌道を約6時間滞在', '無重力浮遊と窓辺の展望', '専任インストラクターが同伴', '約1か月の事前訓練'],
    image: '/images/plan-low-orbit.webp',
    featured: true,
  },
  {
    name: '月周遊',
    nameEn: 'LUNAR FLYBY',
    price: '¥180,000,000〜',
    duration: '10日間',
    capacity: '4名',
    features: ['月の裏側を周回する航路', '月面を間近に望む展望', 'ベテランパイロットが操縦', '約3か月の長期訓練'],
    image: '/images/plan-moon.webp',
    featured: false,
  },
  {
    name: '火星移住準備',
    nameEn: 'MARS PREPARATION',
    price: '¥450,000,000〜',
    duration: '約24か月',
    capacity: '2名',
    features: ['長期宇宙生活の実践訓練', '閉鎖生態系モジュールで実習', '専任医師が常に同行', '移住計画の策定を支援'],
    image: '/images/plan-mars.webp',
    featured: false,
  },
]
</script>

<template>
  <section id="plans" aria-labelledby="plans-title" class="relative overflow-hidden py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0 bg-nebula opacity-40" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="font-display text-xs font-medium tracking-[0.34em] text-stellar-accent">FLIGHT PROGRAMS</p>
          <h2 id="plans-title" class="mt-5 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
            あなたの宇宙を、<span class="text-stellar-gold">選ぶ。</span>
          </h2>
        </div>
        <p class="max-w-md text-sm leading-8 text-stellar-muted md:text-right">
          軌道をめぐる短い旅から、次世代の暮らしを見据えた長期プログラムまで。
          目的に合わせて、3つの道筋をご用意しました。
        </p>
      </div>

      <ul class="mt-14 grid gap-7 md:grid-cols-3 md:items-stretch md:gap-6 lg:mt-16 lg:gap-8">
        <li v-for="(plan, index) in plans" :key="plan.name" class="h-full">
          <PlanCard v-bind="plan" :index="index" />
        </li>
      </ul>

      <p class="mt-10 text-center text-[11px] tracking-wide text-stellar-muted/70">
        ※ プラン内容・料金・所要時間はすべて架空のものです。
      </p>
    </div>
  </section>
</template>
