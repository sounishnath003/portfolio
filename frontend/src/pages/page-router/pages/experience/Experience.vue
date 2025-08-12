<template>
  <p
    class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 hhidden md:block"
  >
    &bull; Work Experience
  </p>

  <ExperienceCard
    v-for="experience in Portfolio.workExperiencePage.experiences"
    :experience="experience"
  />
</template>

<script setup lang="ts">
import { Portfolio } from "../../../portfolioDatabase";
import ExperienceCard from "./ExperienceCard.vue";
</script>
