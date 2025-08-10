<template>
    <div class="flex flex-col items-center justify-around">
        <div class="text-lg font-medium text-gray-900 dark:text-white">Worked at&colon;</div>
        <div class="flex items-center gap-6 justify-evenly">
            <div v-for="exp in workExperiences">
                <img :src="exp.image" :alt="exp.companyName" class="w-24 md:w-48">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Load all the .png images from the directory orgs in assets directory
const imageModules = import.meta.glob('../../assets/orgs/*.png', { eager: true });

interface WorkExperience {
    companyName: string
    imageName: string
    image?: string
};


const workExperiences = ref<WorkExperience[]>([
    {
        companyName: 'Oracle',
        imageName: 'oracle.png',
    },
    {
        companyName: 'Tata Consultancy Services (TCS)',
        imageName: 'tcs.png',
    },
    {
        companyName: 'Crio.do',
        imageName: 'crio.png',
    },
]);
onMounted(() => {
    workExperiences.value.forEach(exp => {
        const imagePath = `../../assets/orgs/${exp.imageName}`
        const imageModule = imageModules[imagePath] as { default: string }
        if (imageModule) {
            exp.image = imageModule.default
        }
    })
})
</script>