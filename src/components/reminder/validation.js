const validation = values => {
  const errors = {};
  if (
    values.projectName &&
    (values.projectName.length < 3 || values.projectName.length > 30)
  ) {
    errors.projectName = "Invalid length of reminder Text"
  }

  return errors;
};
export default validation;
