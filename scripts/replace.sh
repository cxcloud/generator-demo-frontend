#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CONFIG=$DIR/$NODE_ENV.cfg
BUNDLE=$DIR/../main.*.js

echo $BUNDLE

if [ ! -f $CONFIG ]; then
  echo "NODE_ENV is not set. Exiting."
  exit 1
fi

while read var value
do
  echo $var=$value
  sed -i "s/$var:\"__PLACEHOLDER__\"/$var:$value/g" $BUNDLE
done < $CONFIG
