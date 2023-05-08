import { useContext, useState } from "react"
import { IOngs, OngsContext } from "../../../providers/OngsContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../Form/Input"
import { Textarea } from "../../Form/Textarea"
import { TEditFormData, editFormSchema } from "./editModalSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ClipLoader } from "react-spinners"

interface IEdit {
    ong: IOngs,
    onClose: () => void
}

export const EditModal = ({ ong, onClose }: IEdit) => {
    const { editOng } = useContext(OngsContext)
    const { register, handleSubmit, formState: {errors} } = useForm<TEditFormData>({
        resolver: zodResolver(editFormSchema)
    })
    const [loading, setLoading] = useState(false)

    const submit: SubmitHandler<TEditFormData> = (formData) => {
        editOng(formData, setLoading, ong.id, onClose)
    }

    return (
        <div className="h-full w-full bg-color-01 fixed top-0 left-0 flex items-center justify-center z-[1000]">
            <div role="dialog" className="w-[32.0625rem] h-[28.9325rem] bg-color-02 rounded-[10px] py-[1.75rem] px-[3.6875rem] border border-[#3AB8C7] mobile:w-[19rem] mobile:p-[1rem] mobile:h-fit">
                <div className="flex justify-between mb-[1.5rem] text-white text-[1.25rem] mobile:text-[1rem]">
                    Editar ONG:
                    <button onClick={onClose} className="text-[1.5rem] mobile:text-[1rem]">X</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label="Nome:" defaultValue={ong?.name} {...register("name")} disabled={loading} error={errors.name} />
                    <Textarea label="Descrição" defaultValue={ong?.description} {...register("description")} disabled={loading} error={errors.description}/>
                    <button type="submit" disabled={loading} className="w-full bg-[#3AB8C7] flex justify-center items-center h-[3rem] rounded-[1.25rem] text-white justify-around mt-7 ">
                        {loading ? <ClipLoader color="#ffffff" size={20}/> : "Editar ONG"}
                    </button>
                </form>
            </div>
        </div>
    )
}