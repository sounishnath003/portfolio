<template>
  <div
    class="flex flex-col lg:flex-row items-center lg:h-screen mx-auto my-8 md:my-16 p-4 md:p-5 gap-5 justify-start border rounded-3xl overflow-hidden"
    style="scrollbar-width: none; -ms-overflow-style: none">
    <SkillSection />
    <div
      class="m-auto lg:h-screen flex flex-col items-center gap-6 justify-start w-full lg:w-3/5 overflow-y-auto lg:overflow-y-scroll"
      style="scrollbar-width: none; -ms-overflow-style: none">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import SkillSection from "./SkillSection.vue";
</script>
