<template>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="mb-8 flex justify-center">
          <div class="text-lg">
            Hello! 👋, I'm <span class="text-blue-700 font-medium text-xl">Sounish Nath.</span>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">{{ attributeValue}}</h1>
          <p class="mt-8 font-medium text-pretty text-gray-500 dark:text-gray-200 font-medium">{{ profileBio }}</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a :href="resumeLink" target="_blank"> <PrimaryButton text="Download Resume" buttonType="Download" color="blue" /> </a>
            <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
</template>


<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import PrimaryButton from './PrimaryButton.vue';


const profileBio = `SDE-2 at Oracle. At Oracle, building AI-driven cloud systems that serve 1M+ daily users. I architect scalable backend platforms and data pipelines, with proven experience migrating 40M+ tasks and reducing operational costs by 68%. Based in Bengaluru, India.`;

const attributes = ['Software Engineer', 'Scalable Backend', 'Distributed Systems', 'Data Platform Eng.' ];

const resumeLink: string = `https://drive.google.com/file/d/1hcKSEp-PJaNs8P86yN9e60mIBHiXVUin/edit`;

let intervalId: number | null | undefined = null;
let attributeIndex=0;
let attributeValue = ref(attributes[attributeIndex]);

onMounted(() => {
    intervalId = window.setInterval(() => {
        attributeIndex=(attributeIndex+1) % attributes.length;
        attributeValue.value=attributes[attributeIndex];
    }, 1500)
})

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});


</script>