<template>
    <ProjectCard v-for="project in Portfolio.projectsPage.projects" :project="project" />
</template>

<script setup lang="ts">
import { Portfolio } from '../../../portfolioDatabase';
import ProjectCard from './ProjectCard.vue';

</script>
