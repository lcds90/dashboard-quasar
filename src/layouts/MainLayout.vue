<template>
  <div
    class="app"
    :style="{height: '100vh', 'background-color': theme.background}"
  >
    <q-layout
      view="lHh Lpr lFf"
      class="app__layout shadow-3"
      container
    >
      <q-header>
        <q-toolbar
          class="toolbar"
          :style="{'background-color': theme.accent}"
        >
          <q-btn
            round
            flat
            icon="keyboard_arrow_left"
            class="app__drawer-open q-mr-sm"
            @click="leftDrawerOpen = true"
          />

          <q-btn
            round
            flat
            class="q-pa-md"
            to="/"
            @click="setTitleHome"
          >
            <q-avatar
              size="100px"
              :style="{'background-color': theme.secondary}"
              class="cursor-pointer"
            >
              <img src="img/icone.png" />
            </q-avatar>
          </q-btn>

          <span class="q-subtitle-1 q-pa-md">
            <span v-text="title" :style="{'background-color': theme.secondary, 'padding': '5px'}">
            </span>
            &nbsp;
            <div v-text="subtitle" :style="{'background-color': theme.dark, 'padding': '5px'}">
            </div>
          </span>

        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :breakpoint="690"
      >
        <q-toolbar :style="{'background-color': theme.accent}">
          <q-btn
            round
            flat
            icon="control_point_duplicate"
          >
            <q-menu
              auto-close
              :offset="[-50, -48]"
            >
              <q-list
                style="min-width: 150px"
                class="bg-grey-3"
              >
                <q-item
                  class="bg-green-1"
                  clickable
                >
                  <q-item-section>
                    <q-btn
                      icon="add_circle_outline"
                      class="bg-green-1 text-green q-pa-sm"
                    >&nbsp;Nova Nota</q-btn>
                  </q-item-section>
                </q-item>
                <q-item
                  class="bg-green-1"
                  clickable
                >
                  <q-item-section>
                    <q-btn
                      icon="add_circle_outline"
                      class="bg-green-1 text-green q-pa-sm"
                    >&nbsp;Novo Caderno</q-btn>
                  </q-item-section>
                </q-item>
                <q-item
                  class="bg-blue-1"
                  clickable
                >
                  <q-item-section>
                    <q-btn
                      icon="source"
                      class="bg-blue-1 text-blue q-pa-sm"
                    >&nbsp;Arquivados</q-btn>
                  </q-item-section>
                </q-item>
                <q-item
                  class="bg-red-1"
                  clickable
                >
                  <q-item-section>
                    <q-btn
                      icon="favorite"
                      class="bg-red-1 text-red q-pa-sm"
                    >&nbsp;Favoritos</q-btn>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn
            round
            flat
            icon="close"
            class="app__drawer-close"
            @click="leftDrawerOpen = false"
          />
          <q-space />
          <q-btn
            round
            flat
            icon="palette"
            @click="themeSwitcher()"
          />
        </q-toolbar>

        <q-toolbar class="bg-grey-5 q-py-lg shadow-12">
          <q-input
            rounded
            outlined
            dense
            class="app__field full-width"
            bg-color="white"
            v-model="search"
            placeholder="Pesquisar termo"
          >
            <template slot="prepend">
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar>

        <q-scroll-area
          :style="{'height': 'calc(100% - 138px)', 'background-color': theme.dark}"
        >
          <Categories />
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="bg-grey-4">
        <router-view />
      </q-page-container>

    </q-layout>
  </div>
</template>

<script>
import Categories from '../components/Categories.vue'

export default {
  name: 'MainLayout',
  components: {
    Categories
  },
  data () {
    return {
      theme: {},
      title: '',
      subtitle: '',
      leftDrawerOpen: false,
      search: '',
      message: '',
      currentConversationIndex: 0,
      conversations: [
        {
          id: 1,
          person: 'Razvan Stoenescu',
          avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
          caption: "I'm working on Quasar!",
          time: '15:00',
          sent: true
        },
        {
          id: 2,
          person: 'Dan Popescu',
          avatar: 'https://cdn.quasar.dev/team/dan_popescu.jpg',
          caption: "I'm working on Quasar!",
          time: '16:00',
          sent: true
        },
        {
          id: 3,
          person: 'Jeff Galbraith',
          avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
          caption: "I'm working on Quasar!",
          time: '18:00',
          sent: true
        },
        {
          id: 4,
          person: 'Allan Gaunt',
          avatar: 'https://cdn.quasar.dev/team/allan_gaunt.png',
          caption: "I'm working on Quasar!",
          time: '17:00',
          sent: true
        }
      ]
    }
  },
  mounted () {
    this.theme = this.$store.state.Theme.values
    this.title = 'Bem vindo'
    this.subtitle = 'Dashboard de estudos'
  },
  methods: {
    themeSwitcher (themeConfig) {
      if (this.$route.path !== '/theme') {
        this.$router.push({ name: 'theme' })
        this.title = 'Editor de Temas'
        this.subtitle = 'Escolha o seu tema'
      }
    },
    setTitleHome () {
      this.title = 'Bem vindo'
      this.subtitle = 'Dashboard de estudos'
    }
  },
  computed: {
    currentConversation () {
      return this.conversations[this.currentConversationIndex]
    }
  }
}
</script>

<style>
.app {
  width: 100%;
  height: 100%;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  transition: background 0.5s ease;
}

.app.dark {
  background: black;
}
.app:before {
  content: "";
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  transform: rotate(120deg);
}
.app__layout {
  margin: 0 auto;
  z-index: 4000;
  height: 100%;
  width: 95%;
  border-radius: 25px;
}
.app__field.q-field--outlined .q-field__control:before {
  border: none;
}
.q-drawer--standard .app__drawer-close {
  display: none;
}

@media (max-width: 850px) {
  .app {
    padding: 0;
  }
  .app__layout {
    width: 100%;
    border-radius: 0;
  }

  #bar {
    width: 100vw;
  }
}
@media (min-width: 691px) {
  .app__drawer-open {
    display: none;
  }
  .conversation__summary {
    margin-top: 4px;
  }
  .conversation__more {
    margin-top: 0 !important;
    font-size: 1.4rem;
  }
}
</style>
