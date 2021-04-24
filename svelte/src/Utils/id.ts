export const parseIdFromName = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z \d-]/g, "") //leaves only a-z, 0-9, and -
    .replace(/-+/g, " ") // changes all sets of - to one space
    .trim()
    .replace(/ +/g, "-"); // changes all sets of spaces to one -
};

export const detailedIdValid = (
  id: string
): { valid: boolean; reasons: { passed: boolean; label: string }[] } => {
  let out = {
    valid: true,
    reasons: [
      {
        passed: parseIdFromName(id) === id,
        label: "must only contain a-z, 0-9, or -",
      },
      { passed: id.length <= 30, label: "must be less than 30 characters" },
      { passed: id.length >= 8, label: "must be more than 8 characters" },
    ],
  };

  out.valid = out.reasons.reduce((pre, current): boolean => {
    return pre && current.passed;
  }, true);
  return out;
};

export const idValid = (id: string): boolean => {
  return detailedIdValid(id).valid;
};

export const getIdFromName = (str: string): string | null => {
  const id = parseIdFromName(str);
  return idValid(id) ? id : null;
};
