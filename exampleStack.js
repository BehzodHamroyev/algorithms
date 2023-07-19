const isValid = (str) => {
  while (str.includes("[]") || str.includes("{}" || str.includes("()"))) {
    str = str.replace("[]", "");
    str = str.replace("{}", "");
    str = str.replace("()", "");
  }
  return !str;
};
