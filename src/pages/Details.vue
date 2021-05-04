<template>
  <q-page padding>
    <div v-html="text"></div>
    <q-page-sticky
      position="top-right"
      :offset="[18, 18]"
    >
      <q-btn
        round
        color="accent"
        icon="play_arrow"
        @click="speechText()"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'detail',
  props: {
    text: {
      type: String
    }
  },
  methods: {
    speechText () {
      this.$speechTalk(window.getSelection().toString())
    }
  }
}
</script>
