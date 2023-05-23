import { useContext, useState } from "react"
import { OngsContext } from "../../../providers/OngsContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { TAddFormData, addFormSchema } from "./addModalSchema"
import { Input } from "../../Form/Input"
import { Textarea } from "../../Form/Textarea"
import { ClipLoader } from "react-spinners"

interface IAddModalProps {
    onClose: () => void,
}

export const AddModal = ({ onClose }: IAddModalProps) => {
    const [loading, setLoading] = useState(false)
    const { addOng } = useContext(OngsContext)
    const { register, handleSubmit, formState: { errors } } = useForm<TAddFormData>({
        resolver: zodResolver(addFormSchema)
    })

    const submit: SubmitHandler<TAddFormData> = (formData) => {
        addOng(formData, setLoading, onClose)
    }


    return (
        <div className="h-full w-full bg-color-01 fixed top-0 left-0 flex items-center justify-center z-[1000]">
            <div role="dialog" className="w-[32.0625rem] h-[39.625rem] bg-color-02 rounded-[10px] py-[1.75rem] px-[3.6875rem] mobile:p-[1.5rem] border border-[#3AB8C7] mobile:w-[19rem] mobile:h-[33rem]">
                <div className="flex justify-between mb-[1.5rem]">
                    <p>
                        Adicionar uma nova ONG:
                    </p>
                    <button onClick={onClose} className="text-[1.5rem] mobile:text-[1rem]">X</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label="URL da imagem:" type="text" {...register("logo")} disabled={loading} error={errors.logo} />
                    <Input label="Nome:" type="text" {...register("name")} disabled={loading} error={errors.name} />
                    <Textarea label="Descrição:" {...register("description")} disabled={loading} error={errors.description} />
                    <Input label="Link do site:" type="text" {...register("link")} disabled={loading} error={errors.link} />
                    <button type="submit" disabled={loading} className="w-full bg-[#3AB8C7] flex justify-center items-center h-[3rem] rounded-[1.25rem] text-white justify-around mt-7 mb-20 mobile:h-[2rem] mobile:mt-3">
                        {loading ? <ClipLoader color="#ffffff" size={20}/> : "Adicionar ONG"}
                    </button>
                </form>
            </div>
        </div>
    )
}