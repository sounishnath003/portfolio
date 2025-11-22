<template>
  <section class="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
    <!-- Background Pattern -->
    <div class="absolute inset-0 -z-10 overflow-hidden opacity-20 dark:opacity-10">
      <div class="absolute inset-0 bg-grid-geometric animate-grid-move"></div>
    </div>

    <!-- Main Content Card -->
    <div
      class="relative group overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 sm:p-12 transition-all duration-300 hover:border-blue-400/50 dark:hover:border-yellow-400/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-yellow-500/10 fade-in-up">
      <!-- Gradient Background Effect -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      </div>

      <!-- Animated Border Glow -->
      <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        "></div>

      <!-- Content -->
      <div class="relative z-10 text-center">
        <h2
          class="text-4xl sm:text-5xl font-semibold mb-4 text-gray-900 dark:text-gray-100 transition-all duration-300 group-hover:scale-105">
          Get in touch
        </h2>
        <p class="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Interested in working together or want to know more?<br />
          <a href="/pages/about"
            class="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-300 font-medium transition-colors duration-300 inline-flex items-center gap-2 group/link">
            Learn more about me
            <svg class="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          or connect via social links below!
        </p>

        <!-- Social Links Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          <a v-for="(link, index) in Portfolio.socialLinks" :key="index" :href="link.href" target="_blank"
            rel="noopener noreferrer"
            class="group/social relative overflow-hidden rounded-xl border border-gray-200/50 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 transition-all duration-300 hover:border-blue-400/50 dark:hover:border-yellow-400/50 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-yellow-500/10 hover:-translate-y-1 fade-in-up"
            :style="{ animationDelay: `${0.1 + index * 0.1}s` }">
            <!-- Gradient Background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300">
            </div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col items-center gap-2">
              <div
                class="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center transition-all duration-300 group-hover/social:scale-110 group-hover/social:bg-blue-100 dark:group-hover/social:bg-yellow-900/30">
                <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${link.iconName}.svg`"
                  class="w-5 h-5 dark:invert transition-transform duration-300 group-hover/social:scale-110"
                  :alt="link.iconName" />
              </div>
              <span
                class="text-sm font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover/social:text-blue-600 dark:group-hover/social:text-yellow-400">
                {{ link.name }}
              </span>
            </div>

            <!-- Hover Arrow -->
            <svg
              class="absolute bottom-2 right-2 w-4 h-4 text-blue-600 dark:text-yellow-400 opacity-0 group-hover/social:opacity-100 transition-all duration-300 group-hover/social:translate-x-1 group-hover/social:-translate-y-1"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Portfolio } from "../portfolioDatabase";
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(50px, 50px);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-grid-move {
  animation: gridMove 20s linear infinite;
}

.bg-grid-geometric {
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(45deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
    linear-gradient(-45deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px, 20px 20px, 20px 20px;
}

.dark .bg-grid-geometric {
  background-image:
    linear-gradient(to right, rgba(147, 197, 253, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(147, 197, 253, 0.15) 1px, transparent 1px),
    linear-gradient(45deg, rgba(196, 181, 253, 0.1) 1px, transparent 1px),
    linear-gradient(-45deg, rgba(196, 181, 253, 0.1) 1px, transparent 1px);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {

  .fade-in-up,
  .animate-grid-move {
    animation: none;
    opacity: 1;
  }
}
</style>
