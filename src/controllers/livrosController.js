 import livros from "../models/livro.js";

 class LivroController {

    static listarLivros = async (req,res) =>{
        try {
            const livrosResultado = await livros.find()
            .populate('autor')
           .exec (res.status(200).json(livrosResultado))
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static listarLivroPorId = async (req,res) => {
        try{
        const  id = req.params.id;
        
         livros
         .findById(id)
        .populate("autor", "nome")
        .exec
         res.status(200).send(livros);
       } catch (err) {
            res.status (400).send ({message: `${err.message} - Id do livro não encontrado`})
       
       }
    }

    static cadastrarLivro = async (req,res) => {
        try{
           let novolivro = await livros.create(req.body);

           return res.status(201).send(novolivro.toJSON())
        }catch (err) {
           
            res.status(500).send({message:`${err.message} - falha ao cadastrar livro`})
            
           }
    }
    static atualizarLivro = async (req,res) => {
        try {
        const id = req.params.id;
       
       
         await livros.findByIdAndUpdate(id, {$set: req.body});
         res.status(200).send({message:'Livro atualizado com sucesso'});

     } catch (err) {
           
        res.status(500).send({message:err.message})
        
       }

    }

    static excluirLivro = async (req,res)  => {
        try{
            const id = req.params.id;
            livros.findByIdAndDelete(id)
            res.status(200).send({message: 'Livro removido com sucesso'})

        }catch {
            res.status(500).send({messagem:err.message})

        }

    }
    static listarLivroPorEditora = async (req,res)  => {
        try{
            const editora = req.query.editora;
            livros.find ({'editora': editora},{})
            res.status(200).send(livros)

        }catch {
            res.status(500).send({messagem:err.message})

        }

    }
  }

 
 export default LivroController