import { ComponentProps } from 'react';

export const DeviceAlternate = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      aria-hidden="true"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      style={{
        width: size + 'px',
        height: size + 'px',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3.25C1 1.45507 2.45507 0 4.25 0H11.75C13.5449 0 15 1.45507 15 3.25V15.25V16H14.25H1.75H1V15.25V3.25ZM4.25 1.5C3.2835 1.5 2.5 2.2835 2.5 3.25V14.5H13.5V3.25C13.5 2.2835 12.7165 1.5 11.75 1.5H4.25ZM4 4C4 3.44772 4.44772 3 5 3H11C11.5523 3 12 3.44772 12 4V10H4V4ZM9 13H12V11.5H9V13Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Sun = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      aria-hidden="true"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      style={{
        width: size + 'px',
        height: size + 'px',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Moon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      aria-hidden="true"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      style={{
        width: size + 'px',
        height: size + 'px',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export function Nub(props: ComponentProps<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="46"
      viewBox="0 0 158 46"
      width="158"
      {...props}
    >
      <path
        d="M70.952 36.8018L55.1106 20.9604C47.384 13.2338 43.5207 9.37047 39.0122 6.6077C35.0151 4.15823 30.6573 2.35317 26.0988 1.25878C20.9573 0.0244141 15.4938 0.0244141 4.56672 0.0244141H153.132C142.205 0.0244141 136.742 0.0244141 131.6 1.25878C127.042 2.35317 122.684 4.15823 118.687 6.6077C114.178 9.37047 110.315 13.2338 102.588 20.9604L86.7469 36.8018C82.3853 41.1635 75.3137 41.1635 70.952 36.8018Z"
        fill="hsla(var(--ds-background-100))"
      />
      <path
        d="M153.132 5.60877C141.939 5.60877 137.253 5.64466 132.904 6.68885C128.915 7.64643 125.102 9.22586 121.605 11.3691C117.791 13.7062 114.452 16.9946 106.537 24.9091L90.6957 40.7506C84.1532 47.293 73.5457 47.293 67.0033 40.7505L51.1618 24.9091C43.2473 16.9946 39.9082 13.7062 36.0944 11.3691C32.5969 9.22586 28.7838 7.64643 24.7952 6.68885C20.4458 5.64466 15.7596 5.60877 4.56672 5.60877H0.668457V0.0244141H4.56672C15.4938 0.0244141 20.9573 0.0244141 26.0988 1.25878C30.6573 2.35317 35.0151 4.15823 39.0122 6.6077C43.5207 9.37047 47.384 13.2338 55.1106 20.9604L70.952 36.8018C75.3137 41.1635 82.3853 41.1635 86.7469 36.8018L102.588 20.9604C110.315 13.2338 114.178 9.37047 118.687 6.6077C122.684 4.15823 127.042 2.35317 131.6 1.25878C136.742 0.0244141 142.205 0.0244141 153.132 0.0244141H157.03V5.60877H153.132Z"
        fill="hsla(var(--ds-gray-alpha-400))"
      />
    </svg>
  );
}

export function DashedCircle(props: ComponentProps<'svg'>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 66 65" {...props}>
      <circle
        cx="33"
        cy="32.5"
        r="32"
        stroke="hsla(var(--ds-gray-400))"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

export function Geist({
  size = 16,
  ...etc
}: { size?: number } & ComponentProps<'svg'>) {
  return (
    <svg
      data-testid="header/navbar/logo"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height={size}
      width={size}
      {...etc}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4C8.82843 4 9.5 3.32843 9.5 2.5C9.5 1.67157 8.82843 1 8 1C7.17157 1 6.5 1.67157 6.5 2.5C6.5 3.32843 7.17157 4 8 4ZM8.97125 4.75725L9.57125 5.75725L10.4287 5.24275L9.82875 4.24275L8.97125 4.75725ZM6.42875 5.75725L7.02875 4.75725L6.17125 4.24275L5.57125 5.24275L6.42875 5.75725ZM10.1713 6.75725L10.7713 7.75725L11.6287 7.24275L11.0287 6.24275L10.1713 6.75725ZM5.22875 7.75725L5.82875 6.75725L4.97125 6.24275L4.37125 7.24275L5.22875 7.75725ZM11.3713 8.75725L11.9713 9.75725L12.8287 9.24275L12.2287 8.24275L11.3713 8.75725ZM4.02875 9.75725L4.62875 8.75725L3.77125 8.24275L3.17125 9.24275L4.02875 9.75725ZM12.5713 10.7572L13.1713 11.7572L14.0287 11.2428L13.4287 10.2428L12.5713 10.7572ZM2.82875 11.7572L3.42875 10.7572L2.57125 10.2428L1.97125 11.2428L2.82875 11.7572ZM3 13.5C3 13.8133 2.90396 14.1041 2.73971 14.3447V14.5H2.61805C2.34339 14.8069 1.94425 15 1.5 15C0.671573 15 0 14.3284 0 13.5C0 12.6716 0.671573 12 1.5 12C2.32843 12 3 12.6716 3 13.5ZM3.925 14.5H5.1103V13.5H3.925V14.5ZM6.29559 14.5H7.48089V13.5H6.29559V14.5ZM8.66618 14.5H9.85147V13.5H8.66618V14.5ZM11.0368 14.5H12.2221V13.5H11.0368V14.5ZM14.5 15C15.3284 15 16 14.3284 16 13.5C16 12.6716 15.3284 12 14.5 12C13.6716 12 13 12.6716 13 13.5C13 14.3284 13.6716 15 14.5 15Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function V0({
  size = 16,
  ...etc
}: { size?: number } & ComponentProps<'svg'>) {
  return (
    <svg
      data-testid="header/navbar/logo"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height={size}
      width={size}
      {...etc}
    >
      <g clipPath="url(#clip0_174_19301)">
        <path
          clipRule="evenodd"
          d="M12.2649 5H16.6299C16.7421 5 16.8516 5.01137 16.9574 5.03301L12.2722 9.76708C12.2674 9.7161 12.2649 9.66443 12.2649 9.61219V5ZM12.2614 5L12.2614 3.25H16.6299C18.4938 3.25 20.0049 4.76104 20.0049 6.625V11.2422H18.2599V12.9872H13.8899C12.0259 12.9872 10.5149 11.4762 10.5149 9.61219V5L12.2614 5ZM18.2549 11.2372V6.625C18.2549 6.497 18.2401 6.37246 18.2121 6.253L13.3651 11.1506C13.5297 11.2067 13.7063 11.2372 13.8899 11.2372L18.2549 11.2372ZM0.164062 5.00359L6.88762 12.696C7.62006 13.534 8.9999 13.016 8.9999 11.903V5.00359H7.2499V10.4513L2.48831 5.00359H0.164062Z"
          fill="hsl(var(--ds-gray-1000))"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_174_19301">
          <rect fill="white" height="16" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Turbo({
  size = 16,
  ...etc
}: { size?: number } & ComponentProps<'svg'>) {
  return (
    <svg
      data-testid="header/navbar/logo"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height={size}
      width={size}
      {...etc}
    >
      <g clipPath="url(#clip0_872_3188)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0V2C11.3137 2 14 4.68629 14 8C14 11.1453 11.5798 13.7254 8.5 13.9795V15.9846C12.6854 15.7265 16 12.2504 16 8C16 3.58172 12.4183 0 8 0ZM7.5 15.9846V13.9795C6.2188 13.8738 5.05174 13.3655 4.12558 12.5815L2.70769 13.9994C4.00133 15.1415 5.66717 15.8716 7.5 15.9846ZM2.00058 13.2923C0.755509 11.882 0 10.0292 0 8H2C2 9.47685 2.53358 10.8291 3.41847 11.8744L2.00058 13.2923Z"
          fill="url(#paint0_linear_872_3188)"
        />
        <rect
          x="4.5"
          y="4.5"
          width="7"
          height="7"
          rx="3.5"
          stroke="hsl(var(--ds-gray-1000))"
          fill="transparent"
          strokeWidth="2"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_872_3188"
          x1="8.68832"
          y1="1.98437"
          x2="1.79792"
          y2="8.82805"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0096FF" />
          <stop offset="1" stopColor="#FF1E56" />
        </linearGradient>
        <clipPath id="clip0_872_3188">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Nextjs({
  size = 16,
  ...etc
}: { size?: number } & ComponentProps<'svg'>) {
  return (
    <svg
      data-testid="header/navbar/logo"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height={size}
      width={size}
      {...etc}
    >
      <g clipPath="url(#clip0_53_108)">
        <circle
          cx="8"
          cy="8"
          r="7.375"
          fill="black"
          stroke="hsl(var(--ds-gray-1000))"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.63 11V5"
          stroke="url(#paint0_linear_53_108Rallnbd3b)"
          strokeWidth="1.25"
          strokeMiterlimit="1.41421"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z"
          fill="url(#paint1_linear_53_108Rallnbd3b)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_53_108Rallnbd3b"
          x1="11.13"
          y1="5"
          x2="11.13"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="0.609375" stopColor="white" stopOpacity="0.57"></stop>
          <stop offset="0.796875" stopColor="white" stopOpacity="0"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_53_108Rallnbd3b"
          x1="9.9375"
          y1="9.0625"
          x2="13.5574"
          y2="13.3992"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="clip0_53_108">
          <rect width="16" height="16" fill="red"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export function Vercel({
  size = 16,
  ...etc
}: { size?: number } & ComponentProps<'svg'>) {
  return (
    <svg
      data-testid="header/navbar/logo"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      height={size}
      width={size}
      {...etc}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1L16 15H0L8 1Z"
        fill="hsl(var(--ds-gray-1000))"
      ></path>
    </svg>
  );
}
