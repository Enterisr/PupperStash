class Utils {
  static GetCssVar(varName: String) {
    return getComputedStyle(document.body).getPropertyValue(`--${varName}`);
  }
}
export default Utils;
