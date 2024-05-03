const FirstComponent = {
  props:['count'],
  computed: {
    doubleCount(){
      return this.count*this.count*this.count*this.count
    },
  },
  template: `<div>{{doubleCount}}</div>`,
};
export { FirstComponent };