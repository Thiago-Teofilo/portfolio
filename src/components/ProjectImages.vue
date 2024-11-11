<template>
  <div
    class="relative p-4 pl-2 pr-6 rounded bg-lightSecondary dark:bg-primary-alt"
  >
    <img
      class="rounded lg:w-[40rem]"
      :src="getImageUrl(primaryImageName)"
      alt=""
    />
    <img
      class="absolute max-w-[23%] rounded lg:w-[9rem] bottom-2 right-1 border-4 border-solid border-lightSecondary dark:border-primary-alt"
      :src="getImageUrl(mobileImageName)"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  primaryImageName: string;
  mobileImageName: string;
}>();

function getImageUrl(imageName: string) {
  return require(`@/assets/thumb/${imageName}`);
}
</script>
