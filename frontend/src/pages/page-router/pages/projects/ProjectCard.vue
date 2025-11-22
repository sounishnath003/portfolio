<template>
  <div
    class="bg-white dark:bg-gray-900 rounded-2xl p-4 md:max-w-5xl mx-auto border border-gray-300 dark:border-gray-600 mb-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
      <!-- Left Side: Content -->
      <div class="space-y-4 order-2 lg:order-1">
        <!-- Header -->
        <div class="flex items-center gap-3 flex-wrap">
          <h2 class="text-lg md:text-xl font-semibold text-pretty tracking-tight text-gray-900 dark:text-gray-100">
            {{ props.project.title }}
          </h2>
          <span
            class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[11px] md:text-xs font-medium whitespace-nowrap">
            {{ props.project.datePublished }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-sm text-gray-800 dark:text-gray-200 max-w-2xl leading-normal">
          {{ props.project.description }}
        </p>

        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-2 md:gap-3 items-center">
          <span v-for="stack in props.project.techStack"
            class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-xs md:text-sm">
            {{ stack }}
          </span>
        </div>

        <!-- Action Links -->
        <div class="flex gap-3 md:gap-4 mt-3">
          <a v-for="link in props.project.links" :href="link.href" target="_blank" rel="noopener noreferrer"
            class="p-2.5 md:p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg md:rounded-xl transition-colors duration-200">
            <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${link.iconName}.svg`"
              class="w-4 h-4 dark:invert" :alt="link.iconName" />
          </a>
        </div>
      </div>

      <!-- Right Side: Visual/Image -->
      <div class="relative order-1 lg:order-2">
        <!-- Mobile: Show image -->
        <div class="block lg:hidden mb-4">
          <img :src="props.project.thumbnail" loading="lazy"
            class="w-full h-auto border border-gray-300 dark:border-gray-600 rounded-xl" :alt="props.project.title" />
        </div>
        <!-- Desktop: Show image -->
        <div class="hidden lg:block">
          <img :src="props.project.thumbnail" loading="lazy"
            class="bg-center bg-no-repeat w-full border border-gray-400 dark:border-gray-800 rounded-2xl"
            :alt="props.project.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string;
  datePublished: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  links: {
    iconName: string;
    href: string;
  }[];
}

const props = defineProps<{ project: Project }>();
</script>
