class Utils {
  static SERVER_PORT = 8080;

  static GetCssVar(varName: String) {
    return getComputedStyle(document.body).getPropertyValue(`--${varName}`);
  }
  static ResovleServerPath() {
    return window.location.href.includes("localhost")
      ? `http://localhost:${Utils.SERVER_PORT}/`
      : window.location.origin + "/";
  }
  static GetFilenameWithoutExtension(fileName: string) {
    return fileName.slice(0, fileName.lastIndexOf("."));
  }
  static secondsDurationTostring(seconds: number) {
    const minutes: number = seconds / 60;
    const hours: number = minutes / 60;

    if (hours > 1) {
      return hours.toFixed(2) + "h";
    }
    return minutes.toFixed(2) + "m";
  }
  static pointNotationToColon(number: string) {
    let [beforePoint, afterPoint] = number.split(".");
    if (afterPoint) {
      afterPoint =
        (parseInt(afterPoint) * 0.6).toFixed().toString() +
        afterPoint.charAt(afterPoint.length - 1);
      if (parseInt(afterPoint) < 10) {
        afterPoint = "0" + afterPoint;
      }
    }
    const newNumber = beforePoint + ":" + afterPoint;
    return newNumber;
  }
}
export default Utils;
