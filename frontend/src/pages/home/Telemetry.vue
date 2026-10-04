<template>
  <section class="py-16">
    <SectionKicker
      index="01"
      label="TELEMETRY"
      title="Numbers from production, not a pitch deck"
      subtitle="The systems I ship are measured in latency, cost, and whether someone gets paged at 3AM."
      href="/pages/work-experience"
      hrefLabel="full log →"
    />

    <div
      class="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-xs text-gray-600 dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-400"
    >
      <span class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        LIVE
      </span>
      <span class="hidden sm:inline text-gray-300 dark:text-gray-700">│</span>
      <span>
        process=<span class="text-gray-900 dark:text-gray-100">microsoft.fabric.spark</span>
      </span>
      <span class="hidden sm:inline text-gray-300 dark:text-gray-700">│</span>
      <span>
        role=<span class="text-gray-900 dark:text-gray-100">SWE II</span>
      </span>
      <span class="hidden sm:inline text-gray-300 dark:text-gray-700">│</span>
      <span>
        loc=<span class="text-gray-900 dark:text-gray-100">bengaluru</span>
      </span>
    </div>

    <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <article
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-yellow-400/40"
        :style="{ animationDelay: `${i * 0.08}s` }"
      >
        <p class="font-mono text-[10px] tracking-widest text-gray-400">{{ stat.key }}</p>
        <p
          class="mt-3 font-mono text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          {{ stat.value }}
        </p>
        <p class="mt-2 text-sm leading-snug text-gray-600 dark:text-gray-400">{{ stat.label }}</p>
        <p class="mt-3 font-mono text-[10px] text-blue-600 dark:text-yellow-400">{{ stat.ctx }}</p>
      </article>
    </div>

    <ol class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
      <li
        v-for="(stop, i) in rail"
        :key="stop.company"
        class="flex items-center gap-3 font-mono text-xs text-gray-500 dark:text-gray-400"
      >
        <span
          class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-[10px] text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        >
          {{ String(i + 1).padStart(2, "0") }}
        </span>
        <span>
          <span class="font-semibold text-gray-900 dark:text-gray-100">{{ stop.company }}</span>
          <span class="mx-1.5 text-gray-300 dark:text-gray-700">·</span>
          {{ stop.note }}
        </span>
        <span v-if="i < rail.length - 1" class="hidden px-3 text-gray-300 sm:inline dark:text-gray-700">──</span>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import SectionKicker from "./SectionKicker.vue";

const stats = [
  { key: "p95.sql", value: "−64%", label: "SQL analytics time after rewriting the job orchestrator", ctx: "go + kafka + postgres" },
  { key: "infra.cost", value: "−68%", label: "Infrastructure spend on 300GB/day batch + stream", ctx: "pubsub · spark · delta" },
  { key: "throughput", value: "40M+", label: "Async tasks moved off a brittle PHP service", ctx: "per day, production" },
  { key: "users.dau", value: "1M+", label: "Daily users on OCI streaming microservices", ctx: "k8s · circuit breakers" },
];

const rail = [
  { company: "Microsoft", note: "Fabric Spark infra" },
  { company: "Oracle", note: "auth, streaming, RCA sidecar" },
  { company: "TCS", note: "orchestration + data lake" },
];
</script>
