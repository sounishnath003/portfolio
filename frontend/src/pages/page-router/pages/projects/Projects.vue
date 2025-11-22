<template>
  <Motion is="p" :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }"
    class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 hidden md:block">
    &bull; Things I’ve made trying to put my dent in the universe.
  </Motion>

  <Motion v-for="(project, index) in Portfolio.projectsPage.projects" :key="index" class="w-full"
    :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
    :transition="{ delay: index * 0.1, duration: 0.5 }">
    <ProjectCard :project="project" />
  </Motion>
  <div class="mb-5"></div>
</template>

<script setup lang="ts">
import { Portfolio } from "../../../portfolioDatabase";
import ProjectCard from "./ProjectCard.vue";
import { Motion } from "motion-v";
</script>
