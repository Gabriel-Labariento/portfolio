import { Project, SocialLink, NavItem } from './types';

// RECRUITER NOTE: This file acts as the content source.
// It uses strict typing to ensure all projects follow the STAR (Situation, Task, Action, Result) format subtly.

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', label: 'github.com/engineer' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', label: 'linkedin.com/in/engineer' },
  { platform: 'Email', url: 'mailto:hello@example.com', label: 'hello@example.com' },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'distributed-task-queue',
    title: 'Distributed Task Queue',
    shortDescription: 'A high-throughput, fault-tolerant job processing system built with Go and Redis.',
    year: '2023',
    role: 'Backend Engineer',
    links: {
      repo: 'https://github.com/example/task-queue',
    },
    content: {
      problem:
        "Processing image resize jobs for a mock e-commerce platform was causing main thread blocking and timeouts during high-traffic events. We needed a way to offload resource-intensive tasks asynchronously without losing jobs during server crashes.",
      approach:
        "I designed a distributed system using a producer-consumer pattern. The API accepts jobs and pushes them to a reliable Redis queue. Worker nodes (written in Go for concurrency performance) pull jobs, process them, and update status in a PostgreSQL database. I implemented a 'reliable queue' pattern to handle worker failures.",
      techStack: ['Go', 'Redis', 'Docker', 'PostgreSQL', 'gRPC'],
      challenges:
        "Deciding between RabbitMQ and Redis was a key trade-off. While RabbitMQ offers robust routing, I chose Redis for its lower latency and operational simplicity given our scale requirements (<10k jobs/sec). To handle 'at-least-once' delivery, I used Redis RPOPLPUSH to move jobs to a processing list, ensuring that if a worker dies, the job isn't lost but remains in a pending state to be reclaimed by a monitoring process.",
      outcome:
        "The system handled a peak load of 500 requests/second with 99.9% uptime. I learned deeply about eventual consistency, idempotency in distributed systems, and how to gracefully handle process termination signals.",
    },
  },
  {
    id: '2',
    slug: 'realtime-collab-editor',
    title: 'Real-time Collaboration Engine',
    shortDescription: 'Conflict-free replicated data type (CRDT) implementation for a collaborative text editor.',
    year: '2024',
    role: 'Full Stack Engineer',
    links: {
      repo: 'https://github.com/example/collab-editor',
      demo: 'https://demo.example.com',
    },
    content: {
      problem:
        "Standard WebSocket broadcasting for text editing leads to race conditions (e.g., 'last write wins') which destroys user intent when multiple users type simultaneously. I wanted to build a true Google Docs-style collaboration experience.",
      approach:
        "Instead of sending raw text, I implemented a CRDT (Yjs-like structure) to represent the document state. Clients send delta updates (operations) rather than full state. The frontend uses React with a custom hook to bind the CRDT state to a contenteditable div.",
      techStack: ['TypeScript', 'React', 'WebSockets', 'Node.js', 'CRDTs'],
      challenges:
        "Optimizing the memory footprint of the operation log was difficult. A naive CRDT implementation grows indefinitely. I implemented garbage collection for operations that have been acknowledged by all connected clients. I also had to balance the trade-off between the complexity of Operational Transformation (OT) vs CRDTs; I chose CRDTs for their decentralized nature, allowing offline support in the future.",
      outcome:
        "Built a functional editor supporting 50+ concurrent users with eventual consistency. This project taught me about logical clocks, distributed state management, and the complexities of synchronizing state across unreliable networks.",
    },
  },
  {
    id: '3',
    slug: 'query-optimizer',
    title: 'SQL Query Visualizer & Optimizer',
    shortDescription: 'A tool for developers to understand and optimize PostgreSQL query plans.',
    year: '2023',
    role: 'Frontend Engineer',
    links: {
      repo: 'https://github.com/example/query-opt',
    },
    content: {
      problem:
        "Junior developers often struggle to understand `EXPLAIN ANALYZE` output from Postgres. The text output is verbose and hierarchical relationships are hard to parse mentally.",
      approach:
        "I built a parser that transforms the raw JSON output of Postgres EXPLAIN into a directed acyclic graph (DAG). I used D3.js to visualize the query execution path, highlighting high-cost nodes (like Sequential Scans on large tables) in red to alert the user.",
      techStack: ['React', 'D3.js', 'PostgreSQL', 'Tailwind CSS'],
      challenges:
        "The recursive nature of query plans made rendering performant trees challenging. I utilized memoization in React to prevent re-calculating the graph layout on every hover event. I also had to decide how much abstraction to provide—hiding too much detail makes the tool useless for experts, so I added a 'drill-down' mode for raw stats.",
      outcome:
        "The tool is now used by my university's database club. It reduced the average time to debug slow queries by ~40% for students. I gained significant experience with recursion, graph theory algorithms, and data visualization performance.",
    },
  },
];
