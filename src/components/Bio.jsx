import React from 'react';
import { useTranslation } from 'react-i18next'

const Bio = () => {
    const { t } = useTranslation()

    return (
        <section className="text-gray-300 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-3">{t('bio.handle')}</h2>
                <p className="text-lg text-accent leading-relaxed">
                    {t('bio.description')}
                </p>
            </div>
        </section>
    );
}

export default Bio;
