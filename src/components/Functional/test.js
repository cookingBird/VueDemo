export const AuthTest = {
  functional: true,
  props: {
    isShow: {
      type: Boolean,
      require: true,
    },
  },
  render(h, ctx) {
    console.log('_________________functional component', ctx);
    const { props, scopedSlots } = ctx;
    return props.isShow ? scopedSlots.default() : null;
  },
};
