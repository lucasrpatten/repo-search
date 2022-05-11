#!/bin/bash
BASEDIR=$(dirname $0)
npx prettier --check $BASEDIR/../.
echo "Are there files to fix, and if so, would you like to do it automatically? (y/n)"
read
if [ "$REPLY" == "yes" ] || [ "$REPLY" == "y" ]
then
  npx prettier --write *
elif [ "$REPLY" == "no" ] || [ "$REPLY" == "n" ]
then
  echo "Alright gottit bruh I won't fix it for you then fine"
else
  echo "Input Error - Allowed inputs are yes, no, y, and n"
fi
