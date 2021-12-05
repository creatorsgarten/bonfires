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

## GraphQL API

EventKit exposes a GraphQL API to interact with your workspaces and events.

Our schema has a lot of relations, so a graph representation such as GraphQL makes a lot of sense.

Here's an example query to list all events in your workspaces.

```gql
query Events {
  currentUser {
    workspaces {
      events(first: 10) {
        staffs {
          roles {
            title
            type
          }

          tasks {
            title
          }

          user {
            email
          }
        }

        days {
          duties {
            title
          }

          directors {
            user {
              email
            }
          }
        }
      }
    }
  }
}
```

## Running EventKit on your servers

EventKit can be self-hosted within a few minutes. Follow this self-hosting guide to configure the EventKit platform on your servers or cloud instances.

TBD

## Technologies

Here is the non-exhaustive list of technologies we are using for EventKit.

- Language: [TypeScript](https://www.typescriptlang.org)
- Runtime: [Node](https://nodejs.org)
- Monorepo Framework: [Nx](https://nx.dev)
- Package Manager: [PNPM](https://pnpm.io)

### Frontend

- Foundation: [React](https://reactjs.org), [Next.js](https://nextjs.org)
- State Management: [Jotai](https://jotai.org)
- Styling: [Tailwind](https://tailwindcss.com), [Emotion](https://emotion.sh), [Twin Macro](https://twin.macro)
- Data Layer: [GraphQL](https://graphql.org), [Apollo Client](https://apollographql.com)
- Deployment: [Vercel](https://vercel.com)

### Backend

- Framework: [Nest.js](https://nestjs.com), [Fastify](https://www.fastify.io)
- Data Layer: [Prisma](https://www.prisma.io), [Postgres](https://www.postgresql.org), [Redis](https://redis.io)
- Query Layer: [GraphQL](https://graphql.org), [Apollo Server](https://apollographql.com)
- Codegen: [Prisma Nest.js GraphQL](https://github.com/unlight/prisma-nestjs-graphql) generates GQL object types from Prisma schema
- Deployment: [Cloud Run](https://cloud.google.com/run), [Docker](https://docker.io)

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
