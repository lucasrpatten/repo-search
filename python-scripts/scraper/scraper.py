import requests
import math
import time
import sqlite3

repodb = open('../../database/repoDB.json', 'a+')

SEARCHSET="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
PER_PAGE=1
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
        for i in range(PER_PAGE):
            repo=res['items'][i]
            print("Char:{0}, Page:{1}, Item:{2}".format(char, page, i))
            id = repo['id']
            node_id = repo['node_id']
            name = repo['name']
            full_name = repo['full_name']
            private = repo['private']
            html_url = repo['html_url']
            description = repo['description']
            fork = repo['fork']
            url=repo['url']
            tags = requests.get(repo['tags_url'])
            forks_url = repo['forks_url']
            keys_url = repo['keys_url']
            collaborators_url = repo['collaborators_url']
            teams_url = repo['teams_url']
            hooks_url = repo['hooks_url']
            issue_events_url = repo['issue_events_url']
            events_url = repo['events_url']
            assignes_url = repo['assignes_url']
            branches_url = repo['branches_url']
            tags_url = repo['tags_url']
            blobs_url = repo['blobs_url']
            git_tags_url = repo['git_tags_url']
            git_refs_url = repo['git_refs_url']
            trees_url = repo['trees_url']
            statuses_url = repo['statuses_url']
            languages_url = repo['languages_url']
            languages = requests.get(languages_url)
            stargazers_url = repo['stargazers_url']
            contributors_url = repo['contributors_url']
            subscribers_url = repo['subscribers_url']
            subscription_url = repo['subscription_url']
            commits_url = repo['commits_url']
            git_commits_url = repo['git_commits_url']
            issue_comment_url = repo['issue_comment_url']
            contents_url = repo['contents_url']
            compare_url = repo['contents_url']
            merges_url = repo['merges_url']
            archive_url = repo['archive_url']
            downloads_url = repo['downloads_url']
            issues_url = repo['issues_url']
            issues = requests.get(issues_url.strip('{/number}'))
            pulls_url = repo['pulls_url']
            milestones_url = repo['milestones_url']
            notifications_url = repo['notifications_url']
            labels_url = repo['labels_url']
            releases_url = repo['releases_url']
            deployments_url = repo['deployments_url']
            created_at = repo['created_at']
            pushed_at = repo['pushed_at']
            git_url = repo['git_url']
            ssh_url = repo['ssh_url']
            clone_url = repo['clone_url']
            svn_url = repo['svn_url']
            homepage = repo['homepage']
            size = repo['size']
            stargazers_count = repo['stargazers_count']
            watchers_count = repo['watchers_count']
            language = repo['language']
            has_issues = repo['has_issues']
            has_projects = repo['has_projects']
            has_downloads = repo['has_downloads']
            has_wiki = repo['has_wiki']
            has_pages = repo['has_pages']
            forks_count = repo['forks_count']
            mirror_url = repo['mirror_url']
            archived = repo['archived']
            disabled = repo['disabled']
            open_issues_count = repo['open_issues_count']
            license = repo['license']
            license_key = license['key']
            license_name = license['name']
            allow_forking = repo['allow_forking']
            is_template = repo['is_template']
            topics = repo['topics']
            visibility = repo['visibility']
            forks = repo['forks']
            open_issues = repo['open_issues']
            watchers = repo['watchers']
            default_branch = repo['default_branch']
            temp_clone_token = repo['temp_clone_token']
            network_count = repo['network_count']
            subscribers_count = repo['subscribers_count']
            score = repo['score']
            # Owner DB Stuff
            owner = repo['owner']
            owner_login = owner['login']
            owner_id = owner['id']
            owner_node_id = owner['node_id']
            owner_avatar_url = owner['avatar_url']
            owner_gravatar_id = owner['gravatar_id']
            owner_url = owner['url']
            owner_html_url = owner['html_url']
            owner_followers_url = owner['followers_url']
            owner_following_url = owner['following_url']
            owner_gists_url = owner['gists_url']
            owner_starred_url = owner['starred_url']
            owner_subscriptions_url = owner['subscriptions_url']
            owner_organizations_url = owner['organizations_url']
            owner_repos_url = owner['repos_url']
            owner_events_url = owner['events_url']
            owner_received_events_url = owner['received_events_url']
            owner_type = owner['type']
            owner_site_admin = owner['site_admin']

    
            
            

            
repodb.close()
