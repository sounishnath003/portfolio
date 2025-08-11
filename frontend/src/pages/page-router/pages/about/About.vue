<template>
    <div><img :src="Portfolio.aboutPage.photo" alt="about#photo" loading="lazy"
            class="aspect-circle rotate-3 rounded-2xl object-cover dark:bg-zinc-800 w-76"></div>
    <div>
        <p class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">{{
            Portfolio.aboutPage.headline }}</p>
    </div>

    <div>
        <p class="text-center text-lg">{{ Portfolio.aboutPage.subtitle }}</p>
    </div>

    <div>
        <div class="space-y-7 text-base text-zinc-600 dark:text-zinc-400" v-html="Portfolio.aboutPage.description">
        </div>
    </div>

    <div>
        <ul class="lg:pl-20 flex gap-3 my-2" role="list">
            <li v-for="(link, index) in Portfolio.socialLinks" :key="index">
                <a :href="link.href" target="_blank" rel="noopener noreferrer" :class="socialButtonCss">
                    <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${link.iconName}.svg`"
                        class="w-4 dark:invert" :alt="link.iconName">
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Portfolio } from '../../../portfolioDatabase';

const socialButtonCss = `inline-flex gap-4 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100`;

</script>
