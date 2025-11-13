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
import { hotels } from '../data/placeholderData';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HotelsScreen() {
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  const handleScroll = (hotelId, event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const imageWidth = SCREEN_WIDTH - 30;
    const currentIndex = Math.round(contentOffsetX / imageWidth);
    setActiveImageIndex(prev => ({ ...prev, [hotelId]: currentIndex }));
  };

  const renderImageGallery = (hotel) => {
    const images = hotel.images || [hotel.image];
    const currentIndex = activeImageIndex[hotel.id] || 0;
    
    return (
      <View style={styles.imageGalleryContainer}>
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
          style={styles.imageGallery}
          onScroll={(e) => handleScroll(hotel.id, e)}
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
        <Text style={styles.headerTitle}>Hotels & Accommodations</Text>
        <Text style={styles.headerSubtitle}>Find your perfect stay</Text>
      </View>
      {hotels.map((hotel) => (
        <View key={hotel.id} style={styles.card}>
          {renderImageGallery(hotel)}
          <TouchableOpacity style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{hotel.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{hotel.rating}</Text>
                <Text style={styles.stars}>{renderStars(hotel.rating)}</Text>
              </View>
            </View>
            <Text style={styles.cardDescription}>{hotel.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{hotel.price}</Text>
              <Text style={styles.location}>📍 {hotel.location}</Text>
            </View>
            <View style={styles.amenitiesContainer}>
              {hotel.amenities.map((amenity, index) => (
                <View key={index} style={styles.amenity}>
                  <Text style={styles.amenityText}>{amenity}</Text>
                </View>
              ))}
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactText}>📞 {hotel.phone}</Text>
              <Text style={styles.contactText}>✉️ {hotel.email}</Text>
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
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    flex: 1,
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  stars: {
    fontSize: 12,
  },
  cardDescription: {
    fontSize: 14,
    color: '#616161',
    lineHeight: 20,
    marginBottom: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  location: {
    fontSize: 14,
    color: '#757575',
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  amenity: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  amenityText: {
    fontSize: 12,
    color: '#2E7D32',
    fontWeight: '500',
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

