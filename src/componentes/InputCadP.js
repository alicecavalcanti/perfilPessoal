
import {useForm} from "react-hook-form";
function Form () {
    const {register, handleSubmit} =useForm();
    const onSubmit= (e) => {
        console.log(e);
        
    }
    return (
        
        <form onSubmit= {handleSubmit(onSubmit)}>
            <div>
                <input className="FormNome" type="text" {...register("nome")} placeholder="Digite o seu nome "/>
            </div>
            <div>
                <input className="FormMail" type="email" {...register("email")} placeholder="Digite seu e-mail "/>
            </div>
            <div>
                <input className="FormTel" type="text"{...register("telefone")} placeholder="Digite seu telefone "/>
            </div>
            <div>
            <input className="FormCrie" type="password"{...register("senha")} placeholder="digite uma senha"/>
            </div>
            <div>
                <input className="FormSobre" type="text" {...register("sobrenome")} placeholder="Digite seu sobrenome "/>
            </div>
            <div> 
             <input className="FormConfMail" type="email"{...register("senha")} placeholder="Confirme seu e-mail "/>
             </div>
             <div> 
             <input className="FormNasc" type="date"{...register("nascimento")} />
             </div>
             <div> 
             <input className="FormCPNJ" type="text"{... register("cpf")} placeholder="Digite seu CPF"/>
             </div>
             <div> 
             <input className="Formbairro" type="text"{...register("bairro")} placeholder="Digite seu bairro"/>
             </div>
             <div> 
             <input className="Formcidade" type="text"{...register("cidade")} placeholder="Digite sua cidade"/>
             </div>
             <div> 
             <input className="FormConfSenha" type="password"{...register("senha") } placeholder="Confirme sua senha"/>
             </div>
             
             <div>
                 <button className= "Confirm" type="submit"> Cadastre-se</button>
             </div>
             <div> 
            <select className= "Formgenero" {...register("genero") }>
                <option value =""> Selecione</option>
                <option value ="1">Feminino</option>
                <option value= "2">Masculino</option>
                <option value= "3">Trans</option>
                <option value= "4"> Outros</option>
                <option value= "5">Prefiro não declarar</option>

            </select>
            <div className="estado" {...register("estado") }>
                <select className= "FormEst"  >
                 <option value = "">Selecione</option>
                 <option value = "1">Acre</option>
                 <option value = "2">Alagoas</option>
                 <option value = "3">Amapá</option>
                 <option value = "4">Amazonas</option>
                 <option value = "5">Bahia</option>
                 <option value = "6">Ceará</option>
                 <option value = "7">Distrito Federal</option>
                 <option value = "8">Espírito Santo</option>
                 <option value = "9">Goiás</option>
                 <option value = "10">Maranhão</option>
                 <option value = "11">Mato Grosso</option>
                 <option value = "12">Mato Grosso do Sul</option>
                 <option value = "13">Minas Gerais</option>
                 <option value = "14">Pará</option>
                 <option value = "15">Paraíba</option>
                 <option value = "16">Paraná</option>
                 <option value = "17">Pernambuco</option>
                 <option value = "18">Piauí</option>
                 <option value = "19">Rio de Janeiro</option>
                 <option value = "20">Rio Grande do Norte</option>
                 <option value = "21">Rio Grande do Sul</option>
                 <option value = "22">Rondônia</option>
                 <option value = "23">Roraima</option>
                 <option value = "24">Santa Catarina</option>
                 <option value = "25">São Paulo</option>
                 <option value = "26">Sergipe</option>
                 <option value = "26">Tocantins</option>

                </select>
                </div>
             </div>

             
            
            

            
        </form>
    )
}

export default Form;