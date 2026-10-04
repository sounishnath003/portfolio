<template>
  <article
    class="group fade-in-up bg-white p-5 transition-colors duration-200 hover:bg-gray-50 dark:bg-[#0b1220] dark:hover:bg-[#101827]"
    :style="{ animationDelay: `${props.delay}s` }"
  >
    <div class="flex items-start gap-3">
      <a :href="normalizedLinkedin" target="_blank" rel="noopener noreferrer" class="shrink-0">
        <img
          class="size-9 rounded-full ring-1 ring-gray-200 transition-all duration-200 group-hover:ring-blue-400 dark:ring-gray-700 dark:group-hover:ring-yellow-400"
          :src="props.endorsement.avatar"
          :alt="props.endorsement.name"
        />
      </a>

      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px]">
          <a
            :href="normalizedLinkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="font-semibold text-gray-900 hover:underline dark:text-gray-100"
          >
            {{ handle }}
          </a>
          <span class="text-gray-400">commented on</span>
          <span
            class="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
          >
            <img
              class="h-3.5 w-3.5 object-contain"
              :src="props.endorsement.companyLogo"
              :alt="props.endorsement.company"
            />
            {{ props.endorsement.company }}
          </span>
        </div>

        <blockquote class="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {{ props.endorsement.endorsement }}
        </blockquote>

        <p class="mt-3 font-mono text-[11px] text-gray-400">
          {{ props.endorsement.name }} · {{ props.endorsement.workBio }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Endorsement {
  company: string;
  companyLogo: string;
  endorsement: string;
  avatar: string;
  name: string;
  workBio: string;
  linkedin: string;
}

interface Props {
  endorsement: Endorsement;
  size?: "small" | "medium" | "large";
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  delay: 0,
});

const handle = computed(
  () =>
    "@" +
    props.endorsement.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ".")
      .replace(/^\.+|\.+$/g, ""),
);

const normalizedLinkedin = computed(() =>
  props.endorsement.linkedin.replace(/^https\/\//, "https://"),
);
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.45s ease-out forwards;
}

@media (prefers-reduced-motion: reduce) {
  .fade-in-up {
    animation: none;
    opacity: 1;
  }
}
</style>
