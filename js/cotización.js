function SubmitCotizacion(){

    let notifier = new AWN();

    notifier.success("Se ha enviado su solicitud")


    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("CelPhone").value = ""
    document.getElementById("details").value = ""
}