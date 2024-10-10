import React from 'react';
import Button from '../components/Button';
import { EmoteCard } from '../components/EmoteCard';


const Home = () => {
    return (
        <div>
            <h1>Часто используемые эмоции</h1>
            <div style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: '16px',
            }}>
                <EmoteCard
                    label="PogT"
                    count={3249}
                    imageUrl="/path/to/image.jpg"
                />
                <EmoteCard
                    label="LUL"
                    count={1322}
                    imageUrl="/path/to/image2.jpg" 
                />
            </div>
        </div>
    );
}

export default Home;
