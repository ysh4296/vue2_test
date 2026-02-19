<template>
  <div class="page">
    <div ref="lottieBackground" class="lottie-background" aria-hidden="true"></div>

    <main class="container">
      <h1>Vue2 로띠 애니메이션 배경</h1>
      <p>배경에서 임의로 만든 로띠 애니메이션이 반복 재생됩니다.</p>
      <img :src="testImage" alt="테스트 이미지" class="preview-image" />
    </main>
  </div>
</template>

<script>
import testImage from './assets/test-image.svg'
import lottieData from './assets/background-lottie.json'

export default {
  name: 'App',
  data() {
    return {
      testImage,
      lottieInstance: null
    }
  },
  mounted() {
    if (!window.lottie || !this.$refs.lottieBackground) {
      console.warn('lottie-web이 로드되지 않았습니다.')
      return
    }

    this.lottieInstance = window.lottie.loadAnimation({
      container: this.$refs.lottieBackground,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    })
  },
  beforeDestroy() {
    if (this.lottieInstance) {
      this.lottieInstance.destroy()
      this.lottieInstance = null
    }
  }
}
</script>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(160deg, #061b38 0%, #153a71 50%, #0e2546 100%);
}

.lottie-background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 2rem auto;
  padding: 1.5rem;
  color: #eef5ff;
  font-family: Arial, sans-serif;
  text-align: center;
  border-radius: 16px;
  background: rgba(5, 15, 30, 0.58);
  backdrop-filter: blur(2px);
}

.preview-image {
  width: min(100%, 360px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}
</style>
