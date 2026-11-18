<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: '宇宙旅行に年齢や健康上の制限はありますか？',
    answer:
      '20歳以上で、医師による健康診断に合格することが条件です。心臓や呼吸器の疾患、高血圧などがある場合は事前にご相談ください。年齢の上限はありませんが、プランごとに求められる身体条件が異なります。',
  },
  {
    question: '訓練はどのくらいの期間が必要ですか？',
    answer:
      '低軌道体験は出発の約1か月間、月周遊は約3か月間、火星移住準備は約18か月間のプログラムを用意しています。いずれも専門のインストラクターが個々の体力に合わせて進めます。',
  },
  {
    question: '料金には何が含まれていますか？',
    answer:
      '訓練費、宇宙船の座席、宇宙服の貸与、食事、滞在費、打ち上げ前後の送迎を含みます。宇宙空間からの写真データや搭乗記念品も料金内です。別途、健康診断費と保険料が必要となる場合があります。',
  },
  {
    question: 'キャンセルや日程変更はできますか？',
    answer:
      '出発の90日前までであれば、手数料なしでキャンセルまたは別の日程への変更が可能です。それ以降は訓練の予約状況に応じた規定が適用されます。詳しくは資料をご請求ください。',
  },
  {
    question: '宇宙でも通信は使えますか？',
    answer:
      '低軌道では衛星回線を通じて音声通話とデータ通信が可能です。月周遊では地球からの遅延が約1.3秒発生するため、リアルタイムのビデオ通話ではなくメッセージ中心の通信となります。',
  },
  {
    question: '万が一、事故や故障が起きた場合はどうなりますか？',
    answer:
      '宇宙船には多重の冗長系と緊急帰還モジュールを搭載しています。地上の運用チームが24時間体制で監視し、医療チームが常に待機します。訓練では緊急時の手順を繰り返し確認しますので、ご安心ください。',
  },
]

const openIndex = ref(0)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="faq" aria-labelledby="faq-title" class="relative py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0 bg-starfield opacity-30" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <p class="font-display text-xs font-medium tracking-[0.34em] text-stellar-accent">FAQ</p>
          <h2 id="faq-title" class="mt-5 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
            よくある<span class="text-stellar-gold">ご質問</span>
          </h2>
          <p class="mt-6 max-w-sm text-sm leading-8 text-stellar-muted">
            宇宙旅行について、よく寄せられる質問をまとめました。ここにないご質問も、お気軽にお問い合わせください。
          </p>
          <div class="mt-10 hidden lg:block" aria-hidden="true">
            <div class="h-32 w-32 rounded-full border border-dashed border-stellar-accent/25" />
            <div class="ml-10 mt-4 h-16 w-16 rounded-full border border-stellar-accent/15" />
          </div>
        </div>

        <div class="lg:col-span-8">
          <ul class="border-t border-white/10">
            <li v-for="(faq, index) in faqs" :key="faq.question" class="border-b border-white/10">
              <h3>
                <button
                  :id="`faq-question-${index}`"
                  type="button"
                  class="group flex w-full items-center gap-4 py-6 text-left transition hover:text-stellar-gold md:gap-6"
                  :aria-expanded="openIndex === index"
                  :aria-controls="`faq-answer-${index}`"
                  @click="toggle(index)"
                >
                  <span class="font-display text-xs tracking-widest text-stellar-accent">Q{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="flex-1 text-sm font-medium leading-relaxed text-stellar-white transition group-hover:text-stellar-gold md:text-base">
                    {{ faq.question }}
                  </span>
                  <span
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 transition duration-300"
                    :class="openIndex === index ? 'rotate-45 border-stellar-accent text-stellar-gold' : 'text-stellar-muted group-hover:border-stellar-accent/60'"
                    aria-hidden="true"
                  >
                    <svg class="h-3.5 w-3.5" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
                    </svg>
                  </span>
                </button>
              </h3>
              <Transition name="faq">
                <div
                  v-show="openIndex === index"
                  :id="`faq-answer-${index}`"
                  role="region"
                  :aria-labelledby="`faq-question-${index}`"
                  class="overflow-hidden"
                >
                  <p class="pb-7 pl-9 pr-4 text-sm leading-8 text-stellar-muted md:pl-12 md:text-[15px]">
                    {{ faq.answer }}
                  </p>
                </div>
              </Transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
