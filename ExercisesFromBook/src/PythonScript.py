import shutil
import os

witchPart = "Part11"
os.makedirs(f'./components/ExerciseStrings/{witchPart}',exist_ok=True)
srcDirectory = f'C:\\Users\\iliev\\OneDrive - UKIM, FINKI\\Documents\\Petti Semestar\\Napreden Veb Dizajn\\Project\\Exercises_with_server\\src\\components\\ExerciseStrings\\{witchPart}'

def createscript(filepath):
    filepath = os.path.join(os.curdir, "components", "ExerciseStrings", witchPart, filepath + ".js",)
    with open(filepath, 'w') as f:
        pass  # This just creates an empty file

def writeToScript(sourceDirName, variable):
    ExerciseObjectPath = os.path.join(os.curdir, "components", "ExerciseStrings", witchPart, sourceDirName + ".js")
    ExerciseCodePath = os.path.join(srcDirectory, sourceDirName, variable)

   # print(ExerciseObjectPath)
   # print(ExerciseCodePath)

    with open(ExerciseCodePath, "r") as source, open(ExerciseObjectPath, "a") as destination:
        variable = os.path.splitext(variable)[0]
        destination.write("const " + variable + " = ")
        destination.writelines([('"' + line.replace("\n", "").replace('"', '\\"') + '\\n"' + ' +\n') for line in source])
        destination.write("\n")
        destination.write("\n")




#print(os.walk(srcDirectory))
first = True
for srcDir, directory, files in os.walk(srcDirectory):
    if first:
        first = False
        #[createscript(filepath) for filepath in directory]
        continue

    sourceDirName = srcDir.split("\\")[-1]
    #print(destinationDir)
    ExerciseObjectPath = os.path.join(os.curdir, "components", "ExerciseStrings", witchPart, sourceDirName + ".js")

    with open(ExerciseObjectPath, "a") as destination:
        destination.write("import { App_Name } from '@/components/ExerciseStrings/SomeConsts/consts.js'")
        destination.write("\n\n")

    [writeToScript(sourceDirName , variable) for variable in files]


    with open(ExerciseObjectPath, "a") as destination:
        destination.write(f'''const {sourceDirName} = {{ 
    
        name: "{sourceDirName}",
        // AppComponent: App,
    
        components: {{
    ''')
        for file in files:
            destination.write(f'''
            "{file}": {{
            name: "{file}",
            path: "{witchPart}/{sourceDirName}/{file}",
            resetCode: {os.path.splitext(file)[0]}
            }},
            ''')


        destination.write(f'''
        }}
            
    }}    
    
    export default {sourceDirName}
    ''')
