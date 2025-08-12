<template>
  <div>
    <img
      :src="Portfolio.aboutPage.photo"
      alt="about#photo"
      loading="lazy"
      class="rounded-full aspect-circle rotate-3 object-cover dark:bg-zinc-800 w-76"
    />
  </div>
  <div>
    <p
      class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"
    >
      {{ Portfolio.aboutPage.headline }}
    </p>
  </div>

  <div>
    <p class="text-center text-lg">{{ Portfolio.aboutPage.subtitle }}</p>
  </div>

  <div>
    <div
      class="space-y-7 text-base text-zinc-600 dark:text-zinc-400"
      v-html="Portfolio.aboutPage.description"
    ></div>
  </div>

  <div>
    <ul
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 my-2 w-full"
      role="list"
    >
      <li
        v-for="(link, index) in Portfolio.socialLinks"
        :key="index"
        class="flex w-full"
      >
        <a
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          :class="`${socialButtonCss} w-full justify-center`"
          style="width: 100%"
        >
          <img
            :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${link.iconName}.svg`"
            class="w-4 dark:invert"
            :alt="link.iconName"
          />
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Portfolio } from "../../../portfolioDatabase";

const socialButtonCss = `inline-flex gap-4 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100 w-full sm:w-auto`;
</script>
