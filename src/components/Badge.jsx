import React from 'react';
import { useTranslation } from 'react-i18next';

const Badge = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 px-3 py-0.5 text-xs text-emerald-300/70">
            <span className="h-1 w-1 rounded-full bg-emerald-400/60" aria-hidden="true" />
            <span>
                {t('badge.text')}
            </span>
        </div>
    );
};

export default Badge;
