SELECT
  COUNT(*) AS totalStars,
  repo.name
FROM (
  SELECT
    *
  FROM
    `githubarchive.day.2020050*`
  WHERE
    _TABLE_SUFFIX BETWEEN '1'
    AND '7' and  type = 'WatchEvent' or type='PullRequestEvent' or JSON_EXTRACT_SCALAR(payload,
                                                                         '$.pull_request.base.repo.language') = 'JavaScript' ) AS a
INNER JOIN (
  SELECT
    repo.id AS repoId
  FROM
    `githubarchive.day.2020050*`
  WHERE
    _TABLE_SUFFIX BETWEEN '1'
    AND '7'
    AND JSON_EXTRACT_SCALAR(payload,
      '$.pull_request.base.repo.language') = 'JavaScript'
    AND type='PullRequestEvent'
  GROUP BY
    repo.id) AS b
ON
  a.repo.id = b.repoId

GROUP BY
  a.repo.name
ORDER BY
  totalStars DESC
  limit  30