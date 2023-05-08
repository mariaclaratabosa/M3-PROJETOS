import { HeaderLearnMore } from "../../components/HeaderLearnMore"
import { CardLearnMore } from "../../components/CardLearnMore"
import { Maps } from "../../components/Maps"
import { IOngs, OngsContext } from "../../providers/OngsContext";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react"

export const LearnMore = () => {
  const { listCard } = useContext(OngsContext);
  const { name } = useParams()
  const [ong, setOng] = useState<IOngs>({ id: 0, description: "", link: "", logo: "", name: name!, userId: 0 })

  useEffect(() => {
    if (listCard.length > 0) {
      const ongFind: IOngs = listCard.find((ong) => ong?.name === name)!
      setOng(ongFind)
    }

  }, [listCard])

  return (
    <>
      {listCard &&
        <>
          <HeaderLearnMore />
          <main className="container">
            <CardLearnMore ong={ong} />
            <Maps locationName={ong.name} />
          </main>
        </>
      }
    </>
  )
}
