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

const createUserFormSchema = z.object({
        name: z.string() .nonempty("O nome é obrigatório")
        .transform(name => {
            return name.trim().split("  ").map(word =>  {
                return word[0].toLocaleUpperCase().concat(word .substring(1))
            })
        }),
        email: z.string()
        .nonempty("O e-mail é obrigatório")
        .email("Formato de e-mail inválido")
        .toLowerCase(),
        password: z.string()
        .min(6,  "A senha precisa de no mpinimo seis caracteres" ),
    })


type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function Message() {

    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

     
    const [output, setOutput] = useState("")

    function createUser(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    // high-order function

    return(
        <section className="flex flex-row w-full mt-46">
            <div className="w-[50%] flex flex-col gap-5">
                <h2 className="w-[50%] font-Instrument text-6xl">Fale Conosco</h2>
                <p className="w-[90%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea dicta reiciendis accusamus labore ducimus ipsum, a quo dolores, quis facere. Veniam ex optio obcaecati earum possimus amet ab corrupti?</p>
            </div>

            <form 
            className="w-[50%] flex flex-col gap-4 border rounded-2xl p-5 font-Instrument"
            onSubmit={handleSubmit(createUser)}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Nome</label>
                    <input 
                    type="text" 
                    className="border rounded-full shadow-sm p-2 text-black"
                    {...register("name")} />
                    {errors.name &&  <span>{errors.name.message}</span>}
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email">E-mail</label>
                    <input 
                    type="email" 
                    className="border rounded-full shadow-sm p-2 text-black"
                    {...register("email")} />
                    {errors.email &&  <span>{errors.email.message}</span>}
                </div>
                
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password"
                    className="border rounded-full shadow-sm  p-2 text-black"
                    {...register("password")} />
                    {errors.password &&  <span>{errors.password.message}</span>}
                </div>

                <button 
                type="submit"
                className="font-semibold text-white h-10 cursor-pointer rounded-full font-Instrument bg-red-400 p-3 flex items-center justify-center hover:bg-red-200 transition duration-300 transform"
                >
                    Salvar
                </button>                                    
            </form>
            <pre>{output}</pre>
        </section>
    )
}

