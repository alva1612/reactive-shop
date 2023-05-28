export const ERROR = {
  UNIMPLEMENTED: "Not implemented",
  CONTEXT_DEFAULT: "Default value from context",
};
export const throwDefaultContext = () => {
  throw new Error(ERROR.CONTEXT_DEFAULT);
};
