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
"export const useColorStore = defineStore(\"colorStor4\",{\n" +
"  state(){\n" +
"    return {\n" +
"      red: 0,\n" +
"      green: 0,\n" +
"      blue: 0,\n" +
"    }\n" +
"  },\n" +
"  getters: {\n" +
"    hex: (state) => {\n" +
"      return  \"#\" + Number(state.red).toString(16).padStart(2, '0') + \n" +
"      Number(state.green).toString(16).padStart(2, '0') + \n" +
"      Number(state.blue).toString(16).padStart(2, '0');\n" +
"    }\n" +
"  },\n" +
"  actions: {\n" +
"    lighten() {\n" +
"      let newHex = pSBC(0.4, this.hex);\n" +
"      // parse out hex back to dec\n" +
"      this.red = parseInt(newHex.substring(1,3), 16);\n" +
"      this.green = parseInt(newHex.substring(3,5), 16);\n" +
"      this.blue = parseInt(newHex.substring(5,), 16);\n" +
"    },\n" +
"    darken() {\n" +
"      let newHex = pSBC(-0.4, this.hex);\n" +
"      // parse out hex back to dec\n" +
"      this.red = parseInt(newHex.substring(1,3), 16);\n" +
"      this.green = parseInt(newHex.substring(3,5), 16);\n" +
"      this.blue = parseInt(newHex.substring(5,), 16);\n" +
"    }\n" +
"  }\n" +
"})\n" +
"\n" +
"// Version 4.1, credit: https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin\n" +
"const pSBC=(p,c0,c1,l)=>{\n" +
"	let r,g,b,P,f,t,h,m=Math.round,a=typeof(c1)==\"string\";\n" +
"	if(typeof(p)!=\"number\"||p<-1||p>1||typeof(c0)!=\"string\"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;\n" +
"	h=c0.length>9,h=a?c1.length>9?true:c1==\"c\"?!h:false:h,f=pSBC.pSBCr(c0),P=p<0,t=c1&&c1!=\"c\"?pSBC.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;\n" +
"	if(!f||!t)return null;\n" +
"	if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);\n" +
"	else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);\n" +
"	a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;\n" +
"	if(h)return\"rgb\"+(f?\"a(\":\"(\")+r+\",\"+g+\",\"+b+(f?\",\"+m(a*1000)/1000:\"\")+\")\";\n" +
"	else return\"#\"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)\n" +
"}\n" +
"\n" +
"pSBC.pSBCr=(d)=>{\n" +
"	const i=parseInt;\n" +
"	let n=d.length,x={};\n" +
"	if(n>9){\n" +
"		const [r, g, b, a] = (d = d.split(','));\n" +
"	        n = d.length;\n" +
"		if(n<3||n>4)return null;\n" +
"		x.r=i(r[3]==\"a\"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1\n" +
"	}else{\n" +
"		if(n==8||n==6||n<4)return null;\n" +
"		if(n<6)d=\"#\"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:\"\");\n" +
"		d=i(d.slice(1),16);\n" +
"		if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=Math.round((d&255)/0.255)/1000;\n" +
"		else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1\n" +
"	}return x\n" +
"};\n"


const PreviewColor = "<script setup>\n" +
"import { computed } from 'vue'\n" +
"import { useColorStore } from './color';\n" +
"const store = useColorStore()\n" +
"\n" +
"const previewRGB = computed(() => {\n" +
"	\n" +
"	return { \n" +
"		backgroundColor: store.hex\n" +
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
"\n" +
"	<p>\n" +
"	<button @click=\"store.darken()\">Darken</button>\n" +
"	<button @click=\"store.lighten()\">Lighten</button>\n" +
"	</p>\n" +
"	\n" +
"</div>\n" +
"\n" +
"\n" +
"</template>\n" +
"\n" +
"<style>\n" +
"label {\n" +
"	display: inline-block;\n" +
"	width: 50px;\n" +
"}\n" +
"</style>\n"


const Exercise04 = {

        name: "Exercise04",
        // AppComponent: App,

        components: {

            "App.vue": {
            name: "App.vue",
            path: "Part10/Exercise04/App.vue",
            resetCode: App
            },

            "color.js": {
            name: "color.js",
            path: "Part10/Exercise04/color.js",
            resetCode: color
            },

            "PreviewColor.vue": {
            name: "PreviewColor.vue",
            path: "Part10/Exercise04/PreviewColor.vue",
            resetCode: PreviewColor
            },

            "RGBEdit.vue": {
            name: "RGBEdit.vue",
            path: "Part10/Exercise04/RGBEdit.vue",
            resetCode: RGBEdit
            },

        }

    }

    export default Exercise04
