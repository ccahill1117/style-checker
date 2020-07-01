<template>
  <div>
    <input type="text" placeholder="hi">
    <button v-on:click="upNum">make number big</button>
    <p>{{num}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    upNum() {
      this.num = this.num + 1
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
