# NestJS Mastery & Deep Dive Learning Hub

Welcome to the **NestJS Learning Repository**!

This repository is dedicated to exploring and mastering **every key concept, architectural pattern, and advanced feature of NestJS** through practical, hands-on projects and focused mini-applications.

Whether you're looking for clean implementations of core NestJS fundamentals or diving deep into advanced patterns, this repository serves as a complete, reference-ready learning path.

---

## Main Motive & Purpose

The primary objective of this repository is to break down NestJS concepts into isolated, runnable, and thoroughly commented modules. Rather than a monolithic application where concepts get tangled, each directory focuses on a specific NestJS capability.

When anyone explores this repository, they can:
1. **Understand Core Principles**: Learn how NestJS dependency injection, lifecycle events, and inversion of control work behind the scenes.
2. **Explore Advanced Mechanics**: Dive into dynamic modules, custom providers, configurable module builders, custom decorators, and execution context.
3. **Inspect Production Patterns**: Learn scalable architecture, validation pipelines, error handling, microservices, queuing, and security best practices.
4. **Use as a Reference / Cheatsheet**: Quickly copy tested patterns and configurations directly into production projects.

---

## Repository Structure & Concept Roadmap

Each folder represents an independent project or laboratory exploring a specific NestJS topic:

| Folder / Topic | Focus & Covered Concepts | Status |
| :--- | :--- | :---: |
| [`dynamic-module`](./dynamic-module) | Dynamic Modules, `forRoot` / `forRootAsync`, `ConfigurableModuleBuilder`, custom provider options | In Progress |
| *Dependency Injection & Providers* | Custom providers (`useValue`, `useClass`, `useFactory`, `useExisting`), scoping (`DEFAULT`, `REQUEST`, `TRANSIENT`) | Planned |
| *Guards & Authentication* | Route protection, JWT/Passport integration, role-based access control (RBAC), custom metadata | Planned |
| *Interceptors & ExecutionContext* | Response transformation, logging, timeout handling, error mapping, caching | Planned |
| *Pipes & Validation* | `class-validator`, `class-transformer`, custom validation pipes, transformation schemas | Planned |
| *Exception Filters* | Global & route-level exception filters, HTTP exception hierarchy, custom error formatting | Planned |
| *Custom Decorators* | Parameter decorators, method decorators, metadata reflection (`SetMetadata`, `Reflector`) | Planned |
| *Microservices & Transports* | TCP, Redis, RabbitMQ, Kafka, Hybrid application architecture | Planned |
| *WebSockets & Real-time* | Socket.IO / WS gateways, rooms, acknowledgements, connection handling | Planned |
| *Databases & ORM* | Prisma, TypeORM, Mongoose, transaction management, migration strategies | Planned |
| *Queues & Background Tasks* | BullMQ / Bull, task scheduling (`@nestjs/schedule`), worker processes | Planned |

*(New modules and topics will be added continuously as they are built.)*

---

## Getting Started

Each project folder is self-contained with its own `package.json` and dependencies.

### 1. Clone the repository
```bash
git clone https://github.com/hasanali112/Nest-js-Learning.git
cd Nest-js-Learning
```

### 2. Choose a module to explore
For example, to explore `dynamic-module`:
```bash
cd dynamic-module
```

### 3. Install dependencies
```bash
yarn install
# or: npm install / pnpm install
```

### 4. Run the application
```bash
# Development mode with hot-reload
yarn run start:dev

# Production build
yarn run build
yarn run start:prod
```

### 5. Run tests
```bash
# Unit tests
yarn run test

# End-to-end (E2E) tests
yarn run test:e2e
```

---

## Key Takeaways & Learning Philosophy

- **Isolated Learning**: Explore one concept without unnecessary bloat or unrelated dependencies.
- **Idiomatic NestJS**: Code follows official NestJS idioms, TypeScript strict typing, and SOLID design principles.
- **Theory Meets Practice**: Every concept is implemented with realistic scenarios and test cases.

---

## Contributing & Feedback

Suggestions, improvements, or requests for specific NestJS topics are always welcome! Feel free to open an issue or submit a pull request.
