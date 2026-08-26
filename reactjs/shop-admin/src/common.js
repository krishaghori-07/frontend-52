function get() {
    return "http://www.theeasylearnacademy.com/shop/";
}
export function getBase() {
    let address = get() + "ws/";
    return address;
}
export function getImageBase() {
    let address = get() + "images/";
    return address;
}