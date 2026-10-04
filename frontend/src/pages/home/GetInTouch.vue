<template>
  <section class="relative py-16">
    <SectionKicker
      index="05"
      label="OPEN A CHANNEL"
      title="If the problem is interesting, I will answer"
      subtitle="Distributed systems, data platforms, weird latency graphs. Skip the small talk."
    />

    <div
      class="overflow-hidden rounded-2xl border border-gray-200 bg-[#0d1117] shadow-2xl shadow-blue-900/10 dark:border-gray-800"
    >
      <div class="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span class="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
        <span class="ml-2 font-mono text-[11px] text-gray-400">zsh — sounish@bengaluru</span>
      </div>

      <div class="space-y-4 p-5 font-mono text-[13px] leading-relaxed sm:p-8 sm:text-sm">
        <p class="text-gray-500">
          <span class="text-emerald-400">sounish@bengaluru</span>
          <span class="text-gray-600">:</span>
          <span class="text-sky-400">~</span>
          <span class="text-gray-400"> % whoami</span>
        </p>
        <p class="text-gray-200">
          backend engineer · distributed systems · currently shipping spark infra at microsoft
        </p>

        <p class="text-gray-500">
          <span class="text-emerald-400">sounish@bengaluru</span>
          <span class="text-gray-600">:</span>
          <span class="text-sky-400">~</span>
          <span class="text-gray-400"> % cat ./contact.txt</span>
        </p>

        <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="link in Portfolio.socialLinks"
            :key="link.name"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-gray-200 transition-all duration-200 hover:border-yellow-400/40 hover:bg-white/10"
          >
            <img
              :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${link.iconName}.svg`"
              class="h-4 w-4 invert"
              :alt="link.iconName"
            />
            <span>{{ link.name.toLowerCase() }}</span>
            <span class="ml-auto text-gray-600 transition-colors group-hover:text-yellow-400">↗</span>
          </a>
        </div>

        <p class="flex flex-wrap items-center gap-2 text-gray-500">
          <span class="text-emerald-400">sounish@bengaluru</span>
          <span class="text-gray-600">:</span>
          <span class="text-sky-400">~</span>
          <span class="text-gray-400"> %</span>
          <span class="text-gray-300">ssh hire@sounish</span>
          <span class="ml-0.5 inline-block h-4 w-2 animate-pulse bg-yellow-400 align-middle"></span>
        </p>

        <div class="flex flex-wrap items-center gap-4 pt-2">
          <router-link
            to="/pages/about"
            class="text-xs text-sky-300 underline-offset-4 hover:text-yellow-300 hover:underline"
          >
            man about
          </router-link>
          <a
            :href="Portfolio.resumeLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-sky-300 underline-offset-4 hover:text-yellow-300 hover:underline"
          >
            cat resume.pdf
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Portfolio } from "../portfolioDatabase";
import SectionKicker from "./SectionKicker.vue";
</script>
