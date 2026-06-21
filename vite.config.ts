import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

const routes = [
  '/',
  '/about',
  '/services',
  '/services/security-surveillance',
  '/services/connectivity-infrastructure',
  '/services/cybersecurity',
  '/services/compute-cloud',
  '/services/smart-building-power',
  '/services/integrated-software',
  '/industries',
  '/why-siala',
  '/contact',
]

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes,
      renderer: new PuppeteerRenderer({
        maxConcurrentRoutes: 2,
        renderAfterTime: 5000,
        navigationOptions: {
          timeout: 60000,
        },
        launchOptions: {
          executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
      }),
    }),
  ],
})
