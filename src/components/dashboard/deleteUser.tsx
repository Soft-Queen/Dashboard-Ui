const TrashIcon = ({  onClick }: { className?: string; onClick?: React.MouseEventHandler<SVGSVGElement> }) => (
  <svg
    className={`w-6 h-6  text-red-400`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 7V5a2 2 0 012-2h0a2 2 0 012 2v2"
    ></path>
  </svg>
);

export default TrashIcon;