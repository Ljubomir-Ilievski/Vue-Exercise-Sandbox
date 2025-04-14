<script>
export default {
  props: ['component']
}
</script>

<template>

  <div>
  <component class="dynamicComponent" :is="component" />
  </div>

</template>

<style scoped>

#file-tabs {
  border-width: 1px;
  border-color: navajowhite;
  background-color: #F78764;

}
.dynamicComponent {
  border-top: 2px solid #F78764;
}

</style>
