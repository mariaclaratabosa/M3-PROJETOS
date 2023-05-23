import { useContext, useState } from "react"
import { IOngs, OngsContext } from "../../../providers/OngsContext"
import { ClipLoader } from "react-spinners"

interface IDelete {
    ong: IOngs,
    onClose: () => void
}

export const DeleteModal = ({ ong, onClose }: IDelete) => {
    const [loading, setLoading] = useState(false)
    const { removeOng } = useContext(OngsContext)

    return (
        <div className="h-full w-full bg-color-01 fixed top-0 left-0 flex items-center justify-center z-[1000]">
            <div role="dialog" className="w-[32.0625rem] h-[23.9325rem] bg-color-02 rounded-[10px] py-[1.75rem] px-[3.6875rem] border border-[#3AB8C7] mobile:w-[19rem]">
                <div className="flex justify-between mb-[1.5rem] text-white text-[1.25rem] mobile:text-[1rem]">
                    <p>
                        Quer mesmo deletar essa ONG?
                    </p>
                    <button onClick={onClose} className="text-[1.5rem] mobile:text-[1rem]">X</button>
                </div>
                <div className="flex items-center min-h-[11.4856rem]">
                    <img src={ong?.logo} alt={`Logo da ONG ${ong?.name}`} className="mr-[1rem] max-w-[11.625rem] mobile:max-w-[9rem]" />
                    <p className="text-white text-[1.125rem]">{ong?.name}</p>
                </div>
                <button type="submit" disabled={loading} onClick={() => removeOng(ong.id, setLoading, onClose)} className="w-full bg-[#3AB8C7] flex justify-center items-center h-[3rem] rounded-[1.25rem] text-white justify-around mt-7 mb-20">
                    {loading ? <ClipLoader color="#ffffff" size={20}/> : "Deletar ONG"}
                </button>
            </div>
        </div>
    )
}