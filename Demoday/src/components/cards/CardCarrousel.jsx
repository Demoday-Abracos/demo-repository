import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../Styles/CardCarrousel.css';
import Card from './Card';
import { useNavigate } from 'react-router-dom'; 

const CardCarousel = () => {
    const navigate = useNavigate(); 

    const cards = [
        { image: 'assets/images/remedio.gif', label: 'Hospital', route: '/hospital' },
        { image: 'assets/images/fazer-compras.gif', label: 'Mercado', route: '/mercado' },
        { image: 'assets/images/onibus-escolar.gif', label: 'Transporte', route: '/transporte' },
        { image: null, label: 'Alimentação', route: '/alimentacao' },
        { image: null, label: 'Banco', route: '/banco' },
        { image: null, label: 'Polícia', route: '/policia' },
        { image: null, label: 'Compras', route: '/compras' },
        { image: null, label: 'Escola', route: '/escola' },
        { image: null, label: 'Documentos', route: '/documentos' },
    ];

    const onCardClick = (route) => {
        navigate(route);
    };

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation
            loop={true}
            style={{ width: '80%', margin: '0 auto' }}
        >
            {cards.map((card, index) => (
                <SwiperSlide key={index} onClick={() => onCardClick(card.route)} style={{ cursor: 'pointer' }}>
                    <Card image={card.image} label={card.label} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardCarousel;
