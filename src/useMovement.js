import { useState, useEffect } from 'react';

export default function useMovement() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [direction, setDirection] = useState('down');

    // Drawing on Canvas with keyboard
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
            
        function handleKeyDown(e) {
            if (e.key === 'ArrowUp') move('up');
            if (e.key === 'ArrowDown') move('down');
            if (e.key === 'ArrowLeft') move('left');
            if (e.key === 'ArrowRight') move('right');
        }

        return () => window.addEventListener('keydown', handleKeyDown);
    }, []);
    // ^ empty array means ONLY RUN ONCE PER RENDER

    function move(dir) {
        setDirection(dir);
        if (direction === 'up') setY((y) => y - 20);
        if (direction === 'left') setX((x) => x - 20);
        if (direction === 'down') setY((y) => y + 20);
        if (direction === 'right') setX((x) => x + 20);
    }

    return { x, y, direction, move};
}