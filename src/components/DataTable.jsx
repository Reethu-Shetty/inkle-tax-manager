import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export default function DataTable({ data, onEdit }) {
  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue() || "—",
    }),

    columnHelper.accessor("country", {
      header: "Country",
      cell: (info) => info.getValue() || "—",
    }),

    columnHelper.accessor("gender", {
      header: "Gender",
      cell: (info) => {
        const value = info.getValue();
        const norm = (value || "").toLowerCase();
        const cls =
          norm === "male"
            ? "pill-gender-male"
            : norm === "female"
            ? "pill-gender-female"
            : "pill-gender-unknown";

        return (
          <span className={`pill ${cls}`}>
            {value || "—"}
          </span>
        );
      },
    }),

    columnHelper.accessor("entity", {
      header: "Entity",
      cell: (info) => {
        const value = info.getValue();
        return (
          <span className="pill pill-entity">
            {value || "—"}
          </span>
        );
      },
    }),

    columnHelper.accessor("requestDate", {
      header: "Request Date",
      cell: (info) => {
        const value = info.getValue();
        return value || "—";
      },
    }),

    columnHelper.accessor("createdAt", {
      header: "Created At",
      cell: (info) => {
        const value = info.getValue();
        if (!value) return "—";
        const date = new Date(value);
        return date.toLocaleDateString();
      },
    }),

    columnHelper.display({
      id: "actions",
      header: "",
      cell: (info) => {
        const row = info.row.original;
        return (
          <button
            className="icon-button"
            onClick={() => onEdit(row)}
            aria-label="Edit row"
          >
            ✏
          </button>
        );
      },
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-card">
      <table className="data-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="center-text">
                No data found.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}