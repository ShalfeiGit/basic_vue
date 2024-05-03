<template >
  <div :style="{ overflow: 'hidden'}">
  <div ><slot name="parent"></slot>parent</div>
  <Transition name="fade">
    <div v-show="showChild"><slot name="child1"></slot></div>
  </Transition>
  <Transition   
    enter-active-class="animate__animated animate__bounceInLeft"
    leave-active-class="animate__animated animate__bounceOutLeft"
  >
    <div v-show="showChild"><slot name="child2"></slot></div>
  </Transition>
  </div>
  <button @click="toggleChild">Показать ребенка с анимацией</button>
</template>

<script >
export default {
  props:['showChild'],
  methods: {
    toggleChild(){
      this.$emit('toggle-child', {showChild: !this.showChild})
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
