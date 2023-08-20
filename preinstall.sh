#!/bin/sh

# We don't want to use public npm package, 
# so our solution was to use git submodules.

# Instead of backend committing the sdk, we make
# the frontend run `npm i` instead.

# Initialize submodule
git submodule init && git submodule update --remote &&

# Build nestia sdk
cd nestia-demo && npm install && npm run build:sdk
cd packages/api && npm run compile && cd ../../..

# Install
npm install $(npm pack nestia-demo/packages/api |  tail -1)
rm -rf ./**.tgz # change to explicit?