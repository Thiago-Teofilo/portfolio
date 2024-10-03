<template>
  <div id="skills" class="skills">
    <div class="section">
      <h2 class="title">Habilidades</h2>
    </div>
    <div class="section my-5 gap-4 flex flex-wrap">
      <div
        v-for="(cardData, index) in skillCards"
        :key="index"
        :class="['skill-card', cardData.logoClasses]"
      >
        <component :is="cardData.component" />
        <p class="font-bold">{{ cardData.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SKILLS } from '@/utils/constants';

const skillCards = SKILLS;
</script>

<style lang="postcss">
.skill-card {
  @apply cursor-pointer shadow-lg transition border-b-2 bg-pure-white dark:bg-secondary border-solid rounded-tr-2xl grid justify-items-center gap-2 p-4 w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)];
}

.skill-card:hover {
  @apply bg-lightSecondary dark:bg-primary;
}

.skill-card:nth-child(7) {
  @apply lg:col-start-2;
}

.skill-card:nth-child(9) {
  @apply justify-self-center mx-auto md:justify-self-start lg:justify-self-center md:ml-0 lg:mx-auto;
}

.skill-card p {
  @apply my-auto;
}
</style>
