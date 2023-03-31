import { useMobile } from "../../hooks/useMobile"
import { DesktopCategoryList } from "./Desktop/DesktopCategoryList"
import { MobileCategoryList } from "./Mobile/MobileCategoryList"

export const CategoryList = ({ categoriesList, setFilter, filter }) => {
    const inMobile = useMobile(800)

    return(
        <>
          {inMobile ? <MobileCategoryList categoriesList={categoriesList} setFilter={setFilter} /> : <DesktopCategoryList categoriesList={categoriesList} filter={filter} setFilter={setFilter} />}
        </>
    )
}