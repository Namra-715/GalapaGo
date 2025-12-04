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
import { restaurants } from '../data/placeholderData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function RestaurantsScreen() {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const renderPriceRange = (range) => {
    return range.split('').map((char, index) => (
      <Text key={index} style={styles.priceChar}>{char}</Text>
    ));
  };

  const handleScroll = (restaurantId, event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const imageWidth = SCREEN_WIDTH - 30;
    const currentIndex = Math.round(contentOffsetX / imageWidth);
    setActiveImageIndex(prev => ({ ...prev, [restaurantId]: currentIndex }));
  };

  const renderImageGallery = (restaurant) => {
    const images = restaurant.images || [restaurant.image];
    const currentIndex = activeImageIndex[restaurant.id] || 0;
    
    return (
      <View style={styles.imageGalleryContainer}>
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
          style={styles.imageGallery}
          onScroll={(e) => handleScroll(restaurant.id, e)}
          scrollEventThrottle={16}
        >
          {images.map((img, index) => (
            <Image 
              key={index}
              source={img} 
              style={styles.cardImage}
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
                  index === currentIndex && styles.activeIndicator,
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
        <Text style={styles.headerTitle}>I bet you're hungry 🍲</Text>
        <Text style={styles.headerSubtitle}>Taste authentic Galapagos cuisine</Text>
      </View>
      {restaurants.map((restaurant) => (
        <View key={restaurant.id} style={styles.card}>
          {renderImageGallery(restaurant)}
          <TouchableOpacity style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{restaurant.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{restaurant.rating}</Text>
                <Text style={styles.star}>⭐</Text>
              </View>
            </View>
            <Text style={styles.cuisine}>{restaurant.cuisine}</Text>
            <Text style={styles.cardDescription}>{restaurant.description}</Text>
            <View style={styles.infoRow}>
              <View style={styles.priceRange}>
                {renderPriceRange(restaurant.priceRange)}
              </View>
              <Text style={styles.location}>📍 {restaurant.location}</Text>
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactText}>📞 {restaurant.phone}</Text>
              <Text style={styles.contactText}>✉️ {restaurant.email}</Text>
            </View>
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
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#757575',
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageGalleryContainer: {
    position: 'relative',
  },
  imageGallery: {
    height: 200,
  },
  cardImage: {
    width: SCREEN_WIDTH - 30, // Account for card margin (15 on each side)
    height: 200,
    resizeMode: 'cover',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginRight: 5,
  },
  star: {
    fontSize: 16,
  },
  cuisine: {
    fontSize: 14,
    color: '#757575',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#616161',
    lineHeight: 20,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  priceRange: {
    flexDirection: 'row',
  },
  priceChar: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#757575',
  },
  contactInfo: {
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  contactText: {
    fontSize: 13,
    color: '#616161',
    marginBottom: 5,
  },
});

