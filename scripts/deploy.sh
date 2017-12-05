#!/bin/bash
pwd
npm install -g now --slient
npm run build
now --token=$NOW_TOKEN --team=$NOW_TEAM
now alias --token=$NOW_TOKEN --team=$NOW_TEAM
