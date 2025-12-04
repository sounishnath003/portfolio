<template>
  <div class="relative min-h-screen bg-gray-50 dark:bg-zinc-900 flex flex-col items-center justify-center p-4 overflow-hidden">
    <div class="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
      <div class="absolute inset-0 bg-grid-geometric animate-grid-move"></div>
    </div>
    <div class="relative z-10 w-full max-w-md mx-auto">
      <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }" :transition="{ duration: 0.5 }">
        <img :src="Portfolio.aboutPage.photo" alt="about#photo" loading="lazy"
          class="rounded-full w-32 h-32 mx-auto mb-4" />
      </Motion>
      <Motion :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.2, duration: 0.5 }">
        <h1 class="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100">{{ Portfolio.fullname }}</h1>
      </Motion>
      <Motion :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.3, duration: 0.5 }">
        <p class="text-center text-zinc-600 dark:text-zinc-400 mt-2">{{ Portfolio.sarcasticBio }}</p>
      </Motion>
      <div class="space-y-4 mt-8">
        <Motion key="portfoliolink" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.5 * 0.5, duration: 0.3 }">
          <router-link to="/"
            class="text-white bg-indigo-700 dark:bg-indigo-600 shine-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100 w-full">
            Portfolio 👋
          </router-link>
        </Motion>
        <Motion v-for="(link, index) in Portfolio.socialLinks" :key="link.name"
          :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.5 + index * 0.1, duration: 0.3 }">
          <a :href="link.href" target="_blank"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100 w-full">
            {{ link.name }}
          </a>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Portfolio } from '../portfolioDatabase';
import { Motion } from "motion-v";
</script>

<style scoped>
@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(50px, 50px);
  }
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

.animate-grid-move {
  animation: gridMove 20s linear infinite;
}

.shine-button {
  position: relative;
  overflow: hidden;
}

.shine-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.2);
  background: linear-gradient(to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }

  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

</style>
