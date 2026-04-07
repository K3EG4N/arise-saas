import { Calendar } from "arise-ui";
import { Metrics } from "./components/Metrics";

export const Dashboard = () => {
  return (
    <main className="flex size-full flex-col gap-3">
      <div>
        <h1 className="text-2xl font-medium">Good Evening Felipe 👋</h1>
        <span className="text-sm">
          Stay on top of your tasks, monitor progress, and track status.
        </span>
      </div>
      <div
        className="grid h-full gap-2"
        style={{
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "auto repeat(8, 1fr)",
        }}
      >
        <section
          className="flex min-h-0 min-w-0 gap-2"
          style={{ gridArea: "1 / 1 / 2 / 7" }}
        >
          <Metrics />
        </section>
        <section
          className="min-h-0 min-w-0 overflow-auto"
          style={{ gridArea: "1 / 7 / 6 / 9" }}
        >
          <Calendar />
        </section>

        <section
          className="min-h-0 min-w-0 overflow-auto bg-green-600"
          style={{ gridArea: "2 / 1 / 6 / 4" }}
        >
          div3
        </section>

        <section
          className="min-h-0 min-w-0 overflow-auto bg-orange-500"
          style={{ gridArea: "2 / 4 / 6 / 7" }}
        >
          div4
        </section>

        <section
          className="min-h-0 min-w-0 overflow-auto bg-violet-400"
          style={{ gridArea: "6 / 1 / 10 / 7" }}
        >
          div5
        </section>

        <section
          className="min-h-0 min-w-0 overflow-auto bg-amber-400"
          style={{ gridArea: "6 / 7 / 8 / 9" }}
        ></section>

        <section
          className="min-h-0 min-w-0 overflow-auto bg-blue-400"
          style={{ gridArea: "8 / 7 / 10 / 9" }}
        >
          div7
        </section>
      </div>
    </main>
  );
};
