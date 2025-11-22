<template>
    <footer class="relative mt-16 pb-8">
        <!-- Background Pattern -->
        <div class="absolute inset-0 -z-10 overflow-hidden opacity-10 dark:opacity-5">
            <div class="absolute inset-0 bg-grid-geometric animate-grid-move"></div>
        </div>

        <!-- Footer Content Card -->
        <div
            class="relative group mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 transition-all duration-300 hover:border-blue-400/50 dark:hover:border-yellow-400/50">
            <!-- Gradient Background Effect -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/5 dark:via-transparent dark:to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>

            <!-- Content -->
            <div
                class="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                <!-- Copyright -->
                <div class="transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    Copyright @ 2024
                </div>

                <!-- Built with section -->
                <div class="flex items-center gap-3">
                    <span class="text-gray-500 dark:text-gray-400">&bull;</span>
                    <span
                        class="transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Built with
                    </span>
                    <span class="text-red-500 transition-transform duration-300 group-hover:scale-110">❤️</span>

                    <!-- Tech Stack Icons -->
                    <div class="flex items-center gap-3">
                        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer"
                            class="group/icon relative w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-yellow-900/30"
                            title="Vite">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vite.svg"
                                class="w-5 h-5 dark:invert transition-transform duration-300 group-hover/icon:scale-110"
                                alt="vite" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                            class="group/icon relative w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-yellow-900/30"
                            title="GitHub">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                                class="w-5 h-5 dark:invert transition-transform duration-300 group-hover/icon:scale-110"
                                alt="github" />
                        </a>
                        <a href="https://netlify.com" target="_blank" rel="noopener noreferrer"
                            class="group/icon relative w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-yellow-900/30"
                            title="Netlify">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netlify.svg"
                                class="w-5 h-5 dark:invert transition-transform duration-300 group-hover/icon:scale-110"
                                alt="netlify" />
                        </a>
                    </div>
                </div>

                <!-- Version -->
                <div class="flex items-center gap-2">
                    <span class="text-gray-500 dark:text-gray-400">&bull;</span>
                    <span
                        class="transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Version: 4.0
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
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
    .animate-grid-move {
        animation: none;
    }
}
</style>
