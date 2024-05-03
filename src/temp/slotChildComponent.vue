<template >
  <div><slot></slot>{{child}}</div>
</template>

<script >
export default {
  data(){
    return {
      child: 'child'
    }
  }
}
</script>