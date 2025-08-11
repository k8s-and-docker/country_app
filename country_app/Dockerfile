FROM gradle:jdk17-jammy AS build
COPY --chown=gradle:gradle . /home/country_app/gradle/src
WORKDIR /home/country_app/gradle/src
RUN gradle build --no-daemon

FROM openjdk:17-jdk-slim

ENV server.port=9200
ENV datasource.url='jdbc:postgresql://host.docker.internal:5432/postgres'
ENV datasource.user='postgres'
ENV datasource.password="Deadspace345hd2@"

ENV mongo.host='host.docker.internal'
ENV mongo.port=27017
ENV mongo.database='mongo'

RUN mkdir /app
COPY --from=build /home/country_app/gradle/src/build/libs/*.jar /app/country_api-1.0.0.jar

ENTRYPOINT ["java", "-jar", "/app/country_api-1.0.0.jar"]