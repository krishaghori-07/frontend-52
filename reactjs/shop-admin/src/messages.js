import { toast, Bounce } from 'react-toastify';
var options = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
}
export function showError(message = "oops something went wrong, please try after sometime") {
    toast.error(message, options);
}
export function showMessage(message) {
    toast.success(message, options);
}