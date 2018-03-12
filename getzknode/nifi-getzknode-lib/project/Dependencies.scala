import sbt._

object Dependencies {
  lazy val scalaTest = "org.scalatest" %% "scalatest" % "3.0.3"
  lazy val nifi = Seq(
    "org.apache.nifi" % "nifi-api" % "1.4.0" % Provided,
    "org.apache.nifi" % "nifi-processor-utils" % "1.4.0" % Provided
  )
}
