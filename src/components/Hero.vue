<script setup>
import { ref } from 'vue'

const heroImagePath = '/images/hero-main.webp'
const heroImageFailed = ref(false)
</script>

<template>
  <section id="top" aria-labelledby="hero-title" class="relative flex min-h-[100svh] items-center overflow-hidden bg-stellar-dark pb-24 pt-28 md:pb-28">
    <!-- 背景レイヤー：画像が無いでも星雲と星野で世界観が成立する -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute inset-0 bg-nebula" />
      <div class="absolute inset-0 bg-starfield opacity-80" />
      <img
        v-if="!heroImageFailed"
        :src="heroImagePath"
        alt=""
        class="h-full w-full object-cover object-center opacity-55"
        @error="heroImageFailed = true"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-stellar-dark via-stellar-dark/85 to-stellar-dark/30" />
      <div class="absolute inset-0 bg-gradient-to-t from-stellar-dark via-transparent to-stellar-dark/70" />
    </div>

    <!-- 軌道を描く装飾 -->
    <div class="pointer-events-none absolute -right-52 top-1/4 hidden h-[36rem] w-[36rem] animate-float items-center justify-center rounded-full border border-stellar-gold/15 md:flex" aria-hidden="true">
      <div class="h-[26rem] w-[26rem] rounded-full border border-dashed border-stellar-accent/20" />
      <div class="absolute h-40 w-40 rounded-full bg-gradient-to-br from-stellar-accent/30 via-stellar-navy/60 to-transparent blur-xl" />
      <div class="absolute right-[16%] top-[12%] h-3 w-3 rounded-full bg-stellar-gold shadow-[0_0_20px_6px_rgba(232,212,168,0.5)]" />
    </div>

    <div class="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-16 lg:grid-cols-12">
        <div class="lg:col-span-8">
          <p class="flex items-center gap-4 animate-fade-in-up opacity-0 font-display text-[11px] font-medium tracking-[0.32em] text-stellar-accent">
            <span class="h-px w-10 bg-stellar-accent" aria-hidden="true" />
            COMMERCIAL SPACE TRAVEL / 2042
          </p>

          <h1
            id="hero-title"
            class="mt-8 animate-fade-in-up opacity-0 text-[clamp(2.5rem,7vw,5.25rem)] font-semibold leading-[1.18] tracking-tight text-balance [animation-delay:120ms]"
          >
            宇宙は、<br />
            まだ誰も見たことがない<br class="hidden sm:block" />
            <span class="relative inline-block text-stellar-gold">
              景色へ。
              <svg class="absolute -bottom-2 left-0 h-2 w-full text-stellar-accent/70" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <path d="M1 6C50 2 150 2 199 6" stroke="currentColor" stroke-width="2" />
              </svg>
            </span>
          </h1>

          <p class="mt-9 max-w-xl animate-fade-in-up opacity-0 text-sm leading-9 text-stellar-muted [animation-delay:240ms] md:text-base">
            低軌道から月、そして火星へ。ステラーヴォヤージュは、宇宙を「遠い夢」から「選べる旅」へと変える、架空の宇宙旅行会社です。
          </p>

          <div class="mt-11 flex animate-fade-in-up flex-col gap-4 opacity-0 [animation-delay:360ms] sm:flex-row sm:items-center">
            <a
              href="#contact"
              class="group inline-flex items-center justify-center gap-3 border border-stellar-accent bg-stellar-accent px-9 py-4 text-sm font-bold tracking-wider text-stellar-dark transition duration-300 hover:bg-stellar-gold hover:shadow-[0_0_40px_-10px_rgba(232,212,168,0.8)]"
            >
              資料請求
              <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              aria-label="ご予約について相談する"
              class="inline-flex items-center justify-center gap-3 border border-white/25 px-9 py-4 text-sm font-medium tracking-wider text-stellar-white transition duration-300 hover:border-stellar-gold hover:text-stellar-gold"
            >
              ご予約について
            </a>
          </div>

          <dl class="mt-16 flex animate-fade-in-up flex-wrap gap-x-10 gap-y-5 opacity-0 [animation-delay:480ms]">
            <div>
              <dt class="font-display text-[10px] tracking-[0.24em] text-stellar-muted">PROGRAMS</dt>
              <dd class="mt-1 font-display text-xl text-stellar-gold">03 <span class="text-xs text-stellar-muted">COURSES</span></dd>
            </div>
            <div>
              <dt class="font-display text-[10px] tracking-[0.24em] text-stellar-muted">ALTITUDE</dt>
              <dd class="mt-1 font-display text-xl text-stellar-gold">400 <span class="text-xs text-stellar-muted">KM / LEO</span></dd>
            </div>
            <div>
              <dt class="font-display text-[10px] tracking-[0.24em] text-stellar-muted">ESTABLISHED</dt>
              <dd class="mt-1 font-display text-xl text-stellar-gold">2042 <span class="text-xs text-stellar-muted">FICTIONAL</span></dd>
            </div>
          </dl>
        </div>

        <!-- デスクトップ用のテレメトリ表示 -->
        <div class="hidden lg:col-span-4 lg:block">
          <div class="ml-auto max-w-xs border-l border-stellar-accent/40 pl-6">
            <p class="font-display text-[10px] tracking-[0.3em] text-stellar-accent">SYSTEM STATUS</p>
            <p class="mt-4 font-display text-2xl font-light text-stellar-white">ALL SYSTEMS<br />NOMINAL</p>
            <p class="mt-4 text-xs leading-6 text-stellar-muted">次の出発まで、準備は着々と。あなたの席が、宇宙を待っています。</p>
            <div class="mt-7 space-y-2" aria-hidden="true">
              <div class="h-px w-full bg-stellar-accent/20" />
              <div class="h-px w-3/4 bg-stellar-accent/20" />
              <div class="h-px w-1/2 bg-stellar-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- スクロールの案内 -->
    <div class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden="true">
      <span class="font-display text-[9px] tracking-[0.3em] text-stellar-muted">SCROLL</span>
      <span class="h-10 w-px animate-pulse bg-gradient-to-b from-stellar-accent to-transparent" />
    </div>
  </section>
</template>
