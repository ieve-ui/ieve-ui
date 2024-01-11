import App from "../ieve/index";
import Home from "../ieve/components/home.vue"
import type { Theme } from "vitepress";

import { define } from "../utils/types"

export default define<Theme>({
    Layout: App
})