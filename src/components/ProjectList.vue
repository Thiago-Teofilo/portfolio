<template>
  <div id="project-list" class="project-list">
    <div class="section">
      <h2 class="title">Projetos</h2>
    </div>
    <div class="section grid my-5 justify-items-center">
      <div v-for="(project, i) in PROJECTS" :key="i" class="project-card">
        <a :href="project.url" target="_blank">
          <img :src="getImageUrl(project.image)" alt="" />
          <div class="project-content">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PROJECTS } from '@/utils/constants';

function getImageUrl(imageName: string) {
  return require(`@/assets/thumb/${imageName}`);
}
</script>

<style lang="postcss" scoped>
.project-card {
  @apply max-w-[60rem];
}

.project-card a {
  @apply border-2 border-solid transition-colors border-lightSecondary dark:border-secondary p-4 rounded-lg;
}

.project-card img {
  @apply rounded-lg;
}

.project-card:hover a {
  @apply border-lightSecondaryAlt dark:border-secondary-alt;
}

.project-card a {
  @apply grid md:grid-cols-2;
}

.project-card .project-content {
  @apply px-4;
}

.project-card .project-content h3 {
  @apply text-left;
}
</style>
