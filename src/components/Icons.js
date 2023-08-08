export const HamburgerOpen = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6  h-6 ${className} `}
        {...rest}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
    </svg>
);

export const HamburgerClose = ({ className, ...rest }) => (

    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 ${className} `}
        {...rest}
    >

        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);


export const Dot = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className={` ${className} `}
        {...rest}
    >
        <path d="M9.31807 6.63901C9.31807 7.17588 9.1048 7.69076 8.72517 8.07039C8.34555 8.45001 7.83067 8.66328 7.2938 8.66328C6.75693 8.66328 6.24205 8.45001 5.86243 8.07039C5.4828 7.69076 5.26953 7.17588 5.26953 6.63901C5.26953 6.10214 5.4828 5.58726 5.86243 5.20764C6.24205 4.82802 6.75693 4.61475 7.2938 4.61475C7.83067 4.61475 8.34555 4.82802 8.72517 5.20764C9.1048 5.58726 9.31807 6.10214 9.31807 6.63901Z" fill="#0E0E0E" />
    </svg>
);
