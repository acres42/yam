/** @jsxImportSource preact */

type Props = {
  class?: string;
};

export default function NoIcon({ class: className = "" }: Props) {
  return (
    <svg
      data-testid="no-icon"
      class={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M14.95 6.46L11.41 10l3.54 3.54l-1.41 1.41L10 11.42l-3.53 3.53l-1.42-1.42L8.58 10L5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"
      />
    </svg>
  );
}
