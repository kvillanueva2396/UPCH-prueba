import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		Unfonts({
			google: {
				families: [
					{
						name: 'Montserrat',
						styles: 'wght@300;400;700;800',
					},
				],
			},
		}),
	],
	server: {
		port: 3000,
	},
})
