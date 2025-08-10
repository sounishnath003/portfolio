<template>
  <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div class="mb-8 flex justify-center">
      <div class="text-xl">
        Hello! 👋, I'm
        <span class="text-blue-700 dark:text-gray-50 font-medium text-2xl">{{ Portfolio.fullname }}.</span>
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-6xl font-semibold tracking-tight text-balance sm:text-7xl">
        {{ attributeValue }}
      </h1>
      <p class="mt-8 font-medium text-pretty text-gray-500 dark:text-gray-200 font-medium">
        {{ Portfolio.profileBio }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a :href="Portfolio.resumeLink" target="_blank">
          <PrimaryButton text="Download Resume" buttonType="Download" color="blue" />
        </a>
        <a href="#/pages/about" class="text-sm/6 font-semibold text-gray-900 dark:text-white">Interested? Know more
          <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>

    <div class="text-center my-16">
      <WorkAt />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import PrimaryButton from "../../components/PrimaryButton.vue";
import WorkAt from "./WorkAt.vue";
import { Portfolio } from "../portfolioDatabase";

let intervalId: number | null | undefined = null;
let attributeIndex = 0;
let attributeValue = ref(Portfolio.attributes[attributeIndex]);

onMounted(() => {
  intervalId = window.setInterval(() => {
    attributeIndex = (attributeIndex + 1) % Portfolio.attributes.length;
    attributeValue.value = Portfolio.attributes[attributeIndex];
  }, 1500);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
