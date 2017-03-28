# coding=utf-8

import re

base_url = "http://www4.nok.se/laromedel/rivstart/01.mp3"
pattern = re.compile(r"\d+.mp3")

with open('rivstart_audio_urls.txt', 'w') as f:
    for i in range(1, 193):
        if i < 10:
            f.write(pattern.sub('0' + str(i) + '.mp3', base_url))

        else:
            f.write(pattern.sub(str(i) + '.mp3', base_url))
        f.write('\n')
    f.close()
