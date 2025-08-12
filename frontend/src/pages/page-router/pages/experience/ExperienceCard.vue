<template>
    <div class="bg-neural-50 dark:bg-gray-900 rounded-lg py-2 dark:px-4 w-auto md:w-3xl">
        <div class="flex justify-between items-start mb-2">
            <div class="flex-1">
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 class="hover:underline font-semibold text-lg sm:text-xl">
                        <a :href="props.experience.href" target="_blank" class="block truncate">
                            {{ props.experience.company }}
                        </a>
                    </h3>
                    <div class="flex gap-1 sm:gap-2 mt-1 sm:mt-0">
                        <span
                            class="px-2 py-1 text-[0.7rem] sm:text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                            {{ props.experience.type }}
                        </span>
                        <span
                            class="px-2 py-1 text-[0.7rem] sm:text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full">
                            {{ props.experience.mode }}
                        </span>
                    </div>
                </div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-300">
                    {{ props.experience.role }}
                </h4>
            </div>

            <div class="text-right">
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {{ props.experience.duration }}
                </span>
            </div>
        </div>

        <!-- Description/Highlights -->
        <ul class="space-y-0">
            <li v-for="highlight in props.experience.highlights" :key="highlight" class="flex items-start">
                <span class="text-gray-800 text-pretty text-semibold dark:text-gray-300 text-sm leading-tight">
                    <span class="text-2xl">&bull;</span>
                    {{ highlight
                    }}</span>
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
};

const props = defineProps<{ experience: WorkExperience }>();

</script>