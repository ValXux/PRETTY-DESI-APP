import { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { songList } from "../screens/Music/PlaylistList";

export default function useAudioPlayer() {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef(null);
    const isChangingRef = useRef(false); // 🔒 para evitar conflictos

    useEffect(() => {
        play(songList[0]);

        return () => {
            if (soundRef.current) {
                soundRef.current.unloadAsync();
            }
        };
    }, []);

    const play = async (song) => {
        try {
            isChangingRef.current = true;

            // Detener y descargar canción anterior
            if (soundRef.current) {
                await soundRef.current.unloadAsync();
                soundRef.current = null;
            }

            const { sound } = await Audio.Sound.createAsync(song.audio);
            soundRef.current = sound;
            setCurrentSong(song);
            setIsPlaying(true);

            sound.setOnPlaybackStatusUpdate((status) => {
                if (status.didJustFinish && !status.isLooping && !isChangingRef.current) {
                    playNext();
                }
            });

            await sound.playAsync();
        } catch (error) {
            console.error("Error playing song:", error);
        } finally {
            isChangingRef.current = false;
        }
    };

    const playNext = async () => {
        if (!currentSong) return;

        const currentIndex = songList.findIndex((s) => s.id === currentSong.id);
        const nextIndex = (currentIndex + 1) % songList.length;
        const nextSong = songList[nextIndex];

        await play(nextSong); // 🚀 se asegura de limpiar antes
    };

    const pause = async () => {
        if (soundRef.current) {
            await soundRef.current.pauseAsync();
            setIsPlaying(false);
        }
    };

    const resume = async () => {
        if (soundRef.current) {
            const status = await soundRef.current.getStatusAsync();
            if (status.isLoaded && !status.isPlaying) {
                await soundRef.current.playAsync();
                setIsPlaying(true);
            }
        }
    };

    return {
        currentSong,
        isPlaying,
        play,
        pause,
        resume,
        playNext,
    };
}
