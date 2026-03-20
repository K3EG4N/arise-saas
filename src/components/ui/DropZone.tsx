import { Upload } from "@/icons/Regular/Upload";

export const DropZone = () => {
  return (
    <article className="flex size-full cursor-pointer flex-col items-center justify-center gap-2 rounded border-2 border-dashed border-teal-500 bg-teal-100/45 p-2 text-center text-sm">
      <div className="rounded-lg bg-teal-200 p-2 text-teal-900">
        <Upload />
      </div>
      <div>
        <span className="font-medium text-teal-800">Drop files here</span>
        <p className="mb-1.5 font-medium text-teal-600">or click to browse</p>
        <span className="rounded bg-teal-200 px-2.5 py-0.5 text-[10px] font-medium text-teal-900">
          PNG, JPG, PDF, SVG
        </span>
      </div>
    </article>
  );
};
