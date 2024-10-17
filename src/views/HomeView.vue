<template>
  <div class="home">
    <NavBar />
    <main>
      <Welcome />
      <Resume />
      <Skills />
      <ProjectList />
    </main>
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
  @apply w-full mx-auto;
}

.home main {
  @apply mt-8 lg:mt-16;
}

.home main > div {
  @apply pt-16 lg:pt-24;
}

.home,
.navbar .content {
  @apply !pt-0 px-5 lg:w-[60rem] 2xl:w-[80rem];
}
</style>
