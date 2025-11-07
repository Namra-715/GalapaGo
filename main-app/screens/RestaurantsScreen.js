import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { restaurants } from '../data/placeholderData';

export default function RestaurantsScreen() {
  const renderPriceRange = (range) => {
    return range.split('').map((char, index) => (
      <Text key={index} style={styles.priceChar}>{char}</Text>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Restaurants & Dining</Text>
        <Text style={styles.headerSubtitle}>Taste the flavors of Galapagos</Text>
      </View>
      {restaurants.map((restaurant) => (
        <TouchableOpacity key={restaurant.id} style={styles.card}>
          <Image source={restaurant.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
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
          </View>
        </TouchableOpacity>
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
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
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

