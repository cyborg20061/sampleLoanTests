#!/bin/bash
cd ui_automation_copy

#download and start sauce connect
curl -O https://saucelabs.com/downloads/sc-latest-linux.tar.gz
tar -xzf sc-latest-linux.tar.gz
cd sc-*-linux && ./bin/sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -B *.meetearnest.com > /dev/null 2>&1 &

# Clean and build the project
mvn clean compile
mvn -Dtest=SmokeTestSuite test