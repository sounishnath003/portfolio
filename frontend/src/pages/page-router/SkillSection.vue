<template>
  <section
    class="w-full lg:w-2/5 p-2 md:p-8 lg:h-screen lg:overflow-y-scroll border-r"
    style="scrollbar-width: none; -ms-overflow-style: none"
  >
    <a href="/"
      ><span class="font-mono text-sm underline">{{ domainUrl }}</span></a
    >
    <div class="flex justify-between items-center mt-5">
      <h1 class="text-5xl font-bold">{{ Portfolio.fullname }}</h1>
    </div>
    <h3 class="mt-2 text-[15px]">{{ Portfolio.sarcasticBio }}</h3>
    <p class="my-6 max-w-2xl font-medium">
      Hey Friend 👋!, I simply love building softwares.
    </p>
    <div class="flex flex-wrap items-center gap-2">
      <a
        :href="Portfolio.resumeLink"
        target="_blank"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
        >Download Resume</a
      >
      <a
        :class="socialButtonCss"
        v-for="social in Portfolio.socialLinks"
        :href="social.href"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${social.iconName}.svg`"
          class="w-4 dark:invert"
          :alt="social.name"
      /></a>
    </div>
    <div class="mt-6">
      <div
        v-for="skill in Portfolio.skills"
        class="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground- my-3 font-medium text-gray-700 dark:text-gray-100"
      >
        <p>
          <span
            class="font-semibold text-primary text-[16px] text-pretty text-black dark:text-white"
            >{{ skill.topic }}:</span
          >
          {{ skill.skills.join(", ") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Portfolio } from "../portfolioDatabase";

const socialButtonCss = `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground h-10 w-10 active:border-b active:scale-[0.97] hover:border-[0.2px] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100`;

const domainUrl = ref(window.location.hostname);
</script>

<style scoped>
section::-webkit-scrollbar {
  display: none;
}
</style>
