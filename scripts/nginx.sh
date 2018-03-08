#!/bin/bash

chmod +x /usr/share/nginx/html/config/replace.sh
/usr/share/nginx/html/config/replace.sh

nginx -g 'daemon off;'
