<template>
  <section class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-0 -z-10 opacity-20" />
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16" />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <div class="flex items-center justify-center gap-3 mb-2">
        <img class="h-20 w-20 object-contain rounded-full" :src="props.endorsement.companyLogo" alt="Company Logo" />
        <p class="text-2xl font-medium">{{ props.endorsement.company }}</p>
      </div>
      <figure class="mt-10">
        <blockquote
          class="text-center text-xl/8 font-medium leading-tight text-gray-700 dark:text-gray-300 sm:text-2xl/9">
          <p>“{{ props.endorsement.endorsement.slice(0, 274) }}”</p>
        </blockquote>
        <figcaption class="mt-10">
          <img class="mx-auto size-16 rounded-full grayscale contrast-125 bg-black" :src="props.endorsement.avatar"
            alt="" />
          <a :href="props.endorsement.linkedin" target="_blank" class="hover:underline">
            <div class="mt-4 flex items-center justify-center space-x-3 text-base dark:text-gray-200">
              <div>
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" class="w-4 dark:invert"
                  :alt="props.endorsement.name" />
              </div>
              <div class="font-semibold text-gray-900 dark:text-gray-300">
                {{ props.endorsement.name }}
              </div>
              <span class="">&bull;</span>
              <div class="text-gray-600 dark:text-gray-400">{{ props.endorsement.workBio }}</div>
            </div>
          </a>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Endorsement {
  company: string;
  companyLogo: string;
  endorsement: string;
  avatar: string;
  name: string;
  workBio: string;
  linkedin: string;
}

const props = defineProps<{ endorsement: Endorsement }>();
</script>
