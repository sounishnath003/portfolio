<template>
  <div class="relative isolate px-6 pt-2 lg:px-8 min-h-screen flex flex-col">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <Header />
    <div class="flex-1">
      <router-view />
    </div>
    <footer class="text-center mt-20 font-medium font-sans leading-tight">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-4">
        <div>Copyright @ 2024</div>
        <div class="flex items-center gap-4">
          <span>&bull; Built with ❤️, </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vite.svg"
              class="w-8 dark:invert"
              alt="vite"
            />
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
              class="w-8 dark:invert"
              alt="github"
            />
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netlify.svg"
              class="w-8 dark:invert"
              alt="netlify"
            />
          </span>
        </div>
        <div>&bull; Version: 4.0</div>
      </div>
    </footer>
    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
