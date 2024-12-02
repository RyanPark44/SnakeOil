#! /bin/bash

DATABASE_NAME=snakeoil_db
DB_DUMP_LOCATION="/tmp/psql_data/sample_db.tar"

echo "*** CREATING DATABASE ***"

psql -c "CREATE DATABASE "$DATABASE_NAME";"
#psql -c "GRANT ALL PRIVILEGES ON "$DATABASE_NAME" TO postgres;" 

pg_restore -U postgres -d $DATABASE_NAME $DB_DUMP_LOCATION 

echo "*** DATABASE CREATED! ***"