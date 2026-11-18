<script setup>
import { ref } from 'vue'

const safeguards = [
  {
    number: '01',
    title: '医療チェック',
    description: '出発前・滞在中・帰還後の3段階で、専任医師が健康状態を継続的にモニタリングします。',
  },
  {
    number: '02',
    title: 'G耐性トレーニング',
    description: '打ち上げと再突入に耐えるため、段階的な遠心訓練で身体をしっかり準備します。',
  },
  {
    number: '03',
    title: '緊急時対応',
    description: '多重化した生命維持装置と緊急帰還モジュールを搭載。地上の運用チームが24時間監視します。',
  },
]

const trainingImagePath = '/images/safety-training.webp'
const imageFailed = ref(false)
</script>

<template>
  <section id="safety" aria-labelledby="safety-title" class="relative overflow-hidden py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0 bg-nebula opacity-60" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <!-- 画像 -->
        <div class="lg:col-span-6">
          <div class="relative aspect-[4/3] overflow-hidden border border-white/10 bg-gradient-to-br from-stellar-navy via-[#1c2b4a] to-stellar-dark lg:aspect-[4/5]">
            <div class="pointer-events-none absolute inset-0 bg-starfield opacity-50" aria-hidden="true" />
            <div
              class="pointer-events-none absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full border border-stellar-accent/20"
              aria-hidden="true"
            />
            <img
              v-if="!imageFailed"
              :src="trainingImagePath"
              alt="訓練施設でトレーニングに取り組む宇宙飛行士のイメージ"
              loading="lazy"
              class="relative h-full w-full object-cover opacity-85"
              @error="imageFailed = true"
            />
            <div v-else class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <svg class="h-24 w-24 text-stellar-accent/50" viewBox="0 0 100 100" fill="none">
                <path d="M50 12 82 25v24c0 20-13 33-32 39-19-6-32-19-32-39V25z" stroke="currentColor" stroke-width="2" />
                <path d="m37 50 9 9 18-19" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-stellar-dark via-stellar-dark/10 to-transparent" aria-hidden="true" />

            <!-- コーナーブラケット -->
            <span class="absolute left-4 top-4 h-8 w-8 border-l border-t border-stellar-gold/60" aria-hidden="true" />
            <span class="absolute right-4 top-4 h-8 w-8 border-r border-t border-stellar-gold/60" aria-hidden="true" />
            <span class="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-stellar-gold/60" aria-hidden="true" />
            <span class="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-stellar-gold/60" aria-hidden="true" />

            <div class="absolute bottom-8 left-6 right-6 flex items-end justify-between gap-4 md:left-9 md:right-9">
              <div>
                <p class="font-display text-[10px] tracking-[0.3em] text-stellar-accent">SAFETY FIRST, ALWAYS</p>
                <p class="mt-2 font-display text-xl font-medium text-stellar-white md:text-2xl">安心は、設計される。</p>
              </div>
              <p class="hidden shrink-0 text-right font-display text-3xl font-semibold text-stellar-gold sm:block">
                99.8<span class="text-base">%</span>
                <span class="mt-1 block text-[9px] tracking-widest text-stellar-muted">訓練修了率</span>
              </p>
            </div>
          </div>
        </div>

        <!-- 本文 -->
        <div class="lg:col-span-6">
          <p class="font-display text-xs font-medium tracking-[0.34em] text-stellar-accent">SAFETY &amp; TRAINING</p>
          <h2 id="safety-title" class="mt-5 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
            どんな時も、<br />
            <span class="text-stellar-gold">帰れる場所</span>を持つ。
          </h2>
          <p class="mt-7 max-w-xl text-sm leading-8 text-stellar-muted">
            宇宙では、准备工作の精度がそのまま安心につながります。私たちは身体と装置、そして運用の3つの層から安全を設計しています。
          </p>

          <ul class="mt-10 divide-y divide-white/10 border-y border-white/10">
            <li v-for="item in safeguards" :key="item.number" class="grid grid-cols-[2.5rem_1fr] gap-4 py-6 md:grid-cols-[3rem_1fr] md:gap-6">
              <span class="font-display text-sm text-stellar-accent">{{ item.number }}</span>
              <div>
                <h3 class="text-lg font-bold text-stellar-white">{{ item.title }}</h3>
                <p class="mt-2 text-sm leading-7 text-stellar-muted">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
