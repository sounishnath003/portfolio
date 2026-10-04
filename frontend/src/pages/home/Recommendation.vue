<template>
  <section class="py-8">
    <SectionKicker
      index="04"
      label="CODE REVIEW"
      title="What people wrote after shipping with me"
      subtitle="Not testimonials. LinkedIn reviews from people who sat in the same incident channel."
    />

    <div class="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
      <div
        class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 font-mono text-[11px] text-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400"
      >
        <span>pull/endorsements · {{ recommendations.length }} comments</span>
        <span class="text-emerald-600 dark:text-emerald-400">● approved</span>
      </div>

      <div class="divide-y divide-gray-200 dark:divide-gray-800">
        <RecommendationCard
          v-for="(endorsement, i) in recommendations"
          :key="endorsement.name"
          :endorsement="endorsement"
          :delay="0.08 * i"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import RecommendationCard from "../../components/RecommendationCard.vue";
import { Portfolio } from "../portfolioDatabase";
import SectionKicker from "./SectionKicker.vue";

const recommendations = Portfolio.endorsementPage.endorsements;
</script>
