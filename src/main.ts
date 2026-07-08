import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import '@fontsource/inter/latin-400.css'
// import '@fontsource/inter/latin-600.css'
// import '@fontsource/inter/latin-700.css'

// Option A: Geist
import '@fontsource/geist/latin-400.css'
import '@fontsource/geist/latin-600.css'
import '@fontsource/geist/latin-700.css'

// Option B: Syne
// import '@fontsource/syne/latin-400.css'
// import '@fontsource/syne/latin-600.css'
// import '@fontsource/syne/latin-700.css'
import App from './App.vue'
import router from './router/index.ts'
import './styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
