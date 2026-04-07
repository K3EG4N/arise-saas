import { Card, useRenderIcon } from "arise-ui";

export const Metrics = () => {
  const { getIconByName } = useRenderIcon();

  return (
    <>
      <Card
        title="Active Employees"
        value={100}
        icon={getIconByName("userCheck", "size-4.5 stroke-2")?.icon}
        variant="success"
        //   trend={{ value: "12%", direction: "up" }}
      />
      <Card
        title="Inactive Employees"
        value={30}
        icon={getIconByName("userCross", "size-4.5 stroke-2")?.icon}
        variant="danger"
        //   trend={{ value: "4%", direction: "down" }}
      />
      <Card
        title="Team Members"
        value={20}
        icon={getIconByName("teamMate", "size-5 stroke-2")?.icon}
        variant="info"
        //   trend={{ value: "12%", direction: "up" }}
      />
      <Card
        title="Team Members"
        value={5}
        icon={getIconByName("building", "size-4.5 stroke-2")?.icon}
        variant="warning"
        //   trend={{ value: "12%", direction: "up" }}
      />

      <button className="group flex min-h-0 w-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 p-4 transition-colors hover:border-teal-400 hover:bg-teal-50/50">
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="size-5 stroke-0 text-neutral-400 transition-colors group-hover:text-teal-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path>
          <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"></path>
        </svg>
        <span className="text-xs font-medium text-neutral-400 transition-colors group-hover:text-teal-500">
          Add Card
        </span>
      </button>
    </>
  );
};
