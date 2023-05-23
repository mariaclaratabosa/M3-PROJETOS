import { Link, useParams } from "react-router-dom"
import { IOngs } from "../../providers/OngsContext"
interface ICardLearnMoreProps{
  ong: IOngs
}
export const CardLearnMore = ({ong}: ICardLearnMoreProps) => {
  
  return(
    <>
      <section>
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center gap-4 mobile:gap-2">
            <img src={ong?.logo} alt={ong?.name} className="w-40 h-40 mobile:w-20 mobile:h-20"/>
            <h2 className="text-xl font-semibold mobile:mr-4">{ong?.name}</h2>
          </div>
          <div>
              <Link to={ong?.link} className="bg-[#3AB8C7] w-[7.375rem] flex justify-center items-center h-[2.125rem] rounded-lg text-white">Visite o site</Link>
          </div>
        </div>
        <div>
          <p className="border-4 border-[#3AB8C7] rounded-lg p-5 text-lg mb-16">{ong?.description}</p>
        </div>
      </section>
    </>
  )
}
