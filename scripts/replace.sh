#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $DIR/../main.*.bundle.js

while read var value
do
  echo $var=$value
  sed -i "s/$var:\"__PLACEHOLDER__\"/$var:$value/g" $DIR/../main.*.bundle.js
done < $DIR/$NODE_ENV.cfg
