import vue from "@vitejs/plugin-vue";
import { defineProject } from "vitest/config";

export default defineProject({
	plugins: [vue()],
	test: {
		clearMocks: true,
		environment: "jsdom",
		exclude: ["lib", "node_modules"],
		setupFiles: ["console-fail-test/setup"],
	},
});
