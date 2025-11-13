import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { cultureHistory } from '../data/placeholderData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function CultureHistoryScreen() {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const handleScroll = (itemId, event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / SCREEN_WIDTH);
    setActiveImageIndex({ ...activeImageIndex, [itemId]: index });
  };

  const renderImageGallery = (item) => {
    const images = item.images || [item.image];
    const currentIndex = activeImageIndex[item.id] || 0;

    return (
      <View style={styles.imageGalleryContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => handleScroll(item.id, e)}
          scrollEventThrottle={16}
          style={styles.imageGallery}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={styles.cardImage}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        {images.length > 1 && (
          <View style={styles.imageIndicators}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentIndex === index && styles.activeIndicator,
                ]}
              />
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Culture & History</Text>
        <Text style={styles.headerSubtitle}>Discover the rich heritage of Galapagos</Text>
      </View>
      {cultureHistory.map((item) => (
        <View key={item.id} style={styles.card}>
          {renderImageGallery(item)}
          <TouchableOpacity style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E7D32',
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageGalleryContainer: {
    position: 'relative',
  },
  imageGallery: {
    width: SCREEN_WIDTH - 30,
    height: 200,
  },
  cardImage: {
    width: SCREEN_WIDTH - 30,
    height: 200,
  },
  imageIndicators: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  cardContent: {
    padding: 15,
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#757575',
    lineHeight: 20,
  },
});
