import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      "process.env": env,
    },
    server: {
      port: 3000,
    },
  });
};
