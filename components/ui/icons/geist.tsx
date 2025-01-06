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
        fill="hsla(var(--ds-background-200))"
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

export function BrandAsset({ ...etc }: ComponentProps<'svg'>) {
  return (
    <svg
      width="322"
      height="96"
      viewBox="0 0 322 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...etc}
    >
      <g clipPath="url(#clip0_295_12)">
        <path
          d="M0 59.5H322"
          stroke="hsl(var(--ds-gray-alpha-400))"
          strokeDasharray="2 2"
        />
        <path
          d="M0 28.5H322"
          stroke="hsl(var(--ds-gray-alpha-400))"
          strokeDasharray="2 2"
        />
        <path
          d="M0 67.5H322"
          stroke="hsl(var(--ds-gray-alpha-400))"
          strokeDasharray="2 2"
        />
        <path
          d="M248.75 0.940186V96"
          stroke="hsl(var(--ds-gray-alpha-400))"
          strokeDasharray="2 2"
        />
        <path
          d="M73.1499 0.940186V96"
          stroke="hsl(var(--ds-gray-alpha-400))"
          strokeDasharray="2 2"
        />
        <path
          d="M113 1V96.0598"
          stroke="hsl(var(--ds-gray-alpha-400))"
          strokeDasharray="2 2"
        />
        <path
          d="M318 0.5H4C2.067 0.5 0.5 2.067 0.5 4V92C0.5 93.933 2.067 95.5 4 95.5H318C319.933 95.5 321.5 93.933 321.5 92V4C321.5 2.067 319.933 0.5 318 0.5Z"
          stroke="hsl(var(--ds-gray-alpha-400))"
          strokeDasharray="2 2"
        />
        <g clipPath="url(#clip1_295_12)">
          <path
            d="M106.6 28H79.4C75.8654 28 73 30.8654 73 34.4V61.6C73 65.1346 75.8654 68 79.4 68H106.6C110.135 68 113 65.1346 113 61.6V34.4C113 30.8654 110.135 28 106.6 28Z"
            fill="hsl(var(--ds-gray-700))"
          />
          <path
            d="M81.4549 46.7413L89.4224 42.1563L89.4324 42.15L97.6424 37.425C97.9887 37.225 98.0049 36.6125 97.6174 36.39L97.3462 36.235C96.9499 36.01 96.4374 35.7175 96.2187 35.59C96.027 35.4856 95.8118 35.4322 95.5936 35.4348C95.3754 35.4375 95.1615 35.4961 94.9724 35.605C94.7787 35.7175 81.8462 43.1525 81.4137 43.3988C81.1588 43.5444 80.8703 43.6211 80.5768 43.6211C80.2832 43.6211 79.9948 43.5444 79.7399 43.3988L72.9099 39.43V42.8038L72.9799 42.8438C74.6849 43.8375 78.7199 46.1875 79.7074 46.7438C80.3062 47.0813 80.8787 47.0738 81.4549 46.7413Z"
            fill="black"
          />
          <path
            d="M81.4549 53.4812L89.4124 48.9012L89.4424 48.8837L97.6424 44.165C97.9887 43.965 98.0049 43.3512 97.6174 43.13L97.3462 42.975C96.9512 42.75 96.4374 42.4575 96.2187 42.33C96.027 42.2256 95.8118 42.1722 95.5936 42.1748C95.3754 42.1775 95.1615 42.2361 94.9724 42.345C94.7787 42.4562 81.8462 49.8925 81.4137 50.1375C81.1588 50.2832 80.8703 50.3598 80.5768 50.3598C80.2832 50.3598 79.9948 50.2832 79.7399 50.1375C79.3324 49.9025 72.9099 46.17 72.9099 46.17V49.5425L72.9799 49.5837C74.6862 50.5775 78.7199 52.9262 79.7074 53.4837C80.3062 53.8212 80.8787 53.8137 81.4549 53.4812Z"
            fill="black"
          />
          <path
            d="M89.4237 55.635L81.4549 60.2213C80.8787 60.5538 80.3049 60.5613 79.7074 60.2238C78.7199 59.6663 74.6862 57.3175 72.9799 56.3238L72.9099 56.2825V52.91L79.7399 56.8775C80.2562 57.1763 80.8962 57.1725 81.4137 56.8775C81.8462 56.6325 94.7787 49.1963 94.9724 49.0838C95.1615 48.9748 95.3754 48.9162 95.5936 48.9136C95.8118 48.911 96.027 48.9644 96.2187 49.0688C96.684 49.3378 97.1506 49.6045 97.6187 49.8688C98.0062 50.0913 97.9887 50.705 97.6424 50.905L89.4237 55.635Z"
            fill="black"
          />
          <path
            d="M142.562 51.4125C142.562 52.0562 142.674 52.6812 142.892 53.2775C143.112 53.8787 143.432 54.4075 143.86 54.8687C144.287 55.3312 144.799 55.6987 145.397 55.9737C145.997 56.25 146.679 56.3875 147.437 56.3875C148.197 56.3875 148.877 56.25 149.476 55.975C150.054 55.7167 150.573 55.3448 151.004 54.8813C151.434 54.4178 151.767 53.8724 151.982 53.2775C152.199 52.6812 152.307 52.0562 152.307 51.4125C152.307 50.7687 152.199 50.1437 151.982 49.545C151.768 48.9565 151.44 48.4165 151.015 47.9562C150.58 47.4896 150.058 47.1136 149.477 46.85C148.836 46.5646 148.14 46.4226 147.437 46.4337C146.679 46.4337 145.997 46.575 145.399 46.85C144.799 47.1262 144.287 47.495 143.861 47.9562C143.435 48.4152 143.106 48.955 142.892 49.5437C142.674 50.1437 142.562 50.7687 142.562 51.4125ZM138.417 51.4125C138.417 50.1 138.655 48.9062 139.126 47.835C139.573 46.7987 140.226 45.8639 141.045 45.0875C141.873 44.3139 142.847 43.7141 143.911 43.3237C145.04 42.9062 146.234 42.6957 147.437 42.7025C148.681 42.7025 149.856 42.91 150.962 43.3237C152.026 43.7145 153.001 44.3137 153.83 45.0862C154.648 45.8636 155.301 46.7986 155.749 47.835C156.221 48.9062 156.457 50.0987 156.457 51.4125C156.457 52.725 156.22 53.9187 155.749 54.99C155.301 56.0259 154.648 56.9606 153.83 57.7375C153.002 58.5112 152.027 59.1105 150.962 59.5C149.835 59.919 148.641 60.1295 147.439 60.1212C146.235 60.1295 145.04 59.919 143.912 59.5C142.848 59.1117 141.873 58.5127 141.046 57.7387C140.227 56.9623 139.574 56.0276 139.127 54.9912C138.655 53.92 138.419 52.7275 138.419 51.4137L138.417 51.4125ZM162.537 51.4175C162.537 52.0612 162.646 52.6862 162.866 53.2825C163.085 53.8837 163.405 54.4125 163.832 54.8737C164.26 55.3362 164.772 55.7037 165.371 55.9787C165.971 56.2537 166.651 56.3925 167.41 56.3925C168.17 56.3925 168.85 56.255 169.45 55.98C170.028 55.7221 170.547 55.3502 170.978 54.8867C171.409 54.4232 171.741 53.8776 171.956 53.2825C172.173 52.6846 172.283 52.0534 172.281 51.4175C172.281 50.7737 172.172 50.1487 171.956 49.55C171.74 48.9557 171.407 48.4108 170.977 47.9479C170.546 47.4849 170.027 47.1132 169.45 46.855C168.808 46.5696 168.112 46.4275 167.41 46.4387C166.651 46.4387 165.97 46.58 165.372 46.855C164.791 47.1183 164.268 47.4943 163.832 47.9612C163.406 48.4225 163.085 48.9512 162.866 49.5487C162.646 50.1487 162.537 50.7737 162.537 51.4175ZM172.352 57.2225H172.281C171.682 58.2375 170.879 58.975 169.864 59.435C168.832 59.8984 167.712 60.1337 166.581 60.125C165.29 60.125 164.145 59.9025 163.141 59.4525C162.164 59.0209 161.288 58.3909 160.567 57.6025C159.842 56.8018 159.289 55.8607 158.942 54.8375C158.567 53.7367 158.381 52.5804 158.391 51.4175C158.381 50.2507 158.58 49.0915 158.979 47.995C159.345 46.9776 159.901 46.0392 160.619 45.23C161.327 44.4441 162.192 43.8148 163.157 43.3825C164.15 42.9325 165.232 42.7075 166.407 42.7075C167.191 42.7075 167.882 42.7887 168.482 42.9487C169.081 43.1112 169.61 43.3175 170.07 43.5737C170.838 43.9772 171.51 44.5422 172.039 45.23H172.144V36.0912C172.144 35.6775 172.472 35.1887 173.049 35.1887H175.39C175.932 35.1887 176.292 35.6437 176.292 36.0912V58.8075C176.292 59.385 175.804 59.7112 175.39 59.7112H173.259C173.02 59.709 172.791 59.6135 172.622 59.4451C172.453 59.2767 172.356 59.0488 172.352 58.81V57.2225ZM183.196 51.4125C183.196 52.0562 183.306 52.6812 183.526 53.2775C183.745 53.8787 184.066 54.4075 184.494 54.8687C184.928 55.3353 185.451 55.7109 186.031 55.9737C186.631 56.25 187.311 56.3875 188.071 56.3875C188.83 56.3875 189.511 56.25 190.11 55.975C190.688 55.717 191.207 55.3452 191.638 54.8817C192.069 54.4182 192.401 53.8726 192.616 53.2775C192.832 52.6812 192.941 52.0562 192.941 51.4125C192.941 50.7687 192.832 50.1437 192.616 49.545C192.4 48.9508 192.067 48.406 191.637 47.943C191.206 47.4801 190.687 47.1083 190.11 46.85C189.469 46.5648 188.773 46.4228 188.071 46.4337C187.311 46.4337 186.63 46.575 186.031 46.85C185.432 47.1262 184.921 47.495 184.494 47.9562C184.066 48.4175 183.745 48.9462 183.526 49.5437C183.306 50.1437 183.196 50.7687 183.196 51.4125ZM179.051 51.4125C179.051 50.1 179.287 48.9062 179.76 47.835C180.206 46.7987 180.859 45.864 181.677 45.0875C182.505 44.3139 183.48 43.7141 184.544 43.3237C185.673 42.9061 186.868 42.6956 188.071 42.7025C189.314 42.7025 190.49 42.91 191.595 43.3237C192.659 43.7144 193.634 44.3136 194.464 45.0862C195.282 45.8637 195.934 46.7987 196.381 47.835C196.854 48.9062 197.091 50.0987 197.091 51.4125C197.091 52.725 196.854 53.9187 196.382 54.99C195.935 56.0259 195.282 56.9606 194.464 57.7375C193.635 58.5109 192.66 59.1098 191.595 59.4987C190.467 59.9179 189.273 60.1284 188.07 60.12C186.867 60.1281 185.673 59.9176 184.545 59.4987C183.48 59.1106 182.505 58.5116 181.677 57.7375C180.859 56.961 180.206 56.0263 179.76 54.99C179.287 53.9187 179.051 52.7262 179.051 51.4125ZM199.181 37.485C199.181 36.8162 199.429 36.2362 199.924 35.7375C200.421 35.2437 201.049 34.995 201.807 34.995C202.567 34.995 203.209 35.2325 203.726 35.705C204.244 36.1775 204.505 36.77 204.505 37.485C204.512 37.8204 204.446 38.1534 204.312 38.4607C204.177 38.7681 203.977 39.0426 203.726 39.265C203.209 39.7375 202.567 39.9737 201.807 39.9737C201.049 39.9737 200.421 39.7262 199.924 39.2287C199.429 38.7337 199.181 38.1537 199.181 37.485ZM216.3 47.7125C215.886 47.7125 215.581 47.4 215.53 47.2637C215.185 46.36 214.086 46.0212 213.199 46.0212C211.8 46.0212 210.702 46.67 210.702 47.7837C210.702 48.8625 211.765 49.0837 212.421 49.2825C213.141 49.5 214.517 49.8 215.276 49.9787C216.026 50.153 216.752 50.4201 217.436 50.7737C219.637 51.9175 219.951 53.7162 219.951 54.7987C219.951 58.795 215.992 60.12 213.244 60.12C211.125 60.12 207.145 59.7987 206.271 55.76C206.186 55.3662 206.534 54.7625 207.172 54.7625H209.462C209.912 54.7625 210.216 55.0912 210.305 55.35C210.599 56.1612 211.534 56.775 213.111 56.775C214.802 56.775 215.802 56.1037 215.802 55.2112C215.802 54.6337 215.476 54.1212 215.049 53.8312C213.766 52.9612 210.594 52.8637 208.871 51.9462C208.211 51.5962 206.556 50.7937 206.556 48.06C206.556 44.2912 209.982 42.7025 212.992 42.7025C217.431 42.7025 219.06 45.5062 219.244 46.5462C219.345 47.12 219.024 47.7137 218.379 47.7137L216.3 47.7125ZM220.291 45.6612V43.945C220.291 43.5362 220.614 43.0437 221.187 43.0437H223.399V38.8312C223.399 38.3812 223.704 38.1062 223.935 38.0062L226.297 36.975C226.987 36.6912 227.546 37.26 227.546 37.8075V43.0437H231.206C231.772 43.0437 232.109 43.5375 232.109 43.945V45.6637C232.102 45.9008 232.005 46.1263 231.837 46.2943C231.67 46.4622 231.444 46.56 231.207 46.5675H227.546V53.8275C227.546 54.6562 227.524 55.305 227.84 55.7837C228.131 56.2225 228.557 56.3862 229.411 56.3862C229.656 56.3862 229.875 56.345 230.06 56.2825C230.258 56.2071 230.477 56.2057 230.676 56.2784C230.875 56.3512 231.042 56.4933 231.145 56.6787C231.415 57.2012 231.724 57.775 231.94 58.1862C232.179 58.6375 231.986 59.2175 231.551 59.4275C230.85 59.7687 229.877 60.045 228.544 60.045C227.439 60.045 226.812 59.925 226.112 59.6825C225.422 59.4287 224.811 58.9976 224.341 58.4325C223.936 57.9375 223.736 57.275 223.586 56.5375C223.434 55.8 223.399 54.9075 223.399 53.9375V46.5675H221.192C220.614 46.5675 220.291 46.0675 220.291 45.6612ZM125.41 45.6612V43.945C125.41 43.5362 125.734 43.0437 126.306 43.0437H128.832V38.8312C128.832 38.3812 129.139 38.1062 129.37 38.0062L131.732 36.975C132.422 36.6912 132.981 37.26 132.981 37.8075V43.0437H136.641C137.206 43.0437 137.544 43.5375 137.544 43.945V45.6637C137.537 45.901 137.439 46.1267 137.272 46.2947C137.104 46.4627 136.878 46.5603 136.641 46.5675H132.981V53.8275C132.981 54.6562 132.959 55.305 133.275 55.7837C133.565 56.2225 133.991 56.3862 134.846 56.3862C135.091 56.3862 135.309 56.345 135.495 56.2825C135.693 56.2075 135.912 56.2062 136.111 56.279C136.309 56.3517 136.476 56.4936 136.579 56.6787C136.85 57.2012 137.159 57.775 137.375 58.1862C137.612 58.6375 137.421 59.2175 136.986 59.4275C136.284 59.7687 135.311 60.045 133.979 60.045C132.874 60.045 132.247 59.925 131.547 59.6825C130.857 59.4287 130.246 58.9976 129.775 58.4325C129.37 57.9375 129.17 57.275 129.021 56.5375C128.869 55.8 128.834 54.9075 128.834 53.9375V46.5675H126.312C125.734 46.5675 125.41 46.0675 125.41 45.6612ZM200.644 59.7125H202.989C203.228 59.7118 203.457 59.6163 203.626 59.4469C203.795 59.2775 203.89 59.048 203.89 58.8087V43.9462C203.89 43.7072 203.795 43.478 203.626 43.3089C203.457 43.1397 203.228 43.0444 202.989 43.0437H200.644C200.405 43.0447 200.176 43.1402 200.007 43.3092C199.838 43.4783 199.743 43.7073 199.742 43.9462V58.8087C199.742 59.3062 200.149 59.7112 200.644 59.7112V59.7125Z"
            fill="hsl(var(--ds-gray-700))"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_295_12">
          <rect width="322" height="96" fill="white" />
        </clipPath>
        <clipPath id="clip1_295_12">
          <rect
            width="160"
            height="40"
            fill="white"
            transform="translate(73 28)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
