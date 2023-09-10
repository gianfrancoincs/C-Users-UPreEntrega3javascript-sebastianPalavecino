(async () => {
    const {value : pais } = await Swal.fire({
        title: 'Bienvenido!',
        text : 'Selecciona tu pais',
        icon: 'question',
        confirmButtonText : 'seleccionar',
        footer : 'informacion importante',
        padding : '0.5rem',
        backdrop: 'true',
        timer: '5000',
        timerProgressBar : 'true',
        input : 'select',
        inputPlaceholder: 'Pais',
        inputOptions: {
            Argentina : 'Argentina',
            Chile : 'Chile',
            Paraguay : 'Paraguay',
            Uruguay : 'Uruguay',
            Bolivia : 'Bolivia',
            Brasil : 'Brasil',
    },
    showConfirmButton: true,
	confirmButtonColor: '#3E60E9',
	confirmButtonAriaLabel: 'Confirmar',
    showCancelButton: 'false',
	cancelButtonText: 'Cancelar',
	cancelButtonAriaLabel:'Cancelar',
    buttonsStyling: true,
	showCloseButton: true,
	closeButtonAriaLabel: 'cerra alerta',

    });
    if (pais){
        Swal.fire({
            title: `Seleccionaste ${pais}`
            
        });
    }
})()



  