<template>
  <div id="project-list" class="project-list">
    <div class="section">
      <h2 class="title">Projetos</h2>
    </div>
    <div class="section grid gap-4 my-5 justify-items-center">
      <div v-for="(project, i) in PROJECTS" :key="i" class="project-card">
        <a :href="project.url" target="_blank">
          <div :class="['images p-4 rounded', project.imageWrapperClasses]">
            <img :src="getImageUrl(project.image)" alt="" />
            <img
              v-if="project.mobileImage"
              :src="getImageUrl(project.mobileImage)"
              :class="[project.imageClasses]"
              alt=""
            />
          </div>
          <div class="project-content">
            <h4>{{ project.name }}</h4>
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
  @apply w-[calc(50%-1rem)] transition-colors border border-solid border-lightSecondary dark:border-secondary p-4 rounded-lg bg-lightSecondary dark:bg-secondary;
}

.project-card:hover {
  @apply border-lightSecondaryAlt dark:border-secondary-alt;
}

.project-card img {
  @apply rounded;
}

.project-card .images {
  @apply relative;
}

.project-card img:last-child {
  @apply absolute w-20 bottom-1 right-1 border-4 border-solid;
}

.project-card h4 {
  @apply text-left mb-2;
}

.project-card p {
  @apply mt-0;
}
</style>
