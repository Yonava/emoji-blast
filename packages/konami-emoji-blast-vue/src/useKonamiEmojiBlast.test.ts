import { fireEvent, render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import { useKonamiEmojiBlast } from "./useKonamiEmojiBlast";

const Host = {
	setup() {
		const stop = useKonamiEmojiBlast();
		return { stop };
	},
	template: `<button @click="stop">Stop</button>`,
};

describe("useKonamiEmojiBlast", () => {
	it("increments", async () => {
		render(Host);

		const btn = screen.getByRole<HTMLButtonElement>("button");
		expect(btn).toBeDefined();

		expect(btn.textContent).toBe("0");
		await fireEvent.click(btn);
		expect(btn.textContent).toBe("2");
	});
});
