class Ej7{

    constructor(){
        this.mostrado = true;
    }

    mostrarH2(){
        $("h2").show();
    }

    ocultarH2(){
        $("h2").hide();
    }

    modificarUni(){
        $("h3").text("UNIOVI");
    }

    modificarGrado(){
        $("h3").text("Ing Informática del software");
    }

    añadirElementos(){
        $("h3").before("<h2>H2 generado antes de un h3</h2>");
    }

    eliminarH1(){
        $("h1").remove();
    }

    mostrarArbolDom(){
        $("body").remove("section");
        $("body").append("<section></section>");
        $("section").append("<h2>Arbol dom</h2>");
        $("*",document.body).each(function(){
            var padre = $(this).parent().get(0).tagName;
            $("section").append("<p>Etiqueta padre: "+padre+" elemento: " + $(this).get(0).tagName + " valor: "+$(this).get(0).textContent+"</p>")
            
        })
    }

    tablas(){
        if(this.mostrado){
            this.sumarTabla();
            this.mostrado = false;
        }
    }


    sumarTabla(){
        var first = true;




        $("tr").each(function(){
            var el = this.getElementsByTagName("th");
            var str = "";
            for(var i=0;i<el.length;i++){
                str+=el[i].innerHTML;
            }
            var el = this.getElementsByTagName("td");
            for(var i=0;i<el.length;i++){
                str+=el[i].innerHTML;
            }
            var nuevo = document.createElement("td");
            if(first){
                var nuevo = document.createElement("th");
                nuevo.setAttribute("id","nuevaCol");
                nuevo.setAttribute("scope","col");
                first = false;
            }
            else{
                nuevo.setAttribute("headers","nuevaCol")
            }
            nuevo.innerHTML = str;
            this.appendChild(nuevo)
        });

        $("tbody").append("<tr></tr>");
        var aux = new Array();
        $("tr").each(function(){
            var el = this.children;
            for(var i=0;i<el.length;i++){
                if(aux[i] == null){
                    aux[i] = "";
                }
                aux[i]+=el[i].innerHTML;
            }
            
        })



        

        for(var i = 0;i<aux.length;i++){
            var nuevo = document.createElement("td");
            nuevo.innerHTML = aux[i];
            var id = document.getElementsByTagName("tr")[0].children[i].getAttribute("id")
            nuevo.setAttribute("headers",id)
            $("tr").last().append(nuevo)
        }

        

    }


}

var ej7 = new Ej7();