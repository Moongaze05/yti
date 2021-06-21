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
      <RouterLink to="profile">
        <q-img src="https://picwalls.ru/img/gallery/4/thumbs/thumb_l_29541pw.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://www.pngkit.com/png/detail/300-3004396_person-1824147-640-icon-user.png">
            </q-avatar>
            <div class="text-weight-bold">Имя Фамилия</div>
            <div>Ваш профиль</div>
          </div>
        </q-img>
      </RouterLink>
      <q-list>
        
        <q-item-label
          header
          class="text-grey-8"
        >
          Панель
        </q-item-label>
        <RouterLink
          v-for="link in links"
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

import RouterLink from 'components/RouterLink.vue'

const linksData = [
  {
    title: 'Главная',
    caption: 'Новости и квесты',
    link: '',
    icon: 'school',
  },
  {
    title: 'Форум',
    caption: 'FAQ и общение',
    link: 'forum',
    icon: 'chat',
  },
  {
    title: 'Рейтинг',
    caption: 'Рейтинговая таблица учащихся',
    link: 'rating',
    icon: 'record_voice_over',
  },
  {
    title: 'Материалы',
    caption: 'Полезные материалы для всех',
    link: 'materials',
    icon: 'rss_feed',
  },
];

export default {
  name: 'MainLayout',
  components: { RouterLink },
  data () {
    return {
      leftDrawerOpen: false,
      links: linksData
    }
  }
}
</script>
