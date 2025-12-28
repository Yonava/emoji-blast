import { initializeKonamiEmojiBlast } from "konami-emoji-blast";
import { onMounted } from "vue";
// import { useEffect } from "react";

// export const useKonamiEmojiBlast = (onActivate?: () => void) => {
// 	useEffect(() => {
// 		return initializeKonamiEmojiBlast(onActivate);
// 	}, [onActivate]);
// };

export const useKonamiEmojiBlast = (onActivate?: () => void) => {
	onMounted(() => {
		return initializeKonamiEmojiBlast(onActivate);
	});
};
