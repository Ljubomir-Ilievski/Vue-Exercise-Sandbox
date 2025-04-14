import os
import shutil

witchpart = "Part12"
os.makedirs(f'./components/ExerciseStrings/{witchpart}', exist_ok=True)

witchChapter = "Chapter12"

srcDirectory = f'C:\\Users\\iliev\\OneDrive - UKIM, FINKI\\Documents\\Petti Semestar\\Napreden Veb Dizajn\\View_from_book\\Frontend-Development-Projects-with-Vue.js-3-2-edition\\{witchChapter}'

result = os.listdir(srcDirectory)

result = [file for file in result if file.startswith("Exercise")]

for index, exercise  in enumerate(result):
    pathOfInterest = os.path.join(srcDirectory, exercise, "src")
    #print(os.listdir(pathOfInterest))
    targetDir = f'./components/ExerciseStrings/{witchpart}/Exercise0{index+1}'
    os.makedirs(targetDir)

    for root, _, files in os.walk(pathOfInterest):
        print(root, _, files)
        [shutil.copyfile(os.path.join(root, file), os.path.join(targetDir,file)) for file in files]


    print("END")


   # shutil.co()



#print(result)