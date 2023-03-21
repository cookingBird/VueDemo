import Vue from 'vue';

export default {
  install(vue) {
    const EventBus = new Vue();
    if (!Object.hasOwnProperty.call(vue, '$event')) {
      Object.defineProperty(vue.prototype, '$event', {
        get() {
          return EventBus;
        },
        set(val) {
          console.error("can't set $event", val);
        },
      });
    } else if (!Object.hasOwnProperty.call(vue, '$bus')) {
      Object.defineProperty(vue.prototype, '$bus', {
        get() {
          return EventBus;
        },
        set(val) {
          console.error("can't set $bus", val);
        },
      });
    } else {
      console.error('Registry $event / $bus error; vue already exist;');
    }
  },
};
