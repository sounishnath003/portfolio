<template>
  <div class="bg-neural-50 dark:bg-gray-900 rounded-lg py-3 px-4 w-full max-w-full mb-4">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
      <div class="flex-1 min-w-0">
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
          <h3 class="hover:underline font-semibold text-lg sm:text-xl flex-shrink-0">
            <a :href="props.experience.href" target="_blank" class="block">
              {{ props.experience.company }}
            </a>
          </h3>
          <div class="flex gap-1 sm:gap-2 flex-wrap">
            <span
              class="px-2 py-1 text-[0.7rem] sm:text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full whitespace-nowrap">
              {{ props.experience.type }}
            </span>
            <span
              class="px-2 py-1 text-[0.7rem] sm:text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full whitespace-nowrap">
              {{ props.experience.mode }}
            </span>
          </div>
        </div>
        <h4 class="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-300 break-words">
          {{ props.experience.role }}
        </h4>
      </div>

      <div class="text-left sm:text-right flex-shrink-0">
        <span class="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {{ props.experience.duration }}
        </span>
      </div>
    </div>

    <!-- Description/Highlights -->
    <ul class="space-y-2">
      <li v-for="highlight in props.experience.highlights" :key="highlight" class="flex items-start gap-2">
        <span class="text-gray-800 dark:text-gray-300 text-sm leading-relaxed flex-shrink-0 mt-0.5">
          &bull;
        </span>
        <span class="text-gray-800 text-pretty dark:text-gray-300 text-sm leading-relaxed flex-1">
          {{ highlight }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface WorkExperience {
  company: string;
  href: string;
  role: string;
  type: string;
  mode: string;
  duration: string;
  highlights: string[];
}

const props = defineProps<{ experience: WorkExperience }>();
</script>
