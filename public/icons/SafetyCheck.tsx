export default function SafetyCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill={props.fill ?? `none`}
      stroke="currentColor"
      strokeWidth={props.strokeWidth}
      strokeLinecap={props.strokeLinecap}
      strokeLinejoin={props.strokeLinejoin}
      className="icon icon-tabler icons-tabler-outline icon-tabler-shield-check"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  );
}
