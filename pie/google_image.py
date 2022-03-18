from pie.word_list import food_list
from google_images_search import GoogleImagesSearch

for food in food_list:
    gis = GoogleImagesSearch('AIzaSyCo4jJU96MvuUm9wN7y_5KzyZZLMdffm4Q', '7a387b681168bfee0')

    path_to_dir = '/Users/xinyunrong/Desktop/Code/foodle/pie/images/{}'.format(food)

    _search_params = {
        'q': food,
        'num': 20,
        'fileType': 'png',
        'imgSize': 'large',
        'imgType': 'photo',
        'aspectRatio': 'square'
    }

    gis.search(search_params=_search_params)

    images = gis.results()
    for img in images:
        img.download(path_to_dir)
        img = img.resize(320, 320)

    del gis


