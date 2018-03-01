module.exports = {
  'etops/couchbase:nightly': 'docker-stack-deploy.sh couchbase/docker-compose.yml couchbase',
  'etops/elasticsearch:nightly': 'docker-stack-deploy.sh elasticsearch/docker-compose.yml elasticsearch',
  'etops/ow-back:merckx-nightly': 'docker-stack-deploy.sh backend/docker-compose.yml backend',
  'etops/dcp-event-rabbitmq:nightly': 'docker-stack-deploy.sh backend/docker-compose.yml backend',
  'etops/dockup:nightly': 'docker-stack-deploy.sh backend/docker-compose.yml instant-backup',
  'etops/nectar-thumbnail:nightly': 'docker-stack-deploy.sh document-services/docker-compose.yml ds',
  'etops/tika-server:nightly': 'docker-stack-deploy.sh document-services/docker-compose.yml ds',
  'etops/ow-front:nightly': 'docker-stack-deploy.sh frontend/docker-compose.yml frontend',
  'etops/ow-optimiser-back:nightly': 'docker-stack-deploy.sh optimiser/docker-compose.yml optimiser',
  'etops/rabbitmq:nightly': 'docker-stack-deploy.sh rabbitmq/docker-compose.yml rabbitmq',
  'etops/nectar-toolbox:nightly': 'docker-stack-deploy.sh workers/docker-compose.yml toolbox'
}