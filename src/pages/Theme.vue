<template>
  <div class="q-pa-md row items-start">
    <q-chip
      class="glossy"
      square
      icon="format_color_fill"
      color="dark"
      text-color="white"
    >Fundo</q-chip>
    <q-color
      v-model="theme.background"
      no-header
      no-footer
      class="my-picker"
    />
    <q-chip
      class="glossy"
      square
      icon="brush"
      color="orange"
      text-color="white"
    >Cor Primária</q-chip>
    <q-color
      v-model="theme.primary"
      no-header
      no-footer
      class="my-picker"
    />
  </div>
</template>

<script>
export default {
  name: 'Theme',
  data () {
    return {
      theme: {}
    }
  },
  mounted () {
    this.theme = this.$store.state.Theme.values
  }
}
</script>

<style>
</style>
