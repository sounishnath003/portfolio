<template>
  <div class="text-center">
    <p
      class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-gray-100 md:block -mb-10"
    >
      What colleagues say about
      <span class="text-blue-600 dark:text-white underline"
        >Sounish&quest;</span
      >
    </p>
  </div>
  <transition name="fade" mode="out-in" appear>
    <RecommendationCard
      :key="currentIndex"
      :endorsement="recommendations[currentIndex]"
    />
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import RecommendationCard from "../../components/RecommendationCard.vue";
import { Portfolio } from "../portfolioDatabase";

const recommendations = Portfolio.endorsementPage.endorsements;

const currentIndex = ref(0);
let intervalId: number | undefined;

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % recommendations.length;
  }, 5001); // Change every 5 seconds
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
