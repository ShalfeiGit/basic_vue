<template >
  <div>
    <div class="background-div">
      <input class="background-div__test" type="text" :value="count" disabled/>
    </div>
    <input type="button" @click="removeItem(count, $event)" value="Удалить item"/>
  </div>
</template>

<script >
export default {
  props: {
    items: {
      type: Array,
      default: []
    },
    count: Number,
  },
  methods:{
    removeItem(count, event){
      this.$emit('remove-item', {count, event})
    }
  },
  computed: {
    thirdCount(){
      return this.items.map(item => ({value: `Count: ${item}`}) )
    }
  }
}
</script>
<style lang="scss">
.background-div{
  background-color: red;
  &__test{
    background-color: blue;
  }
}
</style>