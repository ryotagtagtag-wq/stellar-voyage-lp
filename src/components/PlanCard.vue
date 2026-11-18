<script setup>
import { ref } from 'vue'

defineProps({
  name: { type: String, required: true },
  nameEn: { type: String, required: true },
  price: { type: String, required: true },
  duration: { type: String, required: true },
  capacity: { type: String, required: true },
  features: { type: Array, required: true },
  image: { type: String, required: true },
  featured: { type: Boolean, default: false },
  index: { type: Number, default: 0 },
})

const imageFailed = ref(false)
</script>

<template>
  <article
    :aria-labelledby="`plan-title-${index}`"
    class="group relative flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-stellar-navy/70 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-stellar-accent/60 hover:shadow-[0_24px_70px_-30px_rgba(197,160,89,0.55)] md:scale-[1.015] md:hover:scale-[1.03]"
  >
    <!-- 画像エリア：読み込み失敗時は轨道を描いたグラデーションが残留する -->
    <div class="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-stellar-navy via-[#1c2b4a] to-stellar-dark">
      <div class="pointer-events-none absolute inset-0 bg-starfield opacity-60" aria-hidden="true" />
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stellar-accent/25"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] rounded-full border border-dashed border-stellar-gold/15"
        aria-hidden="true"
      />
      <img
        v-if="!imageFailed"
        :src="image"
        :alt="`${name}のイメージ`"
        loading="lazy"
        class="relative h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
        @error="imageFailed = true"
      />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-stellar-navy via-transparent to-transparent" aria-hidden="true" />

      <span
        v-if="featured"
        class="absolute right-4 top-4 rounded-full border border-stellar-accent/60 bg-stellar-dark/80 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-stellar-gold backdrop-blur"
      >
        人気 No.1
      </span>
      <span class="absolute bottom-3 left-5 font-display text-5xl font-semibold text-white/10" aria-hidden="true">
        0{{ index + 1 }}
      </span>
    </div>

    <div class="flex flex-1 flex-col p-6 md:p-7">
      <p class="font-display text-[11px] font-medium tracking-[0.3em] text-stellar-accent">{{ nameEn }}</p>
      <h3 :id="`plan-title-${index}`" class="mt-2 text-2xl font-bold text-stellar-white">{{ name }}</h3>

      <div class="mt-6">
        <p class="text-xs tracking-widest text-stellar-muted">料金（税込）</p>
        <p class="mt-1 font-display text-2xl font-semibold text-stellar-gold">{{ price }}</p>
      </div>

      <dl class="mt-5 grid grid-cols-2 gap-4 border-y border-white/10 py-5">
        <div>
          <dt class="text-[11px] tracking-wider text-stellar-muted">所要時間</dt>
          <dd class="mt-1 text-sm font-medium text-stellar-white">{{ duration }}</dd>
        </div>
        <div>
          <dt class="text-[11px] tracking-wider text-stellar-muted">定員</dt>
          <dd class="mt-1 text-sm font-medium text-stellar-white">{{ capacity }}</dd>
        </div>
      </dl>

      <ul class="mt-5 space-y-3" :aria-label="`${name}の特徴`">
        <li v-for="feature in features" :key="feature" class="flex items-start gap-3 text-sm leading-relaxed text-stellar-muted">
          <svg class="mt-0.5 h-4 w-4 shrink-0 text-stellar-accent" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="m4 10 4 4 8-8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>

      <a
        href="#contact"
        class="mt-auto inline-flex items-center justify-between gap-3 pt-7 text-sm font-medium text-stellar-gold transition group-hover:text-stellar-white"
        :aria-label="`${name}について資料請求する`"
      >
        <span class="border-b border-stellar-accent/40 pb-1 group-hover:border-stellar-accent">このプランを詳しく</span>
        <svg class="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </article>
</template>
