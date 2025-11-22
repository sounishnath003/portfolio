<template>
  <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
    <!-- Title -->
    <div class="text-center mb-12 fade-in-up">
      <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
        What colleagues say about
        <span class="text-blue-600 dark:text-yellow-400 underline decoration-2 underline-offset-4">Sounish?</span>
      </h2>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Card 1 - Medium -->
      <RecommendationCard :endorsement="recommendations[0]" :size="'medium'" :delay="0.1" />

      <!-- Card 2 - Medium -->
      <RecommendationCard :endorsement="recommendations[1]" :size="'medium'" :delay="0.2" />

      <!-- Card 3 - Medium -->
      <RecommendationCard :endorsement="recommendations[2]" :size="'medium'" :delay="0.3" />

      <!-- Card 4 - Large (spans 2 columns) -->
      <RecommendationCard :endorsement="recommendations[3]" :size="'large'" :delay="0.4"
        class="md:col-span-2 lg:col-span-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecommendationCard from "../../components/RecommendationCard.vue";
import { Portfolio } from "../portfolioDatabase";

const recommendations = Portfolio.endorsementPage.endorsements;
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
