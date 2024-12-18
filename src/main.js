import '@/style.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


// Quasar framework of VueJS
import { Quasar, QBtn,QCard } from 'quasar';
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css'; 


const app = createApp(App)
app.use(createPinia())
app.use(router)


// Quasar framework of VueJS
app.use(Quasar, {
    components: {
        QBtn, 
        QCard
      }, 
  });
app.mount('#app')
