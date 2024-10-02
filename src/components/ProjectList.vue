<template>
  <div id="project-list" class="project-list">
    <div class="section">
      <h2 class="title">Projetos</h2>
    </div>
    <div class="section grid gap-4 my-5 justify-items-center">
      <div
        v-for="(project, i) in PROJECTS"
        :key="i"
        :class="['project-card', `border-[${project.brandColor}]`]"
      >
        <a :href="project.url" target="_blank">
          <div :class="['images', project.imageWrapperClasses]">
            <img :src="getImageUrl(project.image)" alt="" />
            <img
              :src="getImageUrl(project.mobileImage)"
              :class="[project.imageClasses]"
              alt=""
            />
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
  @apply w-full border-b-2 border-solid sm:w-[calc(50%-1rem)] 2xl:w-[calc(33.3%-1rem)] transition-colors p-4 rounded-t bg-lightSecondary dark:bg-secondary;
}

.project-card:hover {
  @apply bg-lightPrimary dark:bg-primary;
}

.project-card .images {
  @apply relative p-4 pl-1 pr-5 rounded;
}

.project-card img {
  @apply rounded;
}

.project-card img:last-child {
  @apply absolute w-[23%] -bottom-0 right-0 border-4 border-solid;
}

.project-card strong {
  @apply text-left w-full block my-4 font-bold;
}

.project-card p {
  @apply mt-0 text-left;
}
</style>
