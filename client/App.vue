<template>
  <suspense>
    <template #default>
      <RouterView></RouterView>
    </template>
    <!-- <template #fallback> loading... </template> -->
  </suspense>
</template>

<script lang="ts">
  export default defineComponent({
    name: 'AppHome',
  });
</script>
