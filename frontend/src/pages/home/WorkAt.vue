<template>
  <div
    class="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-900/60"
  >
    <p class="font-mono text-[11px] tracking-widest text-gray-400">hosts</p>
    <span class="hidden text-gray-300 sm:inline dark:text-gray-700">│</span>
    <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-6 gap-y-3">
      <img
        v-for="exp in workExperiences"
        :key="exp.companyName"
        v-show="exp.image"
        :src="exp.image"
        :alt="exp.companyName"
        class="h-6 w-auto max-w-[6.5rem] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-7 sm:max-w-[8rem] dark:brightness-110"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const imageModules = import.meta.glob("../../assets/orgs/*.png", {
  eager: true,
});

interface WorkExperience {
  companyName: string;
  imageName: string;
  image?: string;
}

const workExperiences: WorkExperience[] = [
  { companyName: "Microsoft", imageName: "microsoft.png" },
  { companyName: "Oracle", imageName: "oracle.png" },
  { companyName: "Tata Consultancy Services (TCS)", imageName: "tcs.png" },
  { companyName: "Crio.do", imageName: "crio.png" },
].map((exp) => {
  const imageModule = imageModules[`../../assets/orgs/${exp.imageName}`] as
    | { default: string }
    | undefined;
  return { ...exp, image: imageModule?.default };
});
</script>
