<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close">
        <IoClose />
      </button>
      <div>
        <ProjectImages
          :primary-image-name="project.image"
          :mobile-image-name="project.mobileImage"
        />
      </div>
      <div class="grid md:grid-cols-2 md:gap-4">
        <div class="md:text-left">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
        </div>
        <div class="grid gap-6 mt-10 mx-auto lg:mr-0 max-w-72">
          <ProjectLinks
            v-if="project.url"
            :href="project.url"
            text="Projeto em produção"
          />
          <ProjectLinks
            v-if="project.backendRepositoryUrl"
            :href="project.backendRepositoryUrl"
            link-type="github"
            text="Repositório do backend"
          />
          <ProjectLinks
            v-if="project.frontendRepositoryUrl"
            :href="project.frontendRepositoryUrl"
            link-type="github"
            text="Repositório do frontend"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { IProject } from '@/utils/constants';
import ProjectImages from './ProjectImages.vue';
import ProjectLinks from './ProjectLink.vue';
import { IoClose } from 'vue3-icons/io5';

defineProps<{
  isVisible: boolean;
  project: IProject;
}>();

const emit = defineEmits<{
  (event: 'close'): void;
}>();

function close() {
  emit('close');
}
</script>

<style lang="postcss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  @apply bg-lightPrimary lg:max-w-[50rem] md:max-w-[40rem] max-w-[20rem] sm:max-w-[35rem] rounded absolute dark:bg-primary mx-10 px-4 py-8 lg:px-8 lg:py-16;
}
.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  background: none;
  cursor: pointer;
  @apply text-xl;
}
</style>
