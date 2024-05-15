import Swal from 'sweetalert2' 

// // Swal.fire({
// //     position: "top-end",
// //     icon: "success",
// //     title: "Your work has been saved",
// //     showConfirmButton: false,
// //     timer: 1500
// //   });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  export function showSmallAlertSucces(msg){
      Toast.fire({
        icon: "success",
        title: msg
      });
  }