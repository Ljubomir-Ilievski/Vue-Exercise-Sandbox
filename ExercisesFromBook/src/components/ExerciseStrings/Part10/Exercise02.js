import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const App = "<script setup>\n" +
"import RGBEdit from './RGBEdit.vue'\n" +
"import PreviewColor from './PreviewColor.vue'\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"<h1>Color Editor</h1>\n" +
"\n" +
"<p>\n" +
"Use the sliders below to set the red, green, and blue values for a color.\n" +
"</p>\n" +
"\n" +
"<div class=\"twocol\">\n" +
"	<RGBEdit></RGBEdit>\n" +
"	<PreviewColor></PreviewColor>\n" +
"</div>\n" +
"</template>\n" +
"\n" +
"<style>\n" +
".twocol {\n" +
"	display: grid;\n" +
"	grid-template-columns: 1fr 1fr;\n" +
"	column-gap: 10px;\n" +
"}\n" +
"</style>\n"


const color = "import { defineStore } from 'pinia'\n" +
"\n" +
"export const useColorStore = defineStore(\"colorStore2\",{\n" +
"  state(){\n" +
"    return {\n" +
"      red: 0,\n" +
"      green: 0,\n" +
"      blue: 0,\n" +
"    }\n" +
"  }\n" +
"})\n"


const PreviewColor = "<script setup>\n" +
"import { computed } from 'vue'\n" +
"import { useColorStore } from './color';\n" +
"const store = useColorStore()\n" +
"\n" +
"const previewRGB = computed(() => {\n" +
"	\n" +
"	return { \n" +
"		backgroundColor: \"#\" + Number(store.red).toString(16).padStart(2, '0') + \n" +
"		Number(store.green).toString(16).padStart(2, '0') + \n" +
"		Number(store.blue).toString(16).padStart(2, '0')\n" +
"	}\n" +
"});\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"<div>\n" +
"	<h2>Preview Color</h2>\n" +
"	<div class=\"previewColor\" :style=\"previewRGB\"></div>\n" +
"	<p>\n" +
"	CSS color string: {{ previewRGB.backgroundColor }}\n" +
"	</p>\n" +
"</div>\n" +
"</template>\n" +
"\n" +
"<style>\n" +
".previewColor {\n" +
"	width: 250px;\n" +
"	height: 250px;\n" +
"}\n" +
"</style>\n"


const RGBEdit = "<script setup>\n" +
"import { useColorStore } from './color';\n" +
"const store = useColorStore()\n" +
"</script>\n" +
"\n" +
"<template>\n" +
"<div>\n" +
"	<h2>Edit RGB</h2>\n" +
"	<label for=\"red\">Red</label> <input type=\"range\" min=\"0\" max=\"255\" id=\"red\" v-model=\"store.red\"><br/>\n" +
"	<label for=\"green\">Green</label> <input type=\"range\" min=\"0\" max=\"255\" id=\"green\" v-model=\"store.green\"><br/>\n" +
"	<label for=\"blue\">Blue</label> <input type=\"range\" min=\"0\" max=\"255\" id=\"blue\" v-model=\"store.blue\"><br/>\n" +
"</div>\n" +
"</template>\n" +
"\n" +
"<style>\n" +
"label {\n" +
"	display: inline-block;\n" +
"	width: 50px;\n" +
"}\n" +
"</style>\n"


const Exercise02 = {

        name: "Exercise02",
        // AppComponent: App,

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part10/Exercise02/App.vue",
            resetCode: App
            },

            "color.js": {
            name: "color.js",
            path: "Part10/Exercise02/color.js",
            resetCode: color
            },

            "PreviewColor.vue": {
            name: "PreviewColor.vue",
            path: "Part10/Exercise02/PreviewColor.vue",
            resetCode: PreviewColor
            },

            "RGBEdit.vue": {
            name: "RGBEdit.vue",
            path: "Part10/Exercise02/RGBEdit.vue",
            resetCode: RGBEdit
            },

        }

    }

    export default Exercise02
