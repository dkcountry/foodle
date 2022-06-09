import os
from PIL import Image

path = os.getcwd()
folder_path = os.path.join(path, 'images')
standard_size = (320, 320)


for f in os.listdir(folder_path)[5:]:
    food = f.strip('_')
    im_path = os.path.join(folder_path, f, food + '.png')
    new_path = os.path.abspath(os.path.join(folder_path, '..', '..', 'src/assets', food + '.png'))
    print(food)
    print(new_path)
    try:
        im = Image.open(im_path)
        im.save(new_path)
    except Exception as e:
        print(e)
