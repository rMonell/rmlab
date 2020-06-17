<template>
  <canvas ref="canvas" class="absolute top-0 left-0 w-full h-full"></canvas>
</template>

<script>
import * as THREE from 'three'

export default {
    data() {
        return {
            scene: new THREE.Scene()
        }
    },

    mounted() {
        const renderer = new THREE.WebGLRenderer({
            canvas: this.$refs['canvas'],
            alpha: true,
        })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)

        this.initLights()
    },

    methods: {
        initLights() {
		    const ambientlight = new THREE.AmbientLight(0xffffff, 2)
		    this.scene.add(ambientlight)
	    }
    }
}
</script>