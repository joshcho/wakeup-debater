import { html } from "common-tags";
import { ChatMessageRoleEnum, externalDialog, mentalQuery } from "socialagi";
import { MentalProcess, useActions, useProcessManager } from "soul-engine";
import initialProcess from "../initialProcess.js";

const correct: MentalProcess = async ({ step: initialStep }) => {
  const { speak, log } = useActions()
  const { setNextProcess } = useProcessManager()

  const { stream, nextStep } = await initialStep.next(
    externalDialog(html`
- Respond formally, now that the user argued well
    `),
    { stream: true, model: "quality" }
  );
  speak(stream);

  const lastStep = await nextStep
  if (await lastStep.compute(mentalQuery("The interlocuter dozed off"))) {
    log("User dozed off")
    setNextProcess(initialProcess)
    return finalStep
  }

  return lastStep
}

export default correct
