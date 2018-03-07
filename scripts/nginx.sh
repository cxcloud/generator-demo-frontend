#!/bin/bash

/usr/share/nginx/html/config/replace.sh

nginx -g 'daemon off;'
