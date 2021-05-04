<template>
  <q-page class="container">
    <div class="row q-pa-sm">
      <div
        class="col-4 q-mb-xl"
        v-for="(post, index) in posts"
        :key="index"
      >
        <q-card class="q-pa-none q-ma-none text-center bg-grey-2">
          <img
            :src="post.jetpack_featured_media_url"
            style="max-height:15rem"
          >

          <q-card-section>
            <span class="text-h6">{{post.title}}</span>
            <br>
            <div class="text-subtitle bg-grey-2" v-html="post.body"></div>
          </q-card-section>

          <q-card-actions class="absolute-bottom bg-grey-9">
            <q-btn
              class="full-width text-white"
              :style="{'background-color': theme.primary}"
              @click="detail(post.body)"
            >Ver Post</q-btn>
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      theme: {}
    }
  },
  mounted () {
    this.theme = this.$store.state.Theme.values
    this.setPosts()
  },
  computed: {
    ...mapState('Posts', ['posts'])
  },
  methods: {
    ...mapActions('Posts', ['setPosts']),
    detail (content) {
      this.$router.push({ name: 'detail', params: { text: content } })
    }
  }
}
</script>

<style scoped>
  .q-card {
    position: relative;
    min-height:25vh;
    max-width:22vw;
  }

  @media only screen and (max-width: 600px) {
    .q-card {
    position: relative;
    min-height:30vh;
    min-width:30vw;
  }

  .q-card__section {
  word-wrap: break-word;
  overflow: hidden;
  text-align:justify;
  };
  }
</style>
