<template>
  <div class="home">
    <NavBar />
    <Welcome />
    <Resume />
    <Skills />
    <ProjectList />
  </div>
</template>

<script lang="ts" setup>
import Welcome from '@/components/Welcome.vue';
import Resume from '@/components/Resume.vue';
import Skills from '@/components/Skills.vue';
import NavBar from '@/components/NavBar.vue';
import ProjectList from '@/components/ProjectList.vue';
</script>

<style lang="postcss">
.home {
  @apply w-full grid gap-14 py-16 lg:gap-48 lg:py-48 mx-auto;
}

.home,
.navbar .content {
  @apply px-5 lg:w-[60rem] 2xl:w-[80rem];
}
</style>
