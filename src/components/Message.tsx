import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

/**
 * to-do
 * 
 * [ ] validação / transformação
 * [ ] fileld arrays
 * [ ] Upload de arquivos
 * [ ] Composition Parrern  
 */


export default function Message() {

    const createUserFormSchema = z.object({
        email: z.string()
        .nonempty("O e-mail é obrigatório")
        .email("Formato de e-mail inválido"),
        password: z.string()
        .min(6,  "A senha precisa de no mpinimo seis caracteres" )         
    })

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(createUserFormSchema)
    })
    const [output, setOutput] = useState("")

    function createUser(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    // high-order function

    return(
        <section className="flex flex-row w-full">
            <div>
                <h2 className="w-[50%]">Fale Conosco</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea dicta reiciendis accusamus labore ducimus ipsum, a quo dolores, quis facere. Veniam ex optio obcaecati earum possimus amet ab corrupti?</p>
            </div>

            <form 
            className="w-[50%] flex flex-col gap-4 border"
            onSubmit={handleSubmit(createUser)}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">E-mail</label>
                    <input 
                    type="email" 
                    className="border border-zinc-200 rounded shadow-sm px-3 text-black"
                    {...register("email")} />
                </div>
                
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password"
                    className="border border-zinc-200 rounded shadow-sm  px-3 text-black"
                    {...register("email")} />
                </div>

                <button 
                type="submit"
                className="border bg-emerald-500 rounded font-semibold text-white h-10 cursor-pointer hover:bg-amber-50 hover:text-black"
                >
                    Salvar
                </button>                                    
            </form>
            <pre>{output}</pre>
        </section>
    )
}

