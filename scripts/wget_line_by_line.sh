# @Author:    Anas Aboureada
# @Date:      Fri Mar 24 2017 16:52:34
# @Email:     me@anasaboureada.com
# @License:   MIT License
# @Copyright: Copyright (c) 2017 Anas Aboureada

#!/usr/bin/env bash
while IFS='' read -r line || [[ -n "$line" ]]; do
    wget $line  -P ~/projects/anas/code/automation/scrap_imdb_movies_pics/posters/ &
done < "$1"
