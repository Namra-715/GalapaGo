import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
} from 'react-native';
import { Image } from 'react-native';
import ChatbotScreen from '../screens/ChatbotScreen';

export default function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setIsChatOpen(true)}
        activeOpacity={0.8}
      >
        <Image
          source={require('../assets/icons/bulb.png')}
          style={styles.buttonIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Modal
        visible={isChatOpen}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsChatOpen(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsChatOpen(false)}
            activeOpacity={0.7}
          >
            <View style={styles.closeButtonContent}>
              <View style={[styles.closeBar, { transform: [{ rotate: '45deg' }] }]} />
              <View style={[styles.closeBar, { transform: [{ rotate: '-45deg' }] }]} />
            </View>
          </TouchableOpacity>
          <ChatbotScreen />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 90, // Position above tab bar (tab bar is ~70px + 20px padding)
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    zIndex: 1000,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    right: 20,
    zIndex: 1000,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
  },
  closeButtonContent: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  closeBar: {
    position: 'absolute',
    width: 18,
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
});

