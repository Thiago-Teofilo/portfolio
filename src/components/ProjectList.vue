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
  @apply shadow-[0_-1px_1px_1px] shadow-lightSecondary dark:shadow-secondary w-full border-b-2 border-solid sm:w-[calc(50%-1rem)] 2xl:w-[calc(33.3%-1rem)] transition-colors p-4 rounded-t bg-lightPrimary dark:bg-primary;
}

.project-card:hover {
  @apply bg-lightSecondary dark:bg-secondary;
}

.project-card .images {
  @apply relative p-4 pl-2 pr-6 rounded;
}

.project-card img {
  @apply rounded;
}

.project-card img:last-child {
  @apply absolute w-[23%] bottom-2 right-1 border-4 border-solid;
}

.project-card strong {
  @apply w-full block my-2 font-secondary text-left font-bold text-sm lg:text-lg;
}

.project-card p {
  @apply text-left my-0;
}
</style>
