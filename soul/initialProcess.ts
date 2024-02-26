import { externalDialog, mentalQuery } from "socialagi";
import { MentalProcess, useActions, useProcessManager, useProcessMemory } from "soul-engine";
import correct from "./mentalProcesses/correct.js";

const gainsTrustWithTheUser: MentalProcess = async ({ step: initialStep }) => {
  const volume = useProcessMemory(10)
  const { speak, log, scheduleEvent } = useActions()
  const { setNextProcess } = useProcessManager()

  const { stream, nextStep } = await initialStep.next(
    externalDialog("Talk to the user trying to gain trust and learn about their inner world."),
    { stream: true, model: "quality" }
  );
  speak(stream);

  // increase volume in 10s

  const lastStep = await nextStep
  const lied = await lastStep.compute(mentalQuery("The user lied or is inaccurate about a fact."))
  log("User lied:", lied)
  if (lied) {
    log("Lie detected. Increasing alarm volume")
    volume.current = volume.current + 10
  } else {
    const arguedWell = await lastStep.compute(mentalQuery("The user presented a decent argument about the topic, enough to demonstrate he is awake."))
    log("User argued well:", arguedWell)
    if (arguedWell) { setNextProcess(correct) }
  }

  return lastStep
}

export default gainsTrustWithTheUser
