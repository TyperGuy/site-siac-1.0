
export default function Animated() {
  return (
    <div style={{width: 120, height: 120}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <defs>
          <clipPath id="a">
            <polygon
              points="12 35 4 34 3 24 5 16 10 12 14.72 9.79 20.72 9.79 29 10 33 13 33 20 27 24 21 24 18 27 18 31 14 33 12 35"
              fill="none"
            ></polygon>
          </clipPath>
          <clipPath id="b">
            <polygon
              points="41.8 20.25 46.28 26.86 46.5 31.5 51.81 33.95 53.5 39.92 61.58 39.92 61 27 51.69 18.5 41.8 20.25"
              fill="none"
            ></polygon>
          </clipPath>
        </defs>
        <g clipPath="url(#a)">
          <g>
            <g>
              <path
                d="M19,20.05A3.95,3.95,0,1,1,15.05,24,4,4,0,0,1,19,20.05m0-2A5.95,5.95,0,1,0,25,24,5.95,5.95,0,0,0,19,18.05Z"
                fill="#f59e0b"
              ></path>
              <line
                x1="19"
                y1="15.67"
                x2="19"
                y2="12.5"
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
              <line
                x1="19"
                y1="35.5"
                x2="19"
                y2="32.33"
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
              <line
                x1="24.89"
                y1="18.11"
                x2="27.13"
                y2="15.87"
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
              <line
                x1="10.87"
                y1="32.13"
                x2="13.11"
                y2="29.89"
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
              <line
                x1="13.11"
                y1="18.11"
                x2="10.87"
                y2="15.87"
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
              <line
                x1="27.13"
                y1="32.13"
                x2="24.89"
                y2="29.89"
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
              <line
                x1="10.67"
                y1="24"
                x2="7.5"
                y2="24"
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
              <line
                x1="30.5"
                y1="24"
                x2="27.33"
                y2="24"
                fill="none"
                stroke="#f59e0b"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></line>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 19.22 24.293"
                to="360 19.22 24.293"
                dur="45s"
                repeatCount="indefinite"
              ></animateTransform>
            </g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="3 0; -3 0; 3 0"
              dur="7s"
              repeatCount="indefinite"
            ></animateTransform>
          </g>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-3 0; 3 0; -3 0"
            dur="7s"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g clipPath="url(#b)">
          <path
            d="M34.23,33.45a4.05,4.05,0,0,0,4.05,4H54.79a4.34,4.34,0,0,0,.81-8.61,3.52,3.52,0,0,0,.06-.66,4.06,4.06,0,0,0-6.13-3.48,6.08,6.08,0,0,0-11.25,3.19,6.34,6.34,0,0,0,.18,1.46h-.18A4.05,4.05,0,0,0,34.23,33.45Z"
            fill="none"
            stroke="#9ca3af"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-2.1 0; 2.1 0; -2.1 0"
            dur="7s"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
        <g>
          <path
            d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
            fill="none"
            stroke="#e5e7eb"
            strokeLinejoin="round"
            strokeWidth="3"
          ></path>
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-3 0; 3 0; -3 0"
            dur="7s"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </svg>
    </div>
  );
}

