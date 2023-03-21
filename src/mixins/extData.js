export default function () {
  return {
    methods: {
      ISetExtData({ key, val }) {
        if (this[key]) {
          console.error('________setExtData exist', key, val);
        }
        this[key] = val;
      },
      IGetExtData(key) {
        return this[key];
      },
    },
  };
}
