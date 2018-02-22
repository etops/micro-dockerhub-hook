#!/bin/bash

docker stack deploy -c /srv/$1 $2 --with-registry-auth
