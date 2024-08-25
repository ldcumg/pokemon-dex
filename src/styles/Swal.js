import Swal from "sweetalert2";

export const SwalAlert = (title, icon, selectedNum) => {
  const alertObj = {
    position: "top",
    title: title,
    icon: icon,
    showConfirmButton: false,
    timer: 800,
  };
  return Swal.fire(
    selectedNum ? { ...alertObj, text: `${selectedNum}/6` } : alertObj
  );
};

export const SwalConfirm = (text, confirmText) => {
  return Swal.fire({
    title: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: confirmText,
    cancelButtonText: "취소",
  });
};
