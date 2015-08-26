#!/bin/bash
cd ui_automation_copy

#download and start sauce connect
curl -O https://saucelabs.com/downloads/sc-latest-linux.tar.gz
tar -xzf sc-latest-linux.tar.gz
cd sc-*-linux && ./bin/sc -u meaghanlewis -k cc32e901-ac33-49e1-8f8f-2aa3ccc8ea4a > /dev/null 2>&1 &

# Clean and build the project
mvn clean compile
mvn -Dtest=SmokeTestSuite test