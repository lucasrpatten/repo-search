#!/bin/bash
npm run prettyjs
npm run deploy
BASEDIR=$(dirname $0)
git add BASEDIR/../.
git status
echo 'commit? (y/n)'
read
if [ "$REPLY" == "yes" ] || [ "$REPLY" == "y" ]
then
  echo "\n"
elif [ "$REPLY" == "no" ] || [ "$REPLY" == "n" ]
then
  echo "alrighty"
  exit 1
else
  echo "Input Error - Allowed inputs are yes, no, y, and n">&2
fi
echo 'commit message: '
read
git commit -m "$REPLY" && git push
