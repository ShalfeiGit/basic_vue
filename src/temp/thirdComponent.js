const ThirdComponent = {
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
  },
  
  template: `<div>
  <div>
    <input type="text" v-model="count" disabled/>
    </div>
    <input type="button" @click="removeItem(count, $event)" value="Удалить item"></input>
    </div>`,
};
export { ThirdComponent };