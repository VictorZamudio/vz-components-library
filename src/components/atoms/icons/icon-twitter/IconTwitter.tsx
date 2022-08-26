import React from "react";

function IconTwitter({ className, style, testId }) {
  return (
    <svg
      className={className}
      style={style}
      data-testId={testId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="m459 152 1 13A297 297 0 0 1 0 417a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z" />
    </svg>
  );
}

IconTwitter.displayName = "IconTwitter";

IconTwitter.defaultProps = {
  className: "icon facebook",
  style: {
    width: "24px",
    height: "auto",
  },
  testId: "icon-facebook",
};

export default IconTwitter;
