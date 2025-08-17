import $ from "jquery";

class Common {
  public static emailInput(): any {
    return $(`#email`);
  }
  public static passwordInput(): any {
    return $(`#password`);
  }
  public static signUpBtn(): any {
    return $(`#signup`);
  }
}
export default Common;
