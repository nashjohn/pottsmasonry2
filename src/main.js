import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAddressBook, faBars, faHouseUser, faImage, faTrowelBricks, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* antdesign */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


/* add icons to the library */
library.add(faUserSecret)
library.add(faInstagram)
library.add(faHouseUser)
library.add(faTrowelBricks)
library.add(faImage)
library.add(faAddressBook)
library.add(faBars)

createApp(App).use(store).use(Antd).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
