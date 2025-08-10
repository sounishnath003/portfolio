<template>
  <Header />
  <component :is="currentView" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Header from './components/Header.vue';
import Home from './pages/home/Home.vue';
import NotFound from './pages/not-found/NotFound.vue';

const routes: Record<string, any> = {
  '/': Home
};

// Get the current path
const currentPath = ref(window.location.hash);

// Add event listerner
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>