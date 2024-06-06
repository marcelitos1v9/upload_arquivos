//metodos de manipulação do banco

import Galeria from "../models/Galeria.js"

class GaleriaService {
    Save(file) {
        //metodo para salvar uma foto
        Galeria.create({
            file: file
        })
    }
    //metodo para buscar imagens
    SelectPictures(){
        const galeria = Galeria.findAll()
        return galeria
    }
}



export default new GaleriaService()