import { createApp } from 'vue'
import App from '@/App.vue'
import router, { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupAntd } from '@/plugins/index'
import { useMock } from '../mock/index'

if (import.meta.env.DEV) useMock()

const app = createApp(App)
setupAntd(app)
setupStore(app)
setupRouter(app)
router.isReady().then(() => app.mount('#app'))
