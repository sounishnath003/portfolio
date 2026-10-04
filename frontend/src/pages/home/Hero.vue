<template>
  <section class="relative pb-8 pt-24 sm:pt-28">
    <div class="absolute inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-20">
      <div class="absolute inset-0 bg-grid-geometric animate-grid-move"></div>
    </div>

    <SectionKicker
      index="00"
      label="INIT"
      title="I ship systems that stay quiet"
      subtitle="Distributed auth, streaming pipelines, and backend services that don't wake you up at 3AM."
      href="/pages/about"
      hrefLabel="man about →"
    />

    <div class="grid items-stretch gap-4 lg:grid-cols-2">
      <div
        class="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 sm:p-6"
      >
        <p class="font-mono text-[11px] tracking-widest text-gray-400">$ whoami</p>
        <p class="mt-3 text-lg text-gray-700 dark:text-gray-300">
          <span class="inline-block animate-wave-subtle">👋</span>
          I'm
          <span class="font-semibold text-blue-700 dark:text-yellow-400">{{ Portfolio.fullname }}</span>
        </p>

        <p class="mt-6 font-mono text-[11px] tracking-widest text-gray-400">$ role --watch</p>
        <h1
          class="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
          :key="attributeValue"
        >
          <span class="role-swap">{{ attributeValue }}</span><span class="caret" aria-hidden="true"></span>
        </h1>

        <p class="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Software Engineer II at Microsoft, previously Oracle and TCS. I design and ship
          <span class="font-mono text-gray-900 dark:text-gray-100">distributed backend systems</span>
          — auth infra, real-time streaming, and fault-tolerant microservices. Rewrote a job
          orchestrator in Go + Kafka
          <span class="font-mono text-emerald-600 dark:text-emerald-400">−64%</span>
          SQL time, moved
          <span class="font-mono text-gray-900 dark:text-gray-100">40M+</span>
          async tasks/day, cut infra cost
          <span class="font-mono text-emerald-600 dark:text-emerald-400">−68%</span>.
          Based in Bengaluru.
        </p>

        <div class="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
          <a :href="Portfolio.resumeLink" target="_blank" rel="noopener noreferrer" class="group inline-block">
            <div class="transition-transform duration-200 group-hover:scale-[1.03] group-active:scale-95">
              <PrimaryButton text="Download Resume" buttonType="Download" color="blue" />
            </div>
          </a>
          <router-link
            to="/pages/work-experience"
            class="group relative inline-flex items-center gap-2 font-mono text-xs text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-yellow-400"
          >
            full log →
            <span
              class="absolute bottom-0 left-0 h-px w-0 bg-blue-600 transition-all duration-200 group-hover:w-full dark:bg-yellow-400"
            ></span>
          </router-link>
        </div>
      </div>

      <aside
        class="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#0d1117] dark:border-gray-800"
      >
        <div class="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span class="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
          <span class="ml-2 truncate font-mono text-[11px] text-gray-400">boot.sh — sounish@bengaluru</span>
        </div>

        <div class="flex flex-1 flex-col space-y-3 p-5 font-mono text-[12px] leading-relaxed text-gray-300 sm:p-6 sm:text-[13px]">
          <p>
            <span class="text-gray-500">last login:</span> from microsoft.fabric.spark
          </p>
          <p>
            <span class="text-emerald-400">sounish@bengaluru</span>
            <span class="text-gray-600">:</span>
            <span class="text-sky-400">~</span>
            <span class="text-gray-400"> % uname -a</span>
          </p>
          <p class="text-gray-200">darwin · swe-ii · distributed-systems · utc+5:30</p>

          <p>
            <span class="text-emerald-400">sounish@bengaluru</span>
            <span class="text-gray-600">:</span>
            <span class="text-sky-400">~</span>
            <span class="text-gray-400"> % roles --watch</span>
          </p>

          <ul class="space-y-1.5">
            <li
              v-for="(role, i) in Portfolio.attributes"
              :key="role"
              class="flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-300"
              :class="i === attributeIndex ? 'bg-yellow-400/15 text-yellow-200' : 'text-gray-500'"
            >
              <span class="w-3 shrink-0 text-yellow-400">{{ i === attributeIndex ? "▸" : "" }}</span>
              <span>{{ role }}</span>
              <span v-if="i === attributeIndex" class="ml-auto text-[10px] text-emerald-400">running</span>
            </li>
          </ul>

          <p class="mt-auto pt-4 text-gray-500">
            <span class="text-emerald-400">sounish@bengaluru</span>
            <span class="text-gray-600">:</span>
            <span class="text-sky-400">~</span>
            <span class="text-gray-400"> %</span>
            <span class="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-yellow-400 align-middle"></span>
          </p>
        </div>
      </aside>
    </div>

    <div class="mt-4">
      <WorkAt />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import PrimaryButton from "../../components/PrimaryButton.vue";
import { Portfolio } from "../portfolioDatabase";
import SectionKicker from "./SectionKicker.vue";
import WorkAt from "./WorkAt.vue";

const attributeIndex = ref(0);
const attributeValue = ref(Portfolio.attributes[0]);

let intervalId: number | null = null;

onMounted(() => {
  intervalId = window.setInterval(() => {
    attributeIndex.value = (attributeIndex.value + 1) % Portfolio.attributes.length;
    attributeValue.value = Portfolio.attributes[attributeIndex.value];
  }, 2200);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
@keyframes waveSubtle {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-3px) rotate(12deg);
  }
  50% {
    transform: translateY(-2px) rotate(-8deg);
  }
  75% {
    transform: translateY(-1px) rotate(5deg);
  }
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

@keyframes roleIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes caretBlink {
  0%,
  45% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

.animate-wave-subtle {
  animation: waveSubtle 2s ease-in-out infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

.role-swap {
  display: inline;
  animation: roleIn 0.35s ease-out;
}

.caret {
  display: inline-block;
  width: 0.08em;
  height: 0.85em;
  margin-left: 0.12em;
  background: currentColor;
  vertical-align: -0.05em;
  animation: caretBlink 1.1s steps(1) infinite;
}

.bg-grid-geometric {
  background-image:
    linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(45deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
    linear-gradient(-45deg, rgba(147, 51, 234, 0.05) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px, 20px 20px, 20px 20px;
}

.dark .bg-grid-geometric {
  background-image:
    linear-gradient(to right, rgba(147, 197, 253, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(147, 197, 253, 0.15) 1px, transparent 1px),
    linear-gradient(45deg, rgba(196, 181, 253, 0.1) 1px, transparent 1px),
    linear-gradient(-45deg, rgba(196, 181, 253, 0.1) 1px, transparent 1px);
}

.animate-grid-move {
  animation: gridMove 20s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-wave-subtle,
  .animate-grid-move,
  .role-swap,
  .caret {
    animation: none;
    opacity: 1;
  }
}
</style>
