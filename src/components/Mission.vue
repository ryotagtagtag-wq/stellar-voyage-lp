<script setup>
const principles = [
  {
    number: '01',
    title: '宇宙を、もっと身近に。',
    description:
      '宇宙旅行を一部の人の特別な偉業ではなく、人生の選択肢の一つに。私たちはそのための技術と体験の設計を続けます。',
  },
  {
    number: '02',
    title: '安全は、結果ではなく前提。',
    description:
      'どんなに魅力的な景色も、安心して帰ってこそ意味があります。設計・訓練・運用のすべてに、妥協のない基準を適用します。',
  },
  {
    number: '03',
    title: '見た者だけが、語れる未来。',
    description:
      '宇宙から地球を眺める体験は、私たちの価値観を静かに変えます。その変化を、一人でも多くの人と共有したいと考えています。',
  },
]
</script>

<template>
  <section id="mission" aria-labelledby="mission-title" class="relative overflow-hidden border-t border-white/10 bg-stellar-navy/30 py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0 bg-starfield opacity-30" aria-hidden="true" />
    <div class="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-stellar-accent/10 blur-3xl" aria-hidden="true" />
    <div
      class="pointer-events-none absolute right-[6%] top-20 hidden h-72 w-72 rounded-full border border-stellar-gold/10 lg:block"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute right-[12%] top-32 hidden h-48 w-48 rounded-full border border-dashed border-stellar-accent/15 lg:block"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <!-- 大見出し -->
        <div class="lg:col-span-5">
          <p class="font-display text-xs font-medium tracking-[0.34em] text-stellar-accent">OUR MISSION</p>
          <h2 id="mission-title" class="mt-6 text-3xl font-bold leading-[1.35] text-balance md:text-4xl lg:text-[2.75rem]">
            宇宙は、<br />
            <span class="text-stellar-gold">特別なもの</span><br />
            ではなくなる。
          </h2>
          <p class="mt-8 max-w-md text-sm leading-9 text-stellar-muted">
            ステラーヴォヤージュは、誰もが空を見上げるように宇宙を夢見られる時代を目指す、架空の宇宙旅行会社です。
            技術の進歩を体験へと翻訳し、生命の尊さを再発見する旅をお届けします。
          </p>
          <div class="mt-10 flex items-center gap-4">
            <span class="h-px w-12 bg-stellar-accent" aria-hidden="true" />
            <span class="font-display text-[10px] tracking-[0.3em] text-stellar-muted">BEYOND THE KNOWN</span>
          </div>
        </div>

        <!-- 3原則：少しずつずらした非対称な配置 -->
        <div class="lg:col-span-7 lg:pt-6">
          <ul class="space-y-10 md:space-y-12">
            <li
              v-for="principle in principles"
              :key="principle.number"
              class="border-l border-stellar-accent/40 pl-6 md:pl-8"
              :class="{ 'lg:ml-6': principle.number === '02', 'lg:ml-12': principle.number === '03' }"
            >
              <p class="font-display text-xs tracking-[0.3em] text-stellar-accent">{{ principle.number }}</p>
              <h3 class="mt-3 text-xl font-bold text-stellar-white md:text-2xl">{{ principle.title }}</h3>
              <p class="mt-4 max-w-xl text-sm leading-8 text-stellar-muted">{{ principle.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
