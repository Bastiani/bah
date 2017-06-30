export default (props) => {
  if (props.test) {
    return props.children;
  }
  return false;
};
