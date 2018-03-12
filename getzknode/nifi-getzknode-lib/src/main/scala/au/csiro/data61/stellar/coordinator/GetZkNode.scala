package au.csiro.data61.stellar.coordinator.getzknode

import org.apache.nifi.logging.ComponentLog
import org.apache.nifi.processor.{ AbstractProcessor, ProcessContext, ProcessSession, ProcessorInitializationContext }

class GetZkNode extends AbstractProcessor {
  var logger: Option[ComponentLog] = None

  override def init(context: ProcessorInitializationContext): Unit = {
    logger = Some(context.getLogger)

    logger foreach { l => l.info("GetZkNode inited.") }
  }

  override def onTrigger(context: ProcessContext, session: ProcessSession): Unit = {
    logger foreach { l => l.info("GetZkNode triggered.") }
  }
}
