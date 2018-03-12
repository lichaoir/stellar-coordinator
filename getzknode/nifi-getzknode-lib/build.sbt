import Dependencies._

lazy val root = (project in file(".")).
  settings(
    inThisBuild(List(
      organization := "au.csiro.data61.stellar.coordinator",
      scalaVersion := "2.12.4",
      version      := "0.1-SNAPSHOT"
    )),
    name := "nifi-getzknode-lib",
    libraryDependencies ++=
      nifi :+
      scalaTest % Test,
    publishTo := Some(Resolver.file("file", new File("../nifi-getzknode-processors/libs")))
  )
