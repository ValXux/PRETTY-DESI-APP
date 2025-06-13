import { useEffect, useState, useRef } from "react";
import { Audio } from "expo-av";
import { songList } from "../screens/Music/PlaylistList";

export default function useAudioPlayer() {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(null);

    // Reproduce la primera cancion automáticamente al cargar el hook
    useEffect(() => {
        play(songList[0]);

        return () => {
            if (soundRef.current) {
                soundRef.current.unloadAsync();
            }
        }
    }, []);

    const play = async (song) => {
        try {
            // Solo descarga si es una canción NUEVA
            if (soundRef.current && currentSong?.id !== song.id) {
                await soundRef.current.unloadAsync();
                soundRef.current = null;
            }

            // Si no hay sonido o es una canción nueva, crea uno
            if (!soundRef.current || currentSong?.id !== song.id) {
                const { sound } = await Audio.Sound.createAsync(song.audio);
                soundRef.current = sound;
                setCurrentSong(song);

                sound.setOnPlaybackStatusUpdate((status) => {
                    if (status.didJustFinish) playNext();
                });
            }

            // Reproduce siempre
            await soundRef.current.playAsync();
            setIsPlaying(true);
        } catch (error) {
            console.error("Error playing song:", error);
        }
    };

    const playNext = async () => {
        const currentIndex = songList.findIndex((s) => s.id === currentSong.id);
        const nextSong = (currentIndex + 1) % songList.length;

        if (nextSong) {
            await play(nextSong);
        } else {
            await play(songList[0]); // Reproduce la primera canción si no hay siguiente
        }
    }

    const pause = async () => {
        if (soundRef.current) {
            await soundRef.current.pauseAsync();
            setIsPlaying(false);
        }
    };

    const resume = async () => {
        if (soundRef.current) {
            await soundRef.current.playAsync();
            setIsPlaying(true);
        }
    };

    return {
        currentSong,
        isPlaying,
        play,
        playNext,
        pause,
        resume,
    };
}