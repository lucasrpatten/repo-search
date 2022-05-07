import requests
import math
import time


repodb = open('../../web/database/repoDB.json', 'a+')

SEARCHSET="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
PER_PAGE=100
url="https://api.github.com/search/repositories?q={0}&sort=stars&order=asc&per_page={1}&page={2}"
i = 0
for char in SEARCHSET:
    total_count=requests.get(url.format(char, PER_PAGE, 0)).json()['total_count']
    pages=math.ceil(total_count/PER_PAGE)
    pages=pages if pages <= 2 else 2 # change 10 to a higher value for more pages
    for page in range(pages):
        print(f"{i} out of {pages * len(SEARCHSET)}")
        res=requests.get(url.format(char, PER_PAGE, page)).json()
        repodb.write(str(res) + '\n')
        i += 1
 #       for i in range(PER_PAGE):
  #          repo=res['items'][i]
   #         print("Char:{0}, Page:{1}, Item:{2}".format(char, page, i))
    #        id = repo['id']
     #       name = repo['name']
      #      full_name = repo['full_name']
       #     owner = repo['owner']['login']
        #    owner_id = repo['owner']['id']
         #   url = repo['html_url']
          #  description = repo['description']
    
            
            

            
        time.sleep(6)
repodb.close()
