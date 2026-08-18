<template>
  <article
    class="group relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md fade-in-up"
    :style="{ animationDelay: `${props.delay}s` }">

    <div class="relative z-10 flex flex-col gap-3">

      <!-- Company + Author in one compact row -->
      <div class="flex items-center gap-3">
        <img
          class="h-8 w-8 object-contain rounded-md bg-gray-50 dark:bg-gray-700 p-1 border border-gray-200 dark:border-gray-600 flex-shrink-0"
          :src="props.endorsement.companyLogo"
          :alt="props.endorsement.company" />
        <div>
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">
            {{ props.endorsement.company }}
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            via LinkedIn
          </p>
        </div>
      </div>

      <!-- Quote -->
      <blockquote
        class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-600 pl-3"
        :class="props.size === 'large' ? 'text-sm' : 'text-xs sm:text-sm'">
        {{ props.endorsement.endorsement }}
      </blockquote>

      <!-- Author -->
      
        <a :href="props.endorsement.linkedin"
        target="_blank"
        class="flex items-center gap-2 mt-1 group/link">
        <img
          class="size-7 rounded-full ring-1 ring-gray-200 dark:ring-gray-700 group-hover/link:ring-blue-400 dark:group-hover/link:ring-yellow-400 transition-all duration-200 flex-shrink-0"
          :src="props.endorsement.avatar"
          :alt="props.endorsement.name" />
        <div class="min-w-0">
          <p class="text-xs font-semibold text-gray-900 dark:text-gray-100 truncate">
            {{ props.endorsement.name }}
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
            {{ props.endorsement.workBio }}
          </p>
        </div>
      </a>

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
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    .fade-in-up { animation: none; opacity: 1; }
  }
</style>