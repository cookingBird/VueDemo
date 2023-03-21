
<template>
  <div ref="scene" class="w-full h-full"></div>
</template>

<script>
/*global THREE */

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      scene: null,
      camera: null,
      render: null,
      cube: null,
    };
  },
  async mounted() {
    await this.$nextTick();
    setTimeout(() => {
      this.bootstrap();
    });
  },
  methods: {
    async bootstrap() {
      const dom = this.$refs.scene;
      const style = getComputedStyle(dom);
      let width = Number(style.width.replace('px', ''));
      let height = Number(style.height.replace('px', ''));
      await this.createScene();
      await this.createCamera(width, height);
      await this.createRenderer(width, height);
      this.$refs.scene.appendChild(this.render.domElement);
      await this.createCube();
      this.scene.add(this.cube);
      this.camera.position.z = 5;
      this.Animation();
    },
    createScene() {
      this.scene = new THREE.Scene();
      return Promise.resolve(this.scene);
    },
    createCamera(width, height) {
      this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      return Promise.resolve(this.camera);
    },
    createRenderer(width, height) {
      this.render = new THREE.WebGLRenderer();
      this.render.setSize(width, height);
      return Promise.resolve(this.render);
    },
    createCube() {
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new THREE.Mesh(geometry, material);
      return Promise.resolve(this.cube);
    },
    Animation() {
      requestAnimationFrame(this.Animation);
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.render.render(this.scene, this.camera);
    },
  },
};
</script>
