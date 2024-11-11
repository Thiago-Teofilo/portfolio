<template>
  <div
    class="h-10 cursor-pointer transition dark:hover:text-[rgb(0,0,0)] dark:hover:bg-tertiary hover:bg-tertiary rounded flex bg-lightSecondary dark:bg-secondary px-4 py-2 gap-4 justify-between items-center"
  >
    <GitHubIcon v-if="linkType === 'github'" />
    <PiPlay v-else />
    <a class="text-right" :href="href" target="_blank">{{ text }}</a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { GitHubIcon } from 'vue3-simple-icons';
import { PiPlay } from 'vue3-icons/pi';

withDefaults(
  defineProps<{
    linkType?: 'github' | 'production';
    href: string;
    text: string;
  }>(),
  {
    linkType: 'production',
  }
);
</script>

<style lang="postcss" scoped>
svg {
  @apply h-full w-max;
}
</style>
