import { http, HttpResponse } from "msw";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

let tasks: Task[] = [
  {
    id: "1",
    title: "Learn Redux Toolkit",
    description: "Understand slices and store setup",
    status: "pending",
  },
  {
    id: "2",
    title: "Build Task Manager",
    description: "Implement CRUD with MSW",
    status: "completed",
  },
];

export const handlers = [
  http.post("/login", async ({ request }) => {
    const body = (await request.json()) as {
      username: string;
      password: string;
    };

    if (body.username === "admin" && body.password === "admin") {
      return HttpResponse.json({
        token: "fake-jwt-token",
        username: body.username,
      });
    }

    return new HttpResponse(
      JSON.stringify({ message: "Invalid credentials" }),
      { status: 401 }
    );
  }),

  http.get("/tasks", () => {
    return HttpResponse.json(tasks);
  }),

  http.post("/tasks", async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>;
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...body,
    } as Task;
    tasks.push(newTask);
    return HttpResponse.json(newTask, { status: 201 });
  }),

  http.put("/tasks/:id", async ({ params, request }) => {
    const { id } = params;
    const updatedData = (await request.json()) as Record<string, unknown>;

    tasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedData } : task
    );

    const updatedTask = tasks.find((task) => task.id === id);

    return HttpResponse.json(updatedTask);
  }),

  http.delete("/tasks/:id", ({ params }) => {
    const { id } = params;
    tasks = tasks.filter((task) => task.id !== id);
    return new HttpResponse(null, { status: 204 });
  }),
];