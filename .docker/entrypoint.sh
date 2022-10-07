#!/bin/sh

yarn knex migrate:latest
yarn start:dev
