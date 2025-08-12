<template>
    <section class="w-auto lg:max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 class="text-5xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 mb-6">Get in touch</h2>
        <p class="mb-8 text-lg text-zinc-600 dark:text-zinc-300">
            Interested in working together or want to know more? <br>
            <a href="#/pages/about" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">Learn more
                about me</a>
            or connect via social links below!
        </p>
        <ul class="flex flex-wrap justify-center gap-4 mb-2" role="list">
            <li v-for="(link, index) in Portfolio.socialLinks" :key="index">
                <a :href="link.href" target="_blank" rel="noopener noreferrer" :class="socialButtonCss">
                    <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${link.iconName}.svg`"
                        class="w-4 h-4 dark:invert" :alt="link.iconName" />
                    <span>{{ link.name }}</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { Portfolio } from '../portfolioDatabase';

const socialButtonCss = `inline-flex gap-4 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100 w-full sm:w-auto`;

</script>