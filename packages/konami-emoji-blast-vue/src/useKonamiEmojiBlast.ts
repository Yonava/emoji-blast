import { initializeKonamiEmojiBlast } from "konami-emoji-blast";
import { onBeforeUnmount, onMounted } from "vue";

/**
 * @returns Function that stops emojis when called.
 */
export const useKonamiEmojiBlast = (onActivate?: () => void) => {
	let stop = () => {
		/* empty */
	};

	onMounted(() => {
		stop = initializeKonamiEmojiBlast(onActivate);
	});

	onBeforeUnmount(stop);

	return stop;
};
