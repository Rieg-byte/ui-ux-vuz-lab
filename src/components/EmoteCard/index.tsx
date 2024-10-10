import React from 'react';
import styles from './EmoteCard.module.css';

interface EmoteCardProps {
    label: string;
    count: number;
    imageUrl: string;
}
export const EmoteCard = ({ label, count, imageUrl }: EmoteCardProps) => {
    return (
        <div className={styles.emoteCard}>
            <img src={imageUrl} alt={label} className={styles.emoteImage} />
            <h3 className={styles.emoteLabel}>{label}</h3>
            <p className={styles.emoteCount}>{count}</p>
        </div>
    );
};
