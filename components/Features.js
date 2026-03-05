import React, { useState, useEffect, useCallback } from 'react';
import { Wifi, Utensils, Car, Flame, Tv, PawPrint, X, ChevronLeft, ChevronRight, Maximize2, MapPin } from 'lucide-react';

const Features = ({ t, language }) => {
    // Načtení dat z window
    const galleryImages = window.galleryImages || [];

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const amenities = [
        { icon: <Wifi className="w-6 h-6" />, label: t('about.amenities.wifi') },
        { icon: <MapPin className="w-6 h-6" />, label: t('about.amenities.skibus') },
        { icon: <Utensils className="w-6 h-6" />, label: t('about.amenities.kitchen') },
        { icon: <Tv className="w-6 h-6" />, label: t('about.amenities.tv') },
        { icon: <Flame className="w-6 h-6" />, label: t('about.amenities.heating') },
        { icon: <PawPrint className="w-6 h-6" />, label: t('about.amenities.pets') },
    ];

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setIsLightboxOpen(false);
        document.body.style.overflow = 'unset';
    }, []);

    const nextImage = useCallback((e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, [galleryImages]);

    const prevImage = useCallback((e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, [galleryImages]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isLightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, closeLightbox, nextImage, prevImage]);

    if (!galleryImages.length) return null;

    return (
        <div id="about" className="py-24 bg-brand-light/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                            {t('about.title1')} <br />{t('about.title2')}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {t('about.description1')}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t('about.description2')}
                        </p>

                        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                            {amenities.map((item, index) => (
                                <div key={index} className="flex items-center text-gray-700">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-brand-gold mr-3">
                                        {item.icon}
                                    </div>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-[500px] grid grid-rows-3 grid-cols-2 gap-3">
                        <div
                            className="row-span-2 col-span-2 relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                            onClick={() => openLightbox(0)}
                        >
                            <img
                                src={galleryImages[0].url}
                                alt={galleryImages[0].alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <Maximize2 className="text-white drop-shadow-md w-12 h-12" />
                            </div>
                        </div>

                        <div
                            className="row-span-1 col-span-1 relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
                            onClick={() => openLightbox(1)}
                        >
                            <img
                                src={galleryImages[1].url}
                                alt={galleryImages[1].alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div
                            className="row-span-1 col-span-1 relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
                            onClick={() => openLightbox(2)}
                        >
                            <img
                                src={galleryImages[2].url}
                                alt={galleryImages[2].alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center group-hover:bg-brand-dark/50 transition-colors">
                                <span className="text-white font-serif font-bold text-xl">
                                    +{galleryImages.length - 2} {language === 'cs' ? 'fotek' : 'photos'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isLightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-[110]"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all z-[110] hidden md:block"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                        <div className="relative max-w-full max-h-[85vh]">
                            <img
                                src={galleryImages[currentImageIndex].url}
                                alt={galleryImages[currentImageIndex].alt}
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
                            />
                            <div className="md:hidden absolute inset-y-0 left-0 w-1/3 bg-transparent" onClick={prevImage} />
                            <div className="md:hidden absolute inset-y-0 right-0 w-1/3 bg-transparent" onClick={nextImage} />
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-white text-lg font-medium tracking-wide">
                                {galleryImages[currentImageIndex].alt}
                            </p>
                            <p className="text-white/50 text-sm mt-1">
                                {currentImageIndex + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all z-[110] hidden md:block"
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>
            )}
        </div>
    );
};

window.Features = Features;