<template>
    <p class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 hhidden md:block">
        &bull; Things I’ve made trying to put my dent in the universe.
    </p>

    <ProjectCard v-for="project in Portfolio.projectsPage.projects" :project="project" />
</template>

<script setup lang="ts">
import { Portfolio } from '../../../portfolioDatabase';
import ProjectCard from './ProjectCard.vue';

</script>
