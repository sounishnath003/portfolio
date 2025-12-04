<template>
  <component :is="layout" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
import BlankLayout from "./layouts/BlankLayout.vue";

const route = useRoute();
const layout = computed(() => {
  if (route.path === '/linktree') {
    return BlankLayout;
  }
  return MainLayout;
});
</script>
