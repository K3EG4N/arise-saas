import type { IPerson } from "@/interfaces/IPerson";

export const Person = ({ primeryText, secondaryText, imgUrl }: IPerson) => {
  return (
    <div className="flex items-center gap-2">
      {imgUrl === null ? (
        <div className="size-9 min-w-9 min-h-9 rounded-full bg-neutral-200">
          <span className="flex h-full items-center justify-center text-lg font-medium text-neutral-600">
            {primeryText[0]}
            {primeryText.split(" ").length > 1
              ? primeryText.split(" ")[1][0]
              : ""}
          </span>
        </div>
      ) : (
        <img
          src={imgUrl}
          alt={primeryText}
          draggable={false}
          className="size-9 rounded-full object-cover"
        />
      )}
      {secondaryText != null ? (
        <div className="flex flex-col">
          <span className="font-medium">{primeryText}</span>
          <span className="text-xs">{secondaryText}</span>
        </div>
      ) : (
        <span>{primeryText}</span>
      )}
    </div>
  );
};
