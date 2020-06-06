CREATE TABLE `fh-bigquery.github_extracts.201912_repo_lang_stars`
AS
  SELECT repo.name
    , MAX(CAST(JSON_EXTRACT_SCALAR(payload, '$.pull_request.base.repo.stargazers_count')AS INT64)) stars
    , JSON_EXTRACT_SCALAR(payload, '$.pull_request.base.repo.language') lang
  FROM `githubarchive.month.201912`
  WHERE type='PullRequestEvent'
  GROUP by repo.name, lang


CREATE TABLE `fh-bigquery.github_extracts.201912_repo_lang_stars` AS   SELECT
    repo.name     ,
    MAX(CAST(JSON_EXTRACT_SCALAR(payload,
    '$.pull_request.base.repo.stargazers_count')AS INT64)) stars     ,
    JSON_EXTRACT_SCALAR(payload,
    '$.pull_request.base.repo.language') lang
FROM
    `githubarchive.month.201912`
WHERE
    type='PullRequestEvent'
GROUP by
    repo.name,
    lang   # 28.1 sec elapsed,
    161.7 GB processed ;