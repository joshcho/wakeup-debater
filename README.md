# Wake Up Debater

**Soul Designer:** [@joshcho](https://github.com/joshcho)

This soul is crafted to stimulate intellectual awakening through debate at the start of the day. The Wakeup Debater (WUD) operates as an alarm, engaging the user in a challenge that requires presenting a coherent argument on typically contentious topics, often conspiracy theories. To silence the alarm, the user must successfully complete the challenge, fostering critical thinking from the moment they wake.

The soul consists of these core mental processes:

- `engageInDebate`: a process that initiates with the alarm-like ringing, presenting the user with a debate topic. If the topic is deemed too challenging by the user, WUD may offer an alternative. This interaction is designed with a formal and provocative style, using concise statements and sharp questions to encourage critical analysis. The process concludes once a satisfactory argument is made, at which point WUD accepts the effort and ceases further engagement.
- `correctResponseProcess`: This process is triggered after the user presents a well-argued response to the debate topic provided by Wakeup Debater (WUD).

The source code for these processes can be found in the `./src` directory.

## Run this soul

In this directory run

```bash
npx soul-engine dev
```
