
const clientes = [];


/* const traerInfo = async () => {
 const response = await fetch("./data.json");
 const data = await response.json();   
}; */


const botonEliminar = ( (x) => {
  eliminar.addEventListener("click", () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Resgistro borrado',
        
            timer: 1500    
        });

       localStorage.removeItem(x);

       setTimeout(() => {location.reload();}, 2000);
    });
})

let logueado = document.getElementById("logueado");


logueado.addEventListener("click", (e) => {
    e.preventDefault();

    let usuario = prompt("Ingrese Nombre");
    
    let usuarioStorage = localStorage.getItem(`${usuario}`);
    
    let objeto = JSON.parse(usuarioStorage);

    if (usuarioStorage) {
     usuario = usuarioStorage;
        
     formulario.remove();
     logueado.remove();

        objeto.forEach((item) => {

        
          
         let div = document.createElement("div");
         div.innerHTML = `
             <h2>Cliente: ${item.nombre}</h2>
             <p>Localidad: ${item.localidad}</p>
             <p>Producto solicitado: ${item.producto}</p> 
             <br>
             <button id="eliminar"> Eliminar registro<button/>
            `;
             
         document.body.append(div);
            
             
         let eliminar = document.getElementById("eliminar");
            
         botonEliminar(`${item.nombre}`); 
        })
    } else ( alert("Debe Registrarse"))
})
  

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
        
      
 const { value : product }  = Swal.fire({
     title: 'Productos',
     input: 'select',
     inputOptions: {
          'Prestamos': {
             seisCuotas: '6 cuotas',
             doceCuotas: '12 cuotas',
             dieciochoCuotas: 'Hasta 24 cuotas'  
           },
         'Seguros': {
                segurosVida: 'Seguros de vida',
                segurosVivienda: 'Seguros de vivienda',
                segurosAutomotor: 'Seguros Automotor'
            },
         'Inversiones': {
             bienesRaices: 'Inversiones Bienes raices',
             activos : 'Inversiones de activos'
            }
        },
     inputPlaceholder: 'Selecciona Producto',
     showCancelButton: true,
     inputValidator: (value) => {
         return new Promise((resolve)  => { 
                if (value) {
                   
                 resolve();
                 let inputs = e.target.children;
                 
                 const cliente = {
                     nombre: inputs[1].value,
                     dni: inputs[3].value,
                     localidad: inputs[5].value,
                     producto: `${value}`, 
                    };   
                    
                 clientes.push(cliente);
                    
                 localStorage.setItem(`${cliente.nombre}`, JSON.stringify(clientes));
                    
                    
                 formulario.remove(); 
                 logueado.remove();
                    
                    
                    
                    
                 clientes.forEach((item) => {                                
                     let div = document.createElement("div");
                     div.innerHTML = `
                         <h2>Cliente: ${item.nombre}</h2>
                         <p>Localidad: ${item.localidad}</p>
                          <p>Producto solicitado: ${item.producto}</p> 
                         <br>
                         <button id="eliminar"> Eliminar registro<button/>
                        `;
       
                     document.body.append(div);
                          
                        

                     let eliminar = document.getElementById("eliminar");
            
                     botonEliminar(`${cliente.nombre}`); 
       
                    });
                };
            })
        }
    });
})


