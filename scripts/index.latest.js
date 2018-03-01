module.exports = {
  'etops/couchbase:latest': 'docker-stack-deploy.sh couchbase/docker-compose.yml couchbase',
  'etops/elasticsearch:latest': 'docker-stack-deploy.sh elasticsearch/docker-compose.yml elasticsearch',
  'etops/ow-back:merckx-latest': 'docker-stack-deploy.sh backend/docker-compose.yml backend',
  'etops/dcp-event-rabbitmq:latest': 'docker-stack-deploy.sh backend/docker-compose.yml backend',
  'etops/dockup:latest': 'docker-stack-deploy.sh backend/docker-compose.yml instant-backup',
  'etops/nectar-thumbnail:latest': 'docker-stack-deploy.sh document-services/docker-compose.yml ds',
  'etops/tika-server:latest': 'docker-stack-deploy.sh document-services/docker-compose.yml ds',
  'etops/ow-front:latest': 'docker-stack-deploy.sh frontend/docker-compose.yml frontend',
  'etops/ow-optimiser-back:latest': 'docker-stack-deploy.sh optimiser/docker-compose.yml optimiser',
  'etops/rabbitmq:latest': 'docker-stack-deploy.sh rabbitmq/docker-compose.yml rabbitmq',
  'etops/nectar-toolbox:latest': 'docker-stack-deploy.sh workers/docker-compose.yml toolbox'
}