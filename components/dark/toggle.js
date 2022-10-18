import react from 'react'

export default function ToggleDark(props) {
  return (

    <svg
      onClick={() => props.setTheme("dark")}
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 float-right text-gray-900 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>

  )
}
