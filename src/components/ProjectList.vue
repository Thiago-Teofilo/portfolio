<template>
  <div id="project-list" class="project-list">
    <div class="section">
      <h2 class="title">Projetos</h2>
    </div>
    <div
      class="section grid gap-4 my-5 2xl:grid-cols-3 sm:grid-cols-2 justify-items-center"
    >
      <div v-for="(project, i) in PROJECTS" :key="i" class="project-card">
        <div @click="() => handleOpenModal(project)">
          <ProjectImages
            :primary-image-name="project.image"
            :mobile-image-name="project.mobileImage"
          />
          <div class="project-content">
            <strong>{{ project.name }}</strong>
          </div>
        </div>
      </div>
    </div>
    <ProjectModal
      :is-visible="showModal"
      :project="selectedProject"
      @close="handleCloseModal"
    />
  </div>
</template>

<script lang="ts" setup>
import { IProject, PROJECTS } from '@/utils/constants';
import { ref } from 'vue';
import ProjectModal from './ProjectModal.vue';
import ProjectImages from './ProjectImages.vue';

function handleCloseModal() {
  selectedProject.value = null;
  showModal.value = !showModal.value;
}

function handleOpenModal(project: IProject) {
  selectedProject.value = project;
  showModal.value = !showModal.value;
}

const selectedProject = ref<IProject | null>(null);
const showModal = ref(false);
</script>

<style lang="postcss" scoped>
.project-card {
  @apply w-full transition-colors p-4 rounded bg-lightPrimary dark:bg-primary;
}

.project-card:hover {
  @apply bg-lightSecondary dark:bg-primary-alt dark:shadow-primary-alt;
}

.project-card strong {
  @apply w-full block my-4 text-left font-bold text-sm lg:text-lg;
}

.project-card p {
  @apply text-left my-0;
}
</style>
