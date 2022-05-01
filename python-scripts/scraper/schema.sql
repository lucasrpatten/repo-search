drop table if exists User;
drop table if exists Repos;
create table User (
    id INTEGER PRIMARY KEY,
    login TEXT,
    url text
    );
create table Repos (
    id INTEGER PRIMARY KEY,
    owner_id INTEGER,
    name text,
    full_name text,
    url text,
    description text,
    created_at text,
    updated_at text,
    size integer,
    forks_count integer,
    open_issues_count integer,
    watchers_count integer,
    stargazers_count integer,
    language text,
    has_issues text,
    has_wiki text,
    has_pages text,
    FOREIGN KEY (owner_id) REFERENCES User(id)
    );
