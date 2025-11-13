import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function TransportationScreen() {
  const transportationOptions = [
    {
      id: 1,
      type: 'Inter-Island Ferries',
      description: 'Regular ferry services connect the main islands. Book with local operators to support the community.',
      routes: ['Santa Cruz ↔ San Cristobal', 'Santa Cruz ↔ Isabela'],
      tips: 'Book in advance during peak season. Ferries are operated by local companies.',
      icon: '⛴️',
    },
    {
      id: 2,
      type: 'Local Taxis',
      description: 'Taxis are available on all inhabited islands. Support local drivers by using their services.',
      routes: ['Airport transfers', 'Town transportation'],
      tips: 'Fares are usually fixed. Agree on price before starting your journey.',
      icon: '🚕',
    },
    {
      id: 3,
      type: 'Bicycle Rentals',
      description: 'Eco-friendly way to explore the islands. Many local shops offer bike rentals.',
      routes: ['Puerto Ayora area', 'Island exploration'],
      tips: 'Perfect for short distances. Remember to stay hydrated and use sunscreen.',
      icon: '🚲',
    },
    {
      id: 4,
      type: 'Walking',
      description: 'The best way to experience the islands! Most attractions are within walking distance in towns.',
      routes: ['Town centers', 'Nearby attractions'],
      tips: 'Wear comfortable shoes and bring water. Many local businesses are walkable.',
      icon: '🚶',
    },
    {
      id: 5,
      type: 'Local Tour Operators',
      description: 'Book day tours with local operators for island hopping and activities.',
      routes: ['Day trips to nearby islands', 'Activity tours'],
      tips: 'Support local guides and operators. They provide authentic experiences and support the local economy.',
      icon: '🎯',
    },
  ];

  const tips = [
    'Book inter-island ferries in advance, especially during peak season',
    'Support local transportation providers rather than cruise ship transfers',
    'Walking and biking are great eco-friendly options for short distances',
    'Local taxis are reliable and support local drivers',
    'Many attractions are within walking distance in town centers',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transportation & Tours</Text>
        <Text style={styles.headerSubtitle}>Get around the islands</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚗 Getting Around the Islands</Text>
        <Text style={styles.sectionDescription}>
          The Galapagos Islands are connected by local transportation services. By choosing local 
          operators, you support the community and get authentic experiences. Most money from 
          cruise lines stays with large corporations - choosing local transportation helps keep 
          tourism dollars in the local economy.
        </Text>
      </View>

      {transportationOptions.map((option) => (
        <View key={option.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>{option.icon}</Text>
            <Text style={styles.cardTitle}>{option.type}</Text>
          </View>
          <Text style={styles.cardDescription}>{option.description}</Text>
          
          <View style={styles.routesContainer}>
            <Text style={styles.routesTitle}>Available Routes:</Text>
            {option.routes.map((route, index) => (
              <Text key={index} style={styles.routeItem}>• {route}</Text>
            ))}
          </View>
          
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsText}>💡 {option.tips}</Text>
          </View>
        </View>
      ))}

      <View style={styles.tipsSection}>
        <Text style={styles.tipsSectionTitle}>📋 Tips for Local Transportation</Text>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Support Local Economy</Text>
        <Text style={styles.footerText}>
          When you choose local transportation and tour operators, you're directly supporting 
          families and businesses in the Galapagos. This helps ensure that tourism benefits 
          the local community, not just large cruise companies.
        </Text>
      </View>
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
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 15,
    color: '#616161',
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    fontSize: 30,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    flex: 1,
  },
  cardDescription: {
    fontSize: 15,
    color: '#616161',
    lineHeight: 22,
    marginBottom: 15,
  },
  routesContainer: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  routesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 5,
  },
  routeItem: {
    fontSize: 14,
    color: '#616161',
    marginLeft: 5,
    lineHeight: 20,
  },
  tipsContainer: {
    backgroundColor: '#e8f5e9',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#2E7D32',
  },
  tipsText: {
    fontSize: 14,
    color: '#2E7D32',
    lineHeight: 20,
  },
  tipsSection: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
  },
  tipsSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 15,
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tipBullet: {
    fontSize: 16,
    color: '#2E7D32',
    marginRight: 10,
    fontWeight: 'bold',
  },
  tipText: {
    fontSize: 15,
    color: '#616161',
    flex: 1,
    lineHeight: 22,
  },
  footer: {
    backgroundColor: '#2E7D32',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 22,
  },
});

