import Swal, { SweetAlertIcon } from 'sweetalert2';



export class alerts {


    static basicAlert(title: string, text: string, icon: SweetAlertIcon) {

        Swal.fire(title, text, icon);
    }





    static confirtmAlert(title:string,text:string,confirmButtronText:string) {


        return Swal.fire({
            title: title,
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmButtronText
        })
    }


}