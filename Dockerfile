###########################################################
#
# Dockerfile for micro-dockerhub-hook
#
###########################################################

# Setting the base to nodejs 8
FROM mhart/alpine-node:8

#### Begin setup ####

# Installs docker
RUN apk add --update --no-cache docker py-pip
RUN apk add bash bash-doc bash-completion
RUN pip install docker-compose

# Extra tools for native dependencies
# RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV SERVER_PORT 3999
ENV TOKEN abc123
# ENV DEBUG DISABLE

# Expose 3999
EXPOSE 3999

# Startup
ENTRYPOINT npm start
