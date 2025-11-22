<template>
  <div class="relative w-full py-16 sm:py-24 lg:py-32">
    <!-- Animated Background Patterns -->
    <div class="absolute inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-20">
      <!-- Geometric Grid Pattern -->
      <div class="absolute inset-0 bg-grid-geometric animate-grid-move"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
      <!-- Greeting with subtle animation -->
      <div class="mb-8 flex justify-center fade-in-up" style="animation-delay: 0.05s">
        <div class="text-xl font-medium text-gray-700 dark:text-gray-300">
          <span class="inline-block animate-wave-subtle">👋</span>, I'm
          <span
            class="text-blue-700 dark:text-yellow-400 font-semibold text-2xl transition-all duration-300 hover:scale-105 inline-block cursor-default">
            {{ Portfolio.fullname }}.
          </span>
        </div>
      </div>

      <div class="text-center">
        <!-- Main heading with smooth transition -->
        <div class="fade-in-up" style="animation-delay: 0.1s" :key="attributeValue">
          <h1
            class="text-6xl font-semibold tracking-tight text-balance sm:text-7xl text-gray-900 dark:text-white transition-all duration-300 ease-out">
            {{ attributeValue }}
          </h1>
        </div>

        <!-- Bio with fade-in -->
        <div class="fade-in-up" style="animation-delay: 0.2s">
          <p class="mt-8 font-medium text-pretty text-gray-600 dark:text-gray-300 leading-relaxed"
            v-html="Portfolio.profileBio"></p>
        </div>

        <!-- CTA Buttons with micro-interactions -->
        <div class="mt-10 flex items-center justify-center gap-x-6 fade-in-up" style="animation-delay: 0.3s">
          <a :href="Portfolio.resumeLink" target="_blank" class="group relative inline-block">
            <div class="relative transition-all duration-200 group-hover:scale-105 group-active:scale-95">
              <PrimaryButton text="Download Resume" buttonType="Download" color="blue" />
            </div>
          </a>
          <a href="#/pages/work-experience"
            class="group relative text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 inline-flex items-center gap-2">
            <span>Interested? Know more</span>
            <span aria-hidden="true" class="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      <!-- WorkAt section -->
      <div class="text-center my-16 fade-in-up" style="animation-delay: 0.4s">
        <WorkAt />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import PrimaryButton from "../../components/PrimaryButton.vue";
import WorkAt from "./WorkAt.vue";
import { Portfolio } from "../portfolioDatabase";

let intervalId: number | null | undefined = null;
let attributeIndex = 0;
let attributeValue = ref(Portfolio.attributes[attributeIndex]);

onMounted(() => {
  intervalId = window.setInterval(() => {
    attributeIndex = (attributeIndex + 1) % Portfolio.attributes.length;
    attributeValue.value = Portfolio.attributes[attributeIndex];
  }, 2000); // Faster transitions
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes waveSubtle {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  25% {
    transform: translateY(-3px) rotate(12deg);
  }

  50% {
    transform: translateY(-2px) rotate(-8deg);
  }

  75% {
    transform: translateY(-1px) rotate(5deg);
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
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-wave-subtle {
  animation: waveSubtle 2s ease-in-out infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

/* Geometric Grid Pattern */
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

/* Smooth transitions for all interactive elements */
a,
button {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {

  .fade-in-up,
  .animate-wave-subtle,
  .animate-grid-move {
    animation: none;
    opacity: 1;
  }

  .fade-in-up {
    opacity: 1;
  }
}
</style>
