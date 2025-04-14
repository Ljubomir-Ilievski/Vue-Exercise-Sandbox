import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const app = "<template>\n" +
  "  <Exercise />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Exercise from \"./Exercise1-06.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Exercise,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"

const exercise = "<script setup>\n" +
  "const interests = [\n" +
  "  {\n" +
  "    title: \"TV\",\n" +
  "    favorites: [\"Designated Survivor\", \"Spongebob\"],\n" +
  "  },\n" +
  "  {\n" +
  "    title: \"Games\",\n" +
  "    favorites: [\"CS:GO\"],\n" +
  "  },\n" +
  "  {\n" +
  "    title: \"Sports\",\n" +
  "    favorites: [],\n" +
  "  },\n" +
  "];\n" +
  "</script>\n" +
  "<template>\n" +
  "  <div>\n" +
  "    <h1>Looping through array of objects</h1>\n" +
  "    <ul>\n" +
  "      <li v-for=\"(item, n) in interests\" :key=\"n\">\n" +
  "        {{ item.title }}\n" +
  "        <ol v-if=\"item.favorites.length > 0\">\n" +
  "          <li v-for=\"(fav, m) in item.favorites\" :key=\"m\">\n" +
  "            {{ fav }}\n" +
  "          </li>\n" +
  "        </ol>\n" +
  "      </li>\n" +
  "    </ul>\n" +
  "  </div>\n" +
  "</template>"

const ExerciseObject06 = {


  name: "Exercise06",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part01/Exercise06/App.vue",
      resetCode: app
    },

    "Exercise.vue": {
      name: "Exercise.vue",
      path: "Part01/Exercise06/Exercise1-06.vue",
      resetCode: exercise
    },

  }


}

export default ExerciseObject06;
