import { compileScript, parse } from '@vue/compiler-sfc'
import { defineComponent } from 'vue'


export const compileVueComponent2 = (component) => {
  const { descriptor } = parse(component.code)

  const script = descriptor.script ? compileScript(descriptor, { id: "dynamic" }) : null;

  let componentConfig = {};

  if (script) {
    let scriptContent = script.content.replace(/export\s+default/, "return");

    if (component.dependencies !== undefined) {

    let dependencies = component.dependencies()

      try {
        componentConfig = new Function(component.stringDependencies, scriptContent)(...dependencies);
      } catch (error) {
        console.error("Error evaluating component script:", error);
        return null;
      }

    }
    else{

      try {
        componentConfig = new Function(scriptContent)();
      } catch (error) {
        console.error("Error evaluating component script:", error);
        return null;
      }

    }

  }

  return defineComponent({
    ...componentConfig,
    template: descriptor.template.content,
  });
}
