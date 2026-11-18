<script setup>
import { reactive, ref } from 'vue'

const planOptions = ['低軌道体験', '月周遊', '火星移住準備', 'まだ決まっていない']

const form = reactive({
  name: '',
  email: '',
  phone: '',
  plan: '',
  message: '',
})

const errors = reactive({})
const isSubmitted = ref(false)

const clearErrors = () => {
  Object.keys(errors).forEach((key) => delete errors[key])
}

const validate = () => {
  const nextErrors = {}

  if (!form.name.trim()) nextErrors.name = '氏名を入力してください。'
  if (!form.email.trim()) {
    nextErrors.email = 'メールアドレスを入力してください。'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    nextErrors.email = 'メールアドレスの形式を確認してください。'
  }
  if (!form.plan) nextErrors.plan = '興味のあるプランを選択してください。'

  clearErrors()
  Object.assign(errors, nextErrors)
  return Object.keys(nextErrors).length === 0
}

const handleSubmit = () => {
  // デモモード：フォームは disabled となっており、データは外部に送信されません。
  // 実装時に disabled を外し、ここに送信処理を記述します。
  console.log('[Stellar Voyage] 資料請求受信（デモモード・送信無効）:', { ...form })

  // ジョーク演出：準備中メッセージ（※ これはジョークです）
  alert(
    '申し訳ございません、このフォームは現在準備中です。\n' +
    '本サービスの受付開始は 2100 年を予定しております。\n' +
    '（※ これはジョークです。データは外部に送信されていません。）'
  )
}
</script>

<template>
  <section id="contact" aria-labelledby="contact-title" class="relative overflow-hidden py-24 md:py-32">
    <div class="pointer-events-none absolute inset-0 bg-nebula opacity-70" aria-hidden="true" />
    <div class="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden="true" />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <!-- 導入文 -->
        <div class="lg:col-span-5">
          <p class="font-display text-xs font-medium tracking-[0.34em] text-stellar-accent">GET IN TOUCH</p>
          <h2 id="contact-title" class="mt-5 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
            次の一歩は、<br class="hidden sm:block" />
            <span class="text-stellar-gold">ここから。</span>
          </h2>
          <p class="mt-7 max-w-md text-sm leading-8 text-stellar-muted">
            資料請求やご相談はこちらから。専門のアドバイザーが、あなたに合った旅の設計についてご案内します。
            ご入力いただいた内容は、資料のご送付とご連絡のみに利用します。
          </p>

          <dl class="mt-10 space-y-5 border-l border-stellar-accent/40 pl-6">
            <div>
              <dt class="text-[11px] tracking-widest text-stellar-muted">お問い合わせ窓口</dt>
              <dd class="mt-1 font-display text-lg text-stellar-white">03-XXXX-XXXX<span class="ml-2 text-xs text-stellar-muted">（架空）</span></dd>
            </div>
            <div>
              <dt class="text-[11px] tracking-widest text-stellar-muted">受付時間</dt>
              <dd class="mt-1 text-sm text-stellar-white">平日 10:00〜18:00（架空）</dd>
            </div>
          </dl>
        </div>

        <!-- フォーム -->
        <div class="lg:col-span-7">
          <form
            novalidate
            class="relative border border-white/10 bg-stellar-navy/80 p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] backdrop-blur-sm md:p-9"
            aria-labelledby="contact-title"
            @submit.prevent="handleSubmit"
          >
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label class="label" for="contact-name">氏名 <span class="text-stellar-accent">*</span></label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  class="field"
                  :class="{ 'field--error': errors.name }"
                  type="text"
                  name="name"
                  autocomplete="name"
                  placeholder="山田 太郎"
                  :aria-invalid="Boolean(errors.name)"
                  :aria-describedby="errors.name ? 'contact-name-error' : undefined"
                  @input="isSubmitted = false"
                />
                <p v-if="errors.name" id="contact-name-error" class="error" role="alert">{{ errors.name }}</p>
              </div>

              <div>
                <label class="label" for="contact-email">メールアドレス <span class="text-stellar-accent">*</span></label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  class="field"
                  :class="{ 'field--error': errors.email }"
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  :aria-invalid="Boolean(errors.email)"
                  :aria-describedby="errors.email ? 'contact-email-error' : undefined"
                  @input="isSubmitted = false"
                />
                <p v-if="errors.email" id="contact-email-error" class="error" role="alert">{{ errors.email }}</p>
              </div>

              <div>
                <label class="label" for="contact-phone">電話番号</label>
                <input
                  id="contact-phone"
                  v-model="form.phone"
                  class="field"
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                  placeholder="03-1234-5678"
                  @input="isSubmitted = false"
                />
              </div>

              <div>
                <label class="label" for="contact-plan">興味のあるプラン <span class="text-stellar-accent">*</span></label>
                <select
                  id="contact-plan"
                  v-model="form.plan"
                  class="field appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10"
                  :class="{ 'field--error': errors.plan }"
                  style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%23c5a059' stroke-width='1.5'%3E%3Cpath d='m5 7.5 5 5 5-5'/%3E%3C/svg%3E&quot;)"
                  name="plan"
                  :aria-invalid="Boolean(errors.plan)"
                  :aria-describedby="errors.plan ? 'contact-plan-error' : undefined"
                  @change="isSubmitted = false"
                >
                  <option value="" disabled class="bg-stellar-navy">選択してください</option>
                  <option v-for="option in planOptions" :key="option" :value="option" class="bg-stellar-navy">
                    {{ option }}
                  </option>
                </select>
                <p v-if="errors.plan" id="contact-plan-error" class="error" role="alert">{{ errors.plan }}</p>
              </div>

              <div class="sm:col-span-2">
                <label class="label" for="contact-message">お問い合わせ内容</label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  class="field min-h-[140px] resize-y leading-7"
                  name="message"
                  rows="5"
                  placeholder="ご質問やご希望の旅程などをお聞かせください。"
                  @input="isSubmitted = false"
                />
              </div>
            </div>

            <div class="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-[11px] leading-5 text-stellar-muted">
                <span class="text-stellar-accent">*</span> は必須項目です。<br />
                デモサイトのため、送信内容は外部へ送られません。
              </p>
              <button
                type="submit"
                class="group inline-flex shrink-0 items-center justify-center gap-3 bg-stellar-accent px-8 py-4 text-sm font-bold tracking-wider text-stellar-dark transition hover:bg-stellar-gold focus-visible:bg-stellar-gold"
              >
                資料を請求する
                <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>

            <p
              v-if="isSubmitted"
              class="mt-5 border-l-2 border-stellar-accent bg-stellar-accent/10 px-4 py-3 text-sm text-stellar-gold"
              role="status"
              aria-live="polite"
            >
              ありがとうございます。資料請求を受け付けました（デモのため実際の送信は行われていません）。
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.label {
  @apply mb-2 block text-xs font-medium tracking-wider text-stellar-white/90;
}

.field {
  @apply w-full rounded-sm border border-white/15 bg-stellar-dark/70 px-4 py-3.5 text-sm text-stellar-white transition placeholder:text-stellar-muted/60 focus:border-stellar-accent focus:outline-none focus:ring-1 focus:ring-stellar-accent;
}

.field--error {
  @apply border-red-400/80;
}

.error {
  @apply mt-2 text-xs text-red-300;
}
</style>
