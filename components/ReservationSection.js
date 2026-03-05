import React from 'react';

const ReservationSection = ({ t, language }) => {
    React.useEffect(() => {
        // Načtení pomocného skriptu pro Previo iframe
        const script = document.createElement('script');
        script.src = "https://booking.previo.cz/iframe/";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // Cleanup: odstranění skriptu při odchodu z komponenty
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return (
        <section id="booking" className="py-24 bg-brand-light/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
                        {t('reservation.title')}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('reservation.subtitle')}
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 min-h-[600px]">
                    <iframe
                        src="https://booking.previo.cz/?hotId=752407&showTabs=reservation-pricelist-occupancy-checkin-coupon&showRoomType=988057&theme=gold&guestFilter=1&hideBenefits=1"
                        scrolling="no"
                        frameBorder="0"
                        width="100%"
                        height="2000"
                        name="previo-booking-iframe"
                        id="previo-booking-iframe"
                        allowTransparency="true"
                        title="Rezervační systém Previo"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

window.ReservationSection = ReservationSection;
