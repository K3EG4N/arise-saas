import { Button } from "../ui/Button";

export const MicrosoftSingUp = () => {
  return (
    <Button
      icon={<MicrosoftIcon />}
      iconPosition="left"
      label="Microsoft"
      appareance="ghost"
    />
  );
};

export const MicrosoftIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 256 256"
      className="size-5"
    >
      <rect x="0" y="0" width="118" height="118" fill="#F25022"></rect>
      <rect x="138" y="0" width="118" height="118" fill="#7FBA00"></rect>
      <rect x="0" y="138" width="118" height="118" fill="#00A4EF"></rect>
      <rect x="138" y="138" width="118" height="118" fill="#FFB900"></rect>
    </svg>
  );
};
