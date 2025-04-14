import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'

const appCode = "<template>\n" +
  "  <Activity />\n" +
  "</template>\n" +
  "\n" +
  "<script>\n" +
  "import Activity from \"./Activity3-01.vue\";\n" +
  "\n" +
  "export default {\n" +
  "  components: {\n" +
  "    Activity,\n" +
  "  },\n" +
  "};\n" +
  "</script>\n"


const activity = "<template>\n" +
  "  <div class=\"container\">\n" +
  "    <h1>Activity 3.01</h1>\n" +
  "    <div>\n" +
  "      <input \n" +
  "        type=\"text\" \n" +
  "        placeholder=\"First name\" \n" +
  "        id=\"fname\"\n" +
  "        v-model= \"fname\" />\n" +
  "      <input \n" +
  "        type=\"text\" \n" +
  "        id=\"lname\"\n" +
  "        placeholder=\"Last name\" \n" +
  "        v-model= \"lname\" />\n" +
  "    </div>\n" +
  "    <div>\n" +
  "      <p>Full name: {{ fullName }}</p>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "</template>\n" +
  "<script>\n" +
  "export default {\n" +
  "  name: 'Activity3-01',\n" +
  "  data() {\n" +
  "    return {\n" +
  "      fname: '',\n" +
  "      lname: '',\n" +
  "    }\n" +
  "  },\n" +
  "  computed: {\n" +
  "    fullName() {\n" +
  "      return `${this.fname} ${this.lname}`\n" +
  "    },\n" +
  "  },\n" +
  "}\n" +
  "</script>\n" +
  "<style>\n" +
  ".container {\n" +
  "  margin: 0 auto;\n" +
  "  padding: 30px;\n" +
  "  max-width: 600px;\n" +
  "}\n" +
  "input {\n" +
  "  padding: 10px 6px;\n" +
  "  margin: 20px 10px 10px 0;\n" +
  "}\n" +
  "\n" +
  "</style>\n"

const Activity01 = {


  name: "Activity01",
  components: {

    [App_Name]: {
      name: App_Name,
      path: "Part03/Activity01/App.vue",
      resetCode: appCode
    },
    "Activity3-01": {
      name: "Activity3-01",
      path: "Part03/Activity01/Activity3-01",
      resetCode: activity
    },

  }


}

export default Activity01;
