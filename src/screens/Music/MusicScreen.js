import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { songList } from './PlaylistList';

import useAudioPlayer from '../../hooks/useAudioPlayer';
import styles from './styles'

export default function MusicScreen() {

    const { currentSong, isPlaying, play, playNext, pause } = useAudioPlayer();

    const handlePlayPress = async (song) => {
        if (currentSong?.id === song.id) {
            if (isPlaying) {
                await pause();
            } else if (currentSong) {
                await play(song);
            }
        } else {
            await play(song);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.controls}>
                    <TouchableOpacity onPress={() => handlePlayPress(item)}>
                        <Feather
                            name={
                                currentSong?.id === item.id
                                    ? isPlaying
                                        ? 'pause-circle'
                                        : 'play-circle'
                                    : 'play-circle'
                            }
                            size={30}
                            color={currentSong?.id === item.id ? '#ff5e78' : '#999'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Music Playlist</Text>
            <FlatList
                data={songList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}