/** @jsxImportSource preact */

type Props = JSX.IntrinsicElements["svg"] & {
  class?: string;
};

export default function StethoscopeIcon(props: Props) {
  const safeClass = typeof props.class === "string" ? props.class : "";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class={safeClass}
      {...Object.fromEntries(
        Object.entries(props).filter(([key]) => key !== "class"),
      )}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4v5a4 4 0 004 4v1a6 6 0 1012 0v-1m-8 0v-1a4 4 0 004-4V4m0 0h-4m4 0h4"
      />
    </svg>
  );
}
