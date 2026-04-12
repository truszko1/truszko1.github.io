---
title: "The Builder's Dilemma: The Human Cost of Right Decisions"
date: 2026-04-12T17:12:55.000Z
excerpt: "Every right technical decision has someone on the other side of it. What engineering leaders don't talk about: the cost of building, replacing, and leading."

---
When was the last time you made the right technical decision, like migrating a legacy monolithic application to a microservices architecture, deprecating an outdated API endpoint, or refactoring a tightly coupled codebase into modular components, and someone was upset about it? Not because you were wrong. But because you weren't.

I've been sitting with this for a while. I've replaced systems other people spent years building. Simplified architectures that someone carefully designed, perhaps consolidating multiple microservices into a single, more maintainable monolith to reduce operational overhead. The calls were defensible. Most of them were probably right. And the person whose work I was overwriting rarely came up while I was doing it.

A few weeks ago, reading *Never Split the Difference* by Chris Voss, a negotiation book of all things, I finally got the thought into one sentence: *No one thinks they're the villain while they're being one, and no one who matters to someone gets to avoid becoming one.*

## This keeps happening

A refactor landed recently that gutted a module someone had written the quarter before. The PR said "consolidated and simplified." I mean, yeah, I guess? But that's also a polite way of saying "what you built wasn't worth keeping around," and I doubt the person who wrote it felt great reading that diff.

I keep noticing how fast the reasoning behind a system disappears once someone improves it. That architecture you think looks over-engineered? Somebody built it under deadline pressure with half the team and a product that looked completely different three years ago. Perhaps to handle eventual consistency in a distributed system or mitigate race conditions in concurrent processing. But none of that context survives. It becomes "tech debt" in a Jira ticket, labeled with terms like "code churn" or "cyclomatic complexity." The person who built it gets to watch their thinking get compressed into a label by someone who wasn't there when the decisions were being made.

This isn't just a codebase thing either. Remember when containers showed up and a ton of people who were really good at deployments suddenly had an expertise that nobody was hiring for anymore? Docker containers revolutionized CI/CD pipelines and infrastructure as code, but left experts in traditional server provisioning and manual deployments behind. React did something similar to the frontend market, with its virtual DOM and component lifecycle disrupting jQuery-dominated ecosystems. AI tooling is doing it right now, automating code generation and testing that once required deep knowledge of algorithms and debugging. The people shipping these things genuinely believe they're making stuff better. They probably are. Somewhere downstream there's a person reworking their LinkedIn headline because of it.

Nobody doing the building ever thinks they're the villain. They're solving a problem. That's exactly why it's so easy to miss.

## This is what leading feels like

The moment your job becomes "make technical decisions that affect a team," you start generating these situations whether you want to or not. You pick a direction and someone's approach gets shelved. You choose between GraphQL and REST APIs, and the REST advocate's carefully crafted endpoints get deprecated. You kill a feature someone spent weeks scoping because it doesn't fit a priority they had no say in. Perhaps because it relied on outdated protocols or didn't align with the new event-driven architecture.

I spent a long time thinking the job was about making the right call. Get the architecture right, pick the right tools, set the right priorities. The rest follows. I'm less sure about that now.

Because I keep running into the same thing: I'll make a decision I feel good about, explain it clearly, and then be genuinely confused when someone's upset. I used to think that meant I communicated it badly. The problem is that I'm thinking about the *decision* and they're thinking about *what the decision means for them*. Those are two completely different conversations happening in the same room. I keep relearning this. You'd think it would stick by now.

The Voss book put a name on something I'd been bumping into for a while. His whole thing about tactical empathy boils down to something pretty simple: people can't actually process what you're telling them until they feel like you get where they're coming from. You don't have to agree. You just have to show you see it. If you skip that step, everything you say gets filtered through whatever story they've already written about you. You think you're walking them through a technical tradeoff. They're hearing "your work doesn't matter." You'll have no idea that's what's happening unless you actually ask.

## What I'm trying to do about it

I don't have this figured out. I want to say that upfront because most leadership writing skips this part and goes straight to the advice, and the advice always reads cleaner than it plays out on a Tuesday afternoon when you're behind on three things.

But a few things have started to change how my decisions land. When I'm about to replace something someone else built, I've started saying out loud what that thing did well and why it made sense when it was built. Five-second sentence. "This served us well under a different set of constraints." Sounds small. But it completely changes whether the person hears "we're building on your work" or "we're throwing your work away." I didn't used to do this. I just showed up with the migration plan.

I've also started looping people in before their stuff gets replaced, not after. I'm still making the call. But there's a real difference between hearing directly from someone why your system is being retired and finding out about it in a Slack thread while you're on PTO. The first one is being included in a decision. The second one is having something done to you.

The one I'm worst at, and it's embarrassing how basic this is: not being surprised when people are upset about a decision I'm confident was right. Every time I catch myself thinking "but it was the right call, why are they upset," I'm basically admitting I forgot other people were involved. The decision can be correct. The frustration can also be completely reasonable. I keep acting like those two things can't coexist, and they obviously can.

## The trade

I don't think you can build things that matter without becoming somebody's villain along the way. The better the decision, the more likely it is that someone experienced it as a loss. That's the trade, and nobody warns you about it when you're coming up as an engineer.

It doesn't mean you stop making hard calls. You'd be useless if you did. But somewhere between "I had no idea my decisions were costing people something" and "I see it, and I take it seriously," there's a version of leadership I'm still trying to get to.

If nothing you build ever makes you the villain in someone's story, you're probably not building anything that matters.