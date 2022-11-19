#!/usr/bin/env sh

## run tdd tests
cd tdd || { echo "Cannot find path /tdd"; exit 1;}
mvn test || { echo "Test failed for 'tdd' project "; exit 1;}
cd .. || { echo "Cannot go back from /tdd"; exit 1;}

## run dsa tests
cd dsa || { echo  "Cannot find path /dsa"; exit 1;}
mvn test || { echo "Test failed for 'dsa' project"; exit 1;}
cd .. || { echo "Cannot go back from /dsa"; exit 1;}