import os
from PIL import Image

path = os.getcwd()
folder_path = os.path.join(path, 'images')
standard_size = (320, 320)


for f in os.listdir(folder_path):
    try:
        # '_' is the marker of images that needed to resized
        if '_' in f:
            food = f.strip('_')
            im_path = os.path.join(folder_path, f, food + '.png')

            im = Image.open(im_path)
            width, height = im.size

            # cropping
            if (width / height) > 1.5:
                width_crop = width * 0.1
                left = width_crop
                right = width - width_crop
                im = im.crop((left, 0, right, height))
            elif (height / width) > 1.5:
                height_crop = height * 0.1
                top = height_crop
                bottom = height - height_crop
                im = im.crop((0, top, width, bottom))

            #resize
            width, height = im.size
            print(food, width, height)
            im = im.resize(standard_size)
            im.save(im_path)
        else:
            im_path = os.path.join(folder_path, f, f + '.png')
            im = Image.open(im_path)
            width, height = im.size
            print(f, width, height)
    except Exception as e:
        print(e)
