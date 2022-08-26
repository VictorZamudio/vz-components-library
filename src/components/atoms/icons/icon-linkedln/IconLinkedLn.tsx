import React from "react";

interface IconProps {
  className?: string;
  style?: object;
  testId: string;
}

/**
 *
 * @param className
 * @param style
 * @param testId
 * @constructor
 */

function IconLinkedLn({ className, style, testId }: IconProps) {
  return (
    <svg
      className={className}
      style={style}
      data-testId={testId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M100 448H7V149h93zM54 108C24 108 0 84 0 54a54 54 0 0 1 108 0c0 29-25 54-54 54zm394 340h-93V302c0-34 0-79-48-79s-56 38-56 77v148h-93V149h90v41h1c12-24 43-49 88-49 94 0 111 62 111 143v164z" />
    </svg>
  );
}

IconLinkedLn.displayName = "IconLinkedLn";

IconLinkedLn.defaultProps = {
  className: "icon linkedln",
  style: {
    width: "24px",
    height: "auto",
  },
  testId: "icon-linkedln",
};

export default IconLinkedLn;
