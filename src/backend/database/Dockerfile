FROM postgres:16

RUN mkdir -p /tmp/psql_data/

COPY ./sample_db.tar /tmp/psql_data/
COPY ./init_docker_postgres.sh /docker-entrypoint-initdb.d/
