<template>
  <section class="py-16">
    <SectionKicker
      index="03"
      label="STACK DUMP"
      title="What I actually type into a terminal"
      subtitle="Languages, systems, and the boring-but-vital glue that keeps clusters honest."
    />

    <div
      class="overflow-hidden rounded-2xl border border-gray-200 bg-[#0d1117] shadow-xl shadow-blue-900/5 dark:border-gray-800"
    >
      <div class="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div class="flex items-center gap-2">
          <span class="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
        </div>
        <p class="font-mono text-[11px] text-gray-400">~/sounish/stack.toml</p>
        <p class="hidden font-mono text-[11px] text-gray-500 sm:block">utf-8 · 4 tabs</p>
      </div>

      <div class="grid gap-px bg-white/5 sm:grid-cols-2">
        <div
          v-for="(group, gi) in visibleSkills"
          :key="group.topic"
          class="bg-[#0d1117] p-5"
        >
          <p class="font-mono text-[11px] text-emerald-400/90">
            <span class="text-gray-500">{{ gi + 1 }}</span>
            &nbsp;<span class="text-purple-300">[{{ slug(group.topic) }}]</span>
          </p>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-sky-200 transition-colors hover:bg-white/10 hover:text-yellow-200"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionKicker from "./SectionKicker.vue";
import { Portfolio } from "../portfolioDatabase";

const visibleSkills = Portfolio.skills.filter((s) => s.topic !== "Miscellenous");

const slug = (topic: string) =>
  topic.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "_");
</script>
