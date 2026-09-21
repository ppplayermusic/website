import json, os, glob
for f in glob.glob('messages/*.json'):
    with open(f) as file:
        data = json.load(file)
    print(f, data.get('featureGallery', {}).get('videoTitle', 'MISSING'))
