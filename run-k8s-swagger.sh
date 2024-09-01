#!/bin/bash

docker run --rm \
  -p 9000:8080 \
  -e SWAGGER_JSON=/k8s-openapi-v2.json \
  -v "$(pwd)/k8s-openapi-v2.json:/k8s-openapi-v2.json" \
  swaggerapi/swagger-ui
