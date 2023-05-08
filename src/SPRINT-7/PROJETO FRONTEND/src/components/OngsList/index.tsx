import { useContext, useState } from "react";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IOngs } from "../../providers/OngsContext";

import { OngsContext } from "../../providers/OngsContext";
import OngsCard from "./OngCard";
import { UserContext } from "../../providers/UserContext";
import { DeleteModal } from "../Modal/DeleteModal";
import { DonateModal } from "../Modal/DonateModal";
import { EditModal } from "../Modal/EditModal";

export const OngsList = () => {
  const { listCard, filteredOng } = useContext(OngsContext);
  const listToRender = filteredOng.length > 0 ? filteredOng : listCard
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<IOngs | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState<IOngs | null>(null)
  const [isDonateModalOpen, setIsDonateModalOpen] = useState<IOngs | null>(null)

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        autoplay={{ delay: 1000 }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
        }}
      >
        {listToRender.map((ong) => {
          return (
            <SwiperSlide key={ong.id}>
              <OngsCard 
                setIsEditModalOpen={setIsEditModalOpen} 
                setIsDeleteModalOpen={setIsDeleteModalOpen} 
                setIsDonateModalOpen={setIsDonateModalOpen} 
                ong={ong} 
              />
            </SwiperSlide>
          );
        })}
      </Swiper>


      {isEditModalOpen && <EditModal ong={isEditModalOpen} onClose={() => setIsEditModalOpen(null)} />}
      {isDeleteModalOpen && <DeleteModal ong={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(null)} />}
      {isDonateModalOpen && <DonateModal ong={isDonateModalOpen} onClose={() => setIsDonateModalOpen(null)} />}
    </>
  );
};
