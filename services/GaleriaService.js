//metodos de manipulação do banco

import Galeria from "../models/Galeria.js"

class GaleriaService{
    Save(file){
        //metodo para salvar uma foto
        Galeria.create({
            file: file
        })
    }
    //metodo para ler uma imagem
}

export default new GaleriaService()