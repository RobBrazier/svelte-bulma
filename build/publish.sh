#!/usr/bin/env bash
npm run build
dirs=$(ls -d src/*/ | sed -e 's/src\/\([a-zA-Z]*\)\/$/\1/g')
for dir in $dirs; do echo cp -r ./src/$dir .; done
npm publish
for dir in $dirs; do echo rm -rf ./$dir; done
