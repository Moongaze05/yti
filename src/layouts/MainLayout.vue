<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="lt-md">
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
      <router-link to="profile">
        <q-img src="https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://www.pngkit.com/png/detail/300-3004396_person-1824147-640-icon-user.png">
            </q-avatar>
            <div class="text-weight-bold">Имя Фамилия</div>
            <div>Ваш профиль</div>
          </div>
        </q-img>
      </router-link>
      <q-list>

        <q-item-label
          header
          class="text-grey-8"
        >
          Панель навигации
        </q-item-label>
        <RLink
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

import RLink from 'components/RLink.vue'

const linksData = [
  {
    title: 'Главная',
    caption: 'Новости и квесты',
    link: '/',
    icon: 'home',
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
    icon: 'trending_up',
  },
  {
    title: 'Материалы',
    caption: 'Полезные материалы для всех',
    link: 'materials',
    icon: 'article',
  },
];

export default {
  name: 'MainLayout',
  components: { RLink },
  data () {
    return {
      leftDrawerOpen: false,
      links: linksData
    }
  }
}
</script>
