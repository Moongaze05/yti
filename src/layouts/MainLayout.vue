<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          ЮИД России
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <a href="profile">
        <q-img src="https://picwalls.ru/img/gallery/4/thumbs/thumb_l_29541pw.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://www.pngkit.com/png/detail/300-3004396_person-1824147-640-icon-user.png">
            </q-avatar>
            <div class="text-weight-bold">Имя Фамилия</div>
            <div>Ваш профиль</div>
          </div>
        </q-img>
      </a>
      <q-list>
        
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Главная',
    caption: 'Новости и квесты',
    icon: 'school',
    link: ''
  },
  {
    title: 'Форум',
    caption: 'FAQ и общение',
    icon: 'chat',
    link: 'forum'
  },
  {
    title: 'Рейтинг',
    caption: 'Рейтинговая таблица учащихся',
    icon: 'record_voice_over',
    link: 'rating'
  },
  {
    title: 'Материалы',
    caption: 'Полезные материалы для всех',
    icon: 'rss_feed',
    link: 'materials'
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
