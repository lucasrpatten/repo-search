# Database Contributions

**THE CURRENT DATABASE IS UNOFICIAL - WE MAY END UP USING JSON OR SQL, IT IS UNDECIDED AS WE DO NOT YET HAVE A BACKEND SERVER**<br><br>
The database is the backbone of any search engine

## Setup

To get your **enviroment** ready to contribute **run** the **following commands:**</br>
`git clone https://github.com/lucasrpatten/repo-search.git # clone the repo`</br>
`cd repo-search`</br>
</br>
**After cloning:**</br>
`cd python-scripts`</br>
`pip3 install virtualenv`</br>
`python3 -m venv venv`</br>
`source venv/bin/activate`</br>
`pip install requirements.txt`</br>
</br>
**Your enviroment** is now **setup**. To install more **pip packages**, run:</br>
`pip install <package>`</br>
Before **pushing** to **git**, run:</br>
`pip freeze > requirements.txt`</br>
This will **update requirements.txt** with any **newly installed packages**.

## General DB Information

In the _python-scripts_ folder, there is a subdirectory titled _scraper_. Inside is the scraper file, **_scraper.py_**. The database is managed using
**[GitHub Search API][searchapi]**, alongisde **python requests** and **SQL**. The SQL tables are stored in the _/databases/repos.db_ file
_{though it contains both repos and users}_.

## Adding to the DB

Viewing the _scraper.py_ file, you will see use of the **[REST Search API][searchapi]** by **python requests**. To get new repos, you may change the repository
search paramaters and filters of the `url` variable. You can **sort it differently**, start somewhere else, or iterate throught different pages.
The recommendation is to use the **REST API**, but if other methods work, go for it.
The only **requirement** is to make sure it doesn't repeat values (using the default code, it shouldn't),
and add all, and only all the values in the default program. When you are done running
your scraper, **verify** the integrity of the sql file, **reset** the scraper.py file to the default, and submit a **pull request** with title **"Added values to SQLDB"**

[searchapi]: https://docs.github.com/en/rest/search
