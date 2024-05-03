import { createApp, ref } from 'vue/dist/vue.esm-bundler';
import {FirstComponent}  from './temp/firstComponent.js';
import {SecondComponent}  from './temp/secondComponent.js';
import {ThirdComponent}  from './temp/thirdComponent.js';
import CustomComponent  from './temp/customComponent.vue';
import SlotChildComponent  from './temp/slotChildComponent.vue';
import SlotParentComponent  from './temp/slotParentComponent.vue';
import 'animate.css';

createApp({
  components: {
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CustomComponent,
    SlotChildComponent,
    SlotParentComponent,
  },
  data(){
    return {
      count: 0,
      asyncCount: 0,
      watchCount: 0,
      items: [1, 2, 3, 4, 5 ],
      color: 'red',
      door: false,
      wheel: true,
      customClasses1: {firstClass: true, secondClass: false},
      customClasses2: ['firstClass', 'secondClass'],
      defaultMargin: 40,
      showChild: true
    }
  },
  computed: {
    computedMargin(){
      return  { marginBottom: this.defaultMargin + 'px'}
    },
    computedMargin(){
      return  { marginBottom: this.defaultMargin + 'px'}
    },
    customClasses3(){
      return {'thirstClass': true, ...this.customClasses1}
    },
    doubleCount(){
      return this.count*this.count
    },
    cubeCount(){
      return this.doubleCount*this.count
    },
  },
  watch: {
    asyncCount(){
      this.watchCount= this.asyncCount
    }
  },
  methods: {
    toggleChild({showChild}){
      this.showChild = showChild
    },
    increment(e) {
      this.count = e.target.value;
    },
    async asyncIncrement(e) {
      this.asyncCount = await new Promise((resolve, reject) => setTimeout(() =>  resolve(e.target.value), 1000));
    },
    notifyItem(i){
     alert(i)
    },
    removeItem({count, event}){
      this.items = this.items.filter(item => item !== count)
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    this.$refs.first.focus() // ссылка на dom element
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  beforeUnmount(){
    console.log('beforeUnmount')
  },
  unmounted(){
    console.log('unmounted')
  }
}).mount('#app')