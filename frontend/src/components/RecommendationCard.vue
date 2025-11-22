<template>
  <article
    class="group relative overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-blue-400/50 dark:hover:border-yellow-400/50 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-yellow-500/10 hover:-translate-y-1 fade-in-up"
    :style="{ animationDelay: `${props.delay}s` }">
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
    <div class="relative z-10 h-full flex flex-col">
      <!-- Company Logo & Name -->
      <div class="flex items-center gap-3 mb-4 transition-transform duration-300 group-hover:scale-105">
        <div class="relative">
          <img
            class="h-12 w-12 object-contain rounded-lg bg-gray-50 dark:bg-gray-700/50 p-1.5 border border-gray-200/50 dark:border-gray-600/50"
            :src="props.endorsement.companyLogo" :alt="props.endorsement.company" />
          <div
            class="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          </div>
        </div>
        <p class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {{ props.endorsement.company }}
        </p>
      </div>

      <!-- Quote -->
      <blockquote class="flex-1 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300"
        :class="props.size === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'">
        <p class="relative">
          <span class="text-3xl font-serif text-blue-400/30 dark:text-yellow-400/30 absolute -left-2 -top-2">"</span>
          <span class="relative z-10">{{ props.endorsement.endorsement }}</span>
          <span class="text-3xl font-serif text-blue-400/30 dark:text-yellow-400/30">"</span>
        </p>
      </blockquote>

      <!-- Author Info -->
      <div class="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
        <a :href="props.endorsement.linkedin" target="_blank"
          class="flex items-center gap-3 group/link transition-all duration-300 hover:gap-4">
          <div class="relative">
            <img
              class="size-12 rounded-full ring-2 ring-gray-200 dark:ring-gray-700 group-hover:ring-blue-400 dark:group-hover:ring-yellow-400 transition-all duration-300 group-hover:scale-110"
              :src="props.endorsement.avatar" :alt="props.endorsement.name" />
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <p class="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                {{ props.endorsement.name }}
              </p>
              <svg
                class="w-4 h-4 text-blue-600 dark:text-yellow-400 opacity-0 group-hover/link:opacity-100 transition-all duration-300 group-hover/link:translate-x-1"
                fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
              {{ props.endorsement.workBio }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Endorsement {
  company: string;
  companyLogo: string;
  endorsement: string;
  avatar: string;
  name: string;
  workBio: string;
  linkedin: string;
}

interface Props {
  endorsement: Endorsement;
  size?: "small" | "medium" | "large";
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  delay: 0,
});
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

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .fade-in-up {
    animation: none;
    opacity: 1;
  }
}
</style>
