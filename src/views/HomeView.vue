<template>
  <div class="home">
    <a-carousel>
      <div><h1>Pottsmasonry</h1></div>
      <div>
        <h2>Quality Without Compromise</h2>
        <p>Over the past 24 years Potts Masonry company has established itself as one of West Michigan's finest commercial and residential masonry contractors.</p>
      </div>
      <div></div>
      <div></div>
    </a-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

</script>

<style scoped>

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 80vh;
  line-height: 160px;
  background: blue;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: black;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.ant-carousel {
  height: 100%;
  position: relative;
  width: 100%;
}
</style>
