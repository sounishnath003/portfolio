<template>
  <div class="flex flex-col md:flex-row items-center h-screen mx-auto my-16 p-5 gap-5 justify-start border rounded-3xl">
    <SkillSection />
    <div class="m-auto h-screen flex flex-col items-center gap-6 justify-start w-full md:w-3/5 overflow-y-scroll"
      style="scrollbar-width: none; -ms-overflow-style: none">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import SkillSection from "./SkillSection.vue";
</script>
