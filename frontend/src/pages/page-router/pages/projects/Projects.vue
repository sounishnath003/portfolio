<template>
  <Motion is="p" :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.5 }"
    class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 hidden md:block">
    &bull; Things I’ve made trying to put my dent in the universe.
  </Motion>

  <div class="space-y-6 mt-8">
    <Motion v-for="(project, index) in Portfolio.projectsPage.projects" :key="index" class="w-full"
      :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }"
      :transition="{ delay: index * 0.1, duration: 0.5 }">
      <ProjectCard :project="project" />
    </Motion>
  </div>

  <!-- GitHub Repositories Section -->
  <Motion
    is="section"
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ delay: 0.4, duration: 0.5 }"
    class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
  >
    <h2
      class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-6 flex items-center gap-3"
    >
      <CodeBracketSquareIcon class="w-6 h-6" />
      Open Source / GitHub
    </h2>
    
    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse">
      <div v-for="i in 4" :key="i" class="h-32 rounded-2xl bg-gray-200 dark:bg-gray-800"></div>
    </div>

    <div v-else-if="error" class="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
      Failed to load GitHub repositories.
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a
        v-for="repo in repos"
        :key="repo.id"
        :href="repo.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="group p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div class="flex justify-between items-start mb-2">
          <h3 class="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ repo.name }}
          </h3>
          <div class="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            <StarIcon class="w-3 h-3" />
            {{ repo.stargazers_count }}
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4 h-10">
          {{ repo.description || 'No description available' }}
        </p>
        <div class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
          <span class="flex items-center gap-1">
            <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: getLanguageColor(repo.language) }"></span>
            {{ repo.language || 'Unknown' }}
          </span>
          <span>Updated {{ new Date(repo.updated_at).toLocaleDateString() }}</span>
        </div>
      </a>
    </div>
  </Motion>

  <div class="mb-5"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Portfolio } from "../../../portfolioDatabase";
import ProjectCard from "./ProjectCard.vue";
import { Motion } from "motion-v";
import { StarIcon, CodeBracketSquareIcon } from "@heroicons/vue/24/outline";

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

const repos = ref<GitHubRepo[]>([]);
const loading = ref(true);
const error = ref(false);

const getLanguageColor = (lang: string) => {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Vue: "#41b883",
    Python: "#3572A5",
    Go: "#00ADD8",
    HTML: "#e34c26",
    CSS: "#563d7c",
  };
  return colors[lang] || "#8b9bb4";
};

onMounted(async () => {
  try {
    const response = await fetch("https://api.github.com/users/sounishnath003/repos?sort=pushed&per_page=6");
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    repos.value = data;
  } catch (e) {
    console.error(e);
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>
