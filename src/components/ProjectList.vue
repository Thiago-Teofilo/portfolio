<template>
  <div id="project-list" class="project-list">
    <div class="section">
      <h2 class="title">Projetos</h2>
    </div>
    <div
      class="section grid gap-4 my-5 2xl:grid-cols-3 sm:grid-cols-2 justify-items-center"
    >
      <div v-for="(project, i) in PROJECTS" :key="i" class="project-card">
        <a :href="project.url" target="_blank">
          <div class="images">
            <img :src="getImageUrl(project.image)" alt="" />
            <img :src="getImageUrl(project.mobileImage)" alt="" />
          </div>
          <div class="project-content">
            <strong>{{ project.name }}</strong>
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
  @apply w-full transition-colors p-4 rounded bg-lightPrimary dark:bg-primary;
}

.project-card:hover {
  @apply bg-lightSecondary dark:bg-primary-alt dark:shadow-primary-alt;
}

.project-card .images {
  @apply relative p-4 pl-2 pr-6 rounded bg-lightSecondary dark:bg-primary-alt;
}

.project-card img {
  @apply rounded;
}

.project-card img:last-child {
  @apply absolute w-[23%] bottom-2 right-1 border-4 border-solid border-lightSecondary dark:border-primary-alt;
}

.project-card strong {
  @apply w-full block my-4 text-left font-bold text-sm lg:text-lg;
}

.project-card p {
  @apply text-left my-0;
}
</style>
