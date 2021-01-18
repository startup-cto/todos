// Based on https://webaim.org/techniques/css/invisiblecontent/
export const screenReaderOnlyStyle = {
  position: "absolute",
  left: "-10000px",
  top: "auto",
  width: "1px",
  height: "1px",
  overflow: "hidden",
} as const;
