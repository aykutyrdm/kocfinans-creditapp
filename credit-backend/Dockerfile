FROM maven:3.6-jdk-11 AS build  
COPY src /usr/src/app/src  
COPY pom.xml /usr/src/app  
RUN mvn -f /usr/src/app/pom.xml clean package -DskipTests=true

FROM adoptopenjdk/openjdk11:alpine-jre
COPY --from=build /usr/src/app/target/*.jar /usr/app/app.jar  
EXPOSE 8080  
ENTRYPOINT ["java","-jar","/usr/app/app.jar"]