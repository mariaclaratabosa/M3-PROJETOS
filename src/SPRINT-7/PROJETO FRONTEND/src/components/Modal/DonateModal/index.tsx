import { useState } from "react"
import { IOngs } from "../../../providers/OngsContext"
import { Input } from "../../Form/Input"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface IDonate{
    ong: IOngs,
    onClose: () => void, 
}

export const DonateModal = ({ ong, onClose }: IDonate) => {
    const [donationValue, setDonationValue] = useState("")
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onClose()
        toast(`Obrigado por doar R$ ${donationValue} para a ONG ${ong.name}`)
    }

    const handleDonationValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDonationValue(event.target.value)
    }

    return(
        <div className="h-full w-full bg-color-01 fixed top-0 left-0 flex items-center justify-center z-[1000]">
            <div role="dialog" className="w-[32.0625rem] h-[23.9325rem] bg-color-02 rounded-[10px] py-[1.75rem] px-[3.6875rem] border border-[#3AB8C7]">
                <div className="flex justify-between mb-[1.5rem] text-white text-[1.25rem]">
                    <p>
                        Faça aqui sua doação.
                    </p>
                    <button onClick={onClose} className="text-[1.5rem]">X</button>
                </div>
                <div className="flex items-center min-h-[5rem] mb-[1.8125rem]">
                    <img src={ong.logo} alt={`Logo da ONG ${ong.name}`} className="mr-[1rem] max-w-[5rem]" />
                    <p className="text-white text-[1.125rem]">{ong.name}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input label="Valor:" type="number" placeholder="Digite aqui um valor" value={donationValue} onChange={handleDonationValue} />
                    <button type="submit" className="w-full bg-[#3AB8C7] flex justify-center items-center h-[3rem] rounded-[1.25rem] text-white justify-around">
                        Finalizar doação
                    </button>
                </form>
            </div>
        </div>
    )
} 