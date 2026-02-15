<template>
  <main class="container">
    <h1>Vue2 테스트 이미지</h1>
    <p>아래는 앱에 포함한 테스트 이미지입니다.</p>
    <img :src="testImage" alt="테스트 이미지" class="preview-image" />
  </main>
</template>

<script>
import testImage from './assets/test-image.svg'

export default {
  name: 'App',
  data() {
    return {
      testImage
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: 2rem auto;
  padding: 1.5rem;
  font-family: Arial, sans-serif;
  text-align: center;
}

.preview-image {
  width: min(100%, 360px);
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}
</style>
