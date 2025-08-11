<template>
    <div
        class="bg-white dark:bg-gray-900 rounded-2xl p-4 md:max-w-5xl mx-auto border border-gray-300 dark:border-gray-600">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Left Side: Content -->
            <div class="space-y-2">
                <!-- Header -->
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-semibold text-pretty">{{ props.project.title }}</h2>
                    <span class="px-2 py-1 rounded bg-gray-100 dark:text-gray-900 text-xs cursor-pointer font-medium">
                        {{ props.project.datePublished }}
                    </span>
                </div>

                <!-- Description -->
                <p class="text-sm text-gray-800 dark:text-white max-w-2xl leading-normal">
                    {{ props.project.description }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-3 items-center">
                    <span v-for="stack in props.project.techStack"
                        class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-200 font-medium dark:text-gray-800 text-xs md:text-sm cursor-pointer">
                        {{ stack }}
                    </span>
                </div>

                <!-- Action Links -->
                <div class="flex gap-4 mt-3">
                    <a v-for="link in props.project.links" :href="link.href" target="_blank"
                        class="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors">
                        <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${link.iconName}.svg`"
                            class="w-4 dark:invert" :alt="link.iconName" />
                    </a>
                </div>
            </div>

            <!-- Right Side: Visual/Device -->
            <div class="relative hidden md:inline-flex">
                <img :src="props.project.thumbnail" loading="lazy"
                    class="bg-center bg-no-repeat w-full border border-gray-400 dark:border-gray-800 rounded-2xl"
                    :alt="props.project.title">
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
};

const props = defineProps<{ project: Project }>();
</script>
