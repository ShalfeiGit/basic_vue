const SecondComponent = {
  props: {
    count: {
      type: Number,
      default: 6
    },
    customClass: {type: String, default:'no-class'}
  },
  computed: {
    doubleCount(){
      return this.count
    },
  },
  template: `<div :class="customClass">{{doubleCount}}</div>`,
};
export { SecondComponent };