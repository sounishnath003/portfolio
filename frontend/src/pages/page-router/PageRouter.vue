<template>
  <div
    class="flex flex-col md:flex-row items-center h-screen mx-auto my-16 p-5 gap-5 justify-start border rounded-3xl"
  >
    <SkillSection />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import SkillSection from "./SkillSection.vue";
</script>
