<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Hero from './Hero.vue'
import Mission from './Mission.vue'
import PlanList from './PlanList.vue'
import Safety from './Safety.vue'
import Flow from './Flow.vue'
import FAQ from './FAQ.vue'
import ContactForm from './ContactForm.vue'
import Footer from './Footer.vue'

const navItems = [
  { label: '私たちについて', href: '#mission' },
  { label: '旅行プラン', href: '#plans' },
  { label: '安全性', href: '#safety' },
  { label: '体験の流れ', href: '#flow' },
  { label: 'よくある質問', href: '#faq' },
]

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="min-h-screen bg-stellar-dark text-stellar-white">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-stellar-accent focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-stellar-dark"
    >
      本文へスキップ
    </a>

    <header class="sticky top-0 z-50 border-b border-white/10 bg-stellar-dark/85 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 lg:h-20 lg:px-8">
        <a href="#top" class="group flex shrink-0 items-center gap-3" aria-label="ステラーヴォヤージュ トップへ" @click="closeMenu">
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-stellar-accent/50 bg-stellar-accent/10 transition group-hover:bg-stellar-accent/20 lg:h-10 lg:w-10">
            <svg class="h-4 w-4 text-stellar-gold lg:h-5 lg:w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2.5 14.3 9.7 21.5 12l-7.2 2.3L12 21.5l-2.3-7.2L2.5 12l7.2-2.3z" fill="currentColor" />
            </svg>
          </span>
          <span>
            <span class="block font-display text-sm font-semibold tracking-wide text-stellar-white lg:text-base">ステラーヴォヤージュ</span>
            <span class="block font-display text-[9px] tracking-[0.3em] text-stellar-accent">STELLAR VOYAGE</span>
          </span>
        </a>

        <nav aria-label="メインナビゲーション" class="hidden items-center gap-8 lg:flex">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-xs font-medium tracking-wide text-stellar-muted transition hover:text-stellar-gold"
          >
            {{ item.label }}
          </a>
        </nav>

        <a
          href="#contact"
          class="hidden shrink-0 border border-stellar-accent px-5 py-2.5 text-xs font-bold tracking-wider text-stellar-gold transition hover:bg-stellar-accent hover:text-stellar-dark md:inline-flex"
        >
          資料請求
        </a>

        <button
          type="button"
          class="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-stellar-white transition hover:border-stellar-accent lg:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg v-if="!isMenuOpen" class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
          <svg v-else class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <Transition name="menu">
        <nav
          v-if="isMenuOpen"
          id="mobile-navigation"
          aria-label="モバイルナビゲーション"
          class="border-t border-white/10 bg-stellar-dark/95 lg:hidden"
        >
          <ul class="mx-auto max-w-7xl px-6 py-4 lg:px-8">
            <li v-for="item in navItems" :key="item.href">
              <a
                :href="item.href"
                class="block border-b border-white/5 py-4 text-sm text-stellar-muted transition hover:text-stellar-gold"
                @click="closeMenu"
              >
                {{ item.label }}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="mt-5 block bg-stellar-accent px-5 py-3.5 text-center text-sm font-bold text-stellar-dark"
                @click="closeMenu"
              >
                資料請求はこちら
              </a>
            </li>
          </ul>
        </nav>
      </Transition>
    </header>

    <main id="main">
      <Hero />
      <Mission />
      <PlanList />
      <Safety />
      <Flow />
      <FAQ />
      <ContactForm />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
