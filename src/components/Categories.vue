<template>
  <div>
    <q-list>
            <q-item
              v-for="(category) in categories"
              :key="category.id"
              clickable
              v-ripple
              @click="showCategoryItems(category.slug)"
            >
              <q-item-section avatar>
                <q-avatar>
                  <img :src="category.img">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="q-pa-sm text-center bg-grey-9 text-white" :style="{'border-bottom': '5px solid ' + theme.primary}" lines="1">
                  {{ category.title }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption>
                  {{ category.time }}
                </q-item-label>
                <q-icon name="launch" color="white" />
              </q-item-section>
            </q-item>
          </q-list>
  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'CategoryComponent',
  data () {
    return {
      theme: {}
    }
  },
  mounted () {
    this.theme = this.$store.state.Theme.values
    this.setCategories()
  },
  computed: {
    ...mapState('Categories', ['categories'])
  },
  methods: {
    ...mapActions('Categories', ['setCategories']),
    showCategoryItems (slug, id) {
      if (this.$route.path.includes('/category')) {
        this.$router.push({ path: slug, params: { slug: slug } }).catch(() => {})
      } else {
        this.$router.push({ path: 'category/' + slug, params: { slug: slug } })
      }
    }
  }
}
</script>

<style>
</style>
