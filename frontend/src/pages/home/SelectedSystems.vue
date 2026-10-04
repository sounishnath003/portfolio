<template>
  <section class="py-8">
    <SectionKicker
      index="02"
      label="SELECTED SYSTEMS"
      title="Things I built because existing tools were boring"
      subtitle="Consensus, caches, and real-time collab — the kind of work that belongs in a Git history, not a slideshow."
      href="/pages/projects"
      hrefLabel="all repos →"
    />

    <div class="grid gap-4 lg:grid-cols-3">
      <a
        v-for="(project, i) in featured"
        :key="project.title"
        :href="project.links[0]?.href"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-[#0b1220] dark:hover:border-yellow-400/40"
      >
        <div
          class="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900/80"
        >
          <span class="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
          <span class="ml-2 truncate font-mono text-[11px] text-gray-500 dark:text-gray-400">
            {{ project.file }}
          </span>
        </div>

        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img
            :src="project.thumbnail"
            :alt="project.title"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></div>
        </div>

        <div class="flex flex-1 flex-col p-4">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">{{ project.title }}</h3>
            <span class="font-mono text-[10px] text-gray-400">0{{ i + 1 }}</span>
          </div>
          <p class="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {{ project.description }}
          </p>
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="tag in project.techStack"
              :key="tag"
              class="rounded-md border border-gray-200 px-1.5 py-0.5 font-mono text-[10px] text-gray-600 dark:border-gray-700 dark:text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionKicker from "./SectionKicker.vue";
import { Portfolio } from "../portfolioDatabase";

const files = ["gossip-raft.go", "shortener.go", "multiplayer.ts"];

const featured = Portfolio.projectsPage.projects.slice(0, 3).map((project, i) => ({
  ...project,
  file: files[i] ?? "main.go",
}));
</script>
