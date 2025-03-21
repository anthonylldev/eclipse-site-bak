// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import {configDotenv} from "dotenv";

configDotenv()

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});
