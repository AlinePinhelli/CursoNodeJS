 import autores from "../models/autor.js";

 class AutorController {

    static listarAutores = async (req,res) =>{
        try {
            const autoresResultado = await autores.find();
            res.status(200).json(autoresResultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static listarAutorPorId = async (req,res) => {
        try{
        const  id = req.params.id;
        
         autores
         .findById(id)
        .populate("autor", "nome")
         res.status(200).send(autores);
       } catch (err) {
            res.status (400).send ({message: `${err.message} - Id do autor não encontrado`})
       
       }
    }

    static cadastrarAutor = async (req,res) => {
        try{
           let novoAutor = await autores.create(req.body);

           return res.status(201).send(novoAutor.toJSON())
        }catch (err) {
           
            res.status(500).send({message:`${err.message} - falha ao cadastrar autor`})
            
           }
    }
    static atualizarAutor = async (req,res) => {
        try {
        const id = req.params.id;
       
       
         await autores.findByIdAndUpdate(id, {$set: req.body});
         res.status(200).send({message:'autor atualizado com sucesso'});

     } catch (err) {
           
        res.status(500).send({message:err.message})
        
       }

    }

    static excluirAutor = async (req,res)  => {
        try{
            const id = req.params.id;
            autores.findByIdAndDelete(id)
            res.status(200).send({message: 'autor removido com sucesso'})

        }catch {
            res.status(500).send({messagem:err.message})

        }

    }

  }

 
 export default AutorController