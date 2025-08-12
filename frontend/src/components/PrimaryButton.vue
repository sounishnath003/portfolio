<template>
  <div :class="computedCss">
    <div>{{ text }}</div>
    <ArrowDownOnSquareIcon class="w-6" v-if="buttonType === 'Download'" />
    <ArrowRightIcon class="w-6" v-if="buttonType === 'Normal'" />
  </div>
</template>

<script setup lang="ts">
import { ArrowDownOnSquareIcon } from "@heroicons/vue/24/outline";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";

type BtnType = "Download" | "Normal";
const props = defineProps<{
  text: string;
  buttonType: BtnType;
  color: string;
}>();

const colorMap: Record<string, string> = {
  red: "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600",
  blue: "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600",
  green: "bg-green-600 hover:bg-green-500 focus-visible:outline-green-600",
  purple: "bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600",
  // Add more colors as needed
};

const computedCss = computed(
  () =>
    `flex items-center justify-evenly gap-2 font-semibold rounded-md px-3.5 py-2.5 text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 ${colorMap[props.color] || colorMap.blue}`,
);
</script>
