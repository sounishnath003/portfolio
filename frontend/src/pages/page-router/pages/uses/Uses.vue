<template>
  <div class="space-y-10">
    <Motion is="div" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }">
      <p class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 hidden md:block">
        &bull; Software I use, gadgets I love, and other things I recommend.
      </p>
    </Motion>

    <!-- Hardware Section -->
    <Motion is="section" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
      :transition="{ delay: 0.2, duration: 0.5 }">
      <h2 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6 flex items-center gap-3">
        <DevicePhoneMobileIcon class="w-6 h-6" />
        Hardware & Gear
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="(device, index) in devices" :key="index"
          class="group relative flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 group-hover:scale-110 transition-transform duration-300">
            <component :is="getIconForDevice(device.name)" class="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-gray-100">
              {{ device.name }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ device.spec }}
            </p>
          </div>
        </div>
      </div>
    </Motion>

    <!-- Software Section -->
    <Motion is="section" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
      :transition="{ delay: 0.3, duration: 0.5 }">
      <h2 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6 flex items-center gap-3">
        <CommandLineIcon class="w-6 h-6" />
        Software & Apps
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(tool, index) in software" :key="index"
          class="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:shadow-sm">
          <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tool.icon}.svg`"
            class="w-6 h-6 dark:invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
            :alt="tool.name" />
          <span
            class="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{{
            tool.name }}</span>
        </div>
      </div>
    </Motion>

    <!-- Technologies Section -->
    <Motion is="section" :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
      :transition="{ delay: 0.4, duration: 0.5 }">
      <h2 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6 flex items-center gap-3">
        <WrenchScrewdriverIcon class="w-6 h-6" />
        Technologies
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(tool, index) in technologies" :key="index"
          class="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:shadow-sm">
          <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tool.icon}.svg`"
            class="w-6 h-6 dark:invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
            :alt="tool.name" />
          <span
            class="font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{{
            tool.name }}</span>
        </div>
      </div>
    </Motion>

    <div class="mb-5"></div>
  </div>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";
import {
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  CpuChipIcon, 
  TvIcon, 
  SpeakerWaveIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon
} from "@heroicons/vue/24/outline";
import { Portfolio } from "../../../portfolioDatabase";

interface Device {
  name: string;
  spec: string;
}

interface Software {
  name: string;
  icon: string;
}

const devices: Device[] = Portfolio.usesPage.devices;
const software: Software[] = Portfolio.usesPage.software;
const technologies: Software[] = Portfolio.usesPage.technologies;

const getIconForDevice = (name: string) => {
  if (name.includes("Macbook") || name.includes("Dell")) return ComputerDesktopIcon;
  if (name.includes("Display")) return TvIcon;
  if (name.includes("Speaker")) return SpeakerWaveIcon;
  return CpuChipIcon; // Default for accessories
};
</script>
