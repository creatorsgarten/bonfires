# EventKit: Host events programmatically.

> Event logistics is boring. Let's automate all of them!

EventKit is an event organisation platform. It's a collection of tools and applications that help your team run events, from early planning to the chaotic event days.

EventKit ships with an intuitive webapp for staffs to plan, communicate and improvise in all stages. It's based on the MC/OD philosophy which gives full ownership and autonomy to every staff, which allows the event to be experimental, creative and fun.

EventKit is designed to be API-first and support integrations and programmatic usage in mind, so you can write JS/TS code to automate and manage your events. Repetitive logistics can be fully automated so you can focus on the creative and fun parts. Think of it like Pulumi/CDK but for organising events.

## Get Started

You can get started with EventKit at [eventkit.sh](https://eventkit.sh), and create a workspace there.

## CLI Usage

Have an event idea you want to get started right away? You can use the `eventkit-cli` and create a new event with a single command. You don't even have to open the browser :D

```bash
eventkit new meetup --title "GraphQL Meetup 10.0" --online --livestream=streamyard,youtube --date "19 Aug - 20 Aug" --time "7PM - 9PM"
```

## Running EventKit on your servers

EventKit can be self-hosted within a few minutes. Follow this self-hosting guide to configure the EventKit platform on your servers or cloud instances.

TBD

## Technologies

Here is the non-exhaustive list of technologies we are using for EventKit.

Frontend:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Next.js](https://nextjs.org)
- [Jotai](https://jotai.org)
- [Tailwind](https://tailwindcss.com)
- [Emotion](https://emotion.sh)
- [Twin Macro](https://twin.macro)
- [React Query](https://react-query.tanstack.com)
- [Vercel](https://vercel.com)

Backend:

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Nest.js](https://nestjs.com)
- [Express](https://expressjs.com)
- [Prisma](https://www.prisma.io)
- [Postgres](https://www.postgresql.org)
- [Redis](https://redis.io)
- [Cloud Run](https://cloud.google.com/run)
- [Docker](https://docker.io)

### Extension and Integration Ideas

- Airtable Template
- Notion Template
- Venue Booking
- Team Gathering
- Discord Channel Setup
- StreamYard Live Setup
- MC/OD setup & webapp integration
- Meetup.com Integration
- Auto-generate Graphics
- Catering (Food & Drinks) setup
- EventKit CLI
- EventKit Discord Bot
