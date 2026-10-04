<template>
  <div class="mx-auto w-full max-w-5xl">
    <Hero />
    <Telemetry />
    <SelectedSystems />
    <StackDump />
    <Recommendation />
    <GetInTouch />
  </div>
</template>

<script setup lang="ts">
import GetInTouch from "./GetInTouch.vue";
import Hero from "./Hero.vue";
import Recommendation from "./Recommendation.vue";
import SelectedSystems from "./SelectedSystems.vue";
import StackDump from "./StackDump.vue";
import Telemetry from "./Telemetry.vue";
</script>
