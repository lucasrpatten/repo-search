"""
thanks to https://github.com/jonmoshier/get-all-repos/blob/master/git_repos.py for the code
"""

import requests
import math
import time
import sqlite3



conn = sqlite3.connect('../../databases/repos.db')

SEARCHSET="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
PER_PAGE=100
url="https://api.github.com/search/repositories?q={0}&sort=stars&order=desc&per_page={1}&page={2}"

for char in SEARCHSET:
    total_count=requests.get(url.format(char, PER_PAGE, 0)).json()['total_count']
    pages=math.ceil(total_count/PER_PAGE)
    pages=pages if pages <= 10 else 10
    for page in range(pages):
        res=requests.get(url.format(char, PER_PAGE, page)).json()
        for i in range(PER_PAGE):
            print("Char:{0}, Page:{1}, Item:{2}".format(char, page, i))
            repo=res['items'][i]
            owner_id = repo['owner']['id']
            owner_login = repo['owner']['login']
            owner_html_url = repo['owner']['html_url']
            
            c=conn.cursor()
            c.execute("""INSERT OR IGNORE INTO User VALUES (?, ?, ?);""", (owner_id, owner_login, owner_html_url))
            conn.commit()
            
            d=conn.cursor()
            
            repo_id = repo['id']
            repo_name = repo['name']
            repo_full_name = repo['full_name']
            repo_html_url = repo['html_url']
            repo_description = repo['description']
            repo_created_at = repo['created_at']
            repo_updated_at = repo['updated_at']
            repo_size = repo['size']
            repo_forks_count = repo['forks_count']
            repo_open_issues_count = repo['open_issues_count']
            repo_watchers_count = repo['watchers_count']
            repo_stargazers_count = repo['stargazers_count']
            repo_language = repo['language']
            repo_has_issues = repo['has_issues']
            repo_has_downloads = repo['has_downloads']
            repo_has_wiki = repo['has_wiki']
            repo_has_pages = repo['has_pages']
            
            d.execute("""INSERT OR IGNORE INTO Repos VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);""",(repo_id,owner_id, repo_name, repo_full_name, repo_html_url, repo_description, repo_created_at, repo_updated_at, repo_size, repo_forks_count, repo_open_issues_count, repo_watchers_count, repo_stargazers_count, repo_language, repo_has_issues, repo_has_wiki, repo_has_pages))
            conn.commit()
        time.sleep(6)
        
conn.close()
#id, name, full_name, html_url, description, created_at, updated_at, size,forks_count, open_issues_count, watchers_count, stargazers_count ,language, has_issues, has_downloads, has_wiki, has_pages, owner->[login, id, html_url]

# load into sqltable -> id unique_id, name, url, etc..
# if unique id exists, skip
