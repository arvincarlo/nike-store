<script setup lang="ts">
  import HomePage from './components/HomePage.vue'
  // 2 types of prop declarations

  // Runtime declarations
  // const props = defineProps({
  //   foo: {
  //     type: String,
  //     required: true,
  //   },
  //   bar: Number
  // });

  // Type-based declarations
  // const props = defineProps<{
  //   images?: string
  // }>()

  interface Props {
    images: string
  }

  // const props = defineProps<Props>()

  // using props default values
  const props = withDefaults(defineProps<Props>(), {
    images: 'hello World'
  });

  // console.log(props.images);

</script>

<template>
  <HomePage message="{{props.images}}"/>
</template>
