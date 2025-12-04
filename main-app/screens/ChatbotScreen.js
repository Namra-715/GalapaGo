import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '../config/api';

// System prompt that emphasizes local businesses and sustainability
const SYSTEM_PROMPT = `You are a helpful travel assistant EXCLUSIVELY for the Galapagos Islands, Ecuador. 

CRITICAL RULES - YOU MUST FOLLOW THESE:
1. ONLY answer questions about the Galapagos Islands, Ecuador, OR questions about GETTING TO the Galapagos (flights, travel routes, costs, etc.)
2. Valid questions include:
   - Questions about Galapagos Islands (hotels, restaurants, activities, etc.)
   - Questions about getting TO the Galapagos (flights from any city, travel costs, routes, etc.)
   - Questions about travel planning to visit Galapagos
3. If asked about ANY other location or topic NOT related to Galapagos travel, politely redirect:
   "I'm a Galapagos Islands travel assistant. I can help with questions about the Galapagos Islands or getting there - hotels, restaurants, activities, flights, travel costs, sustainability, and transportation. Is there something specific about the Galapagos you'd like to know?"
4. Stay focused on Galapagos Islands tourism and conservation

IMPORTANT - ANSWER QUESTIONS PROMPTLY:
- If asked about flight costs, travel prices, or similar questions, provide approximate/estimated answers based on general knowledge
- Don't say "I don't know" or delay - give helpful estimates even if approximate
- For flight costs, mention typical price ranges (e.g., "Flights from San Francisco to Galapagos typically range from $600-$1200 depending on season...")
- Be helpful and provide actionable information

RESPONSE STYLE - VERY IMPORTANT:
- Answer naturally and conversationally, like you're chatting with a friend
- Keep responses concise and to the point - avoid long paragraphs
- Do NOT use markdown formatting (no **bold**, no bullet points with *, no code blocks)
- Use plain text only - just write naturally
- Be friendly and helpful, but brief
- Use emojis sparingly, only when they add value
- Write in a casual, conversational tone

Your primary goals for Galapagos-related questions:
1. Emphasize SUSTAINABILITY and conservation
2. Provide accurate, helpful information about the Galapagos
3. Recommend authentic experiences and responsible tourism

Key points to emphasize:
- Sustainability is crucial - the ecosystem is extremely fragile
- Following park rules and respecting wildlife is essential
- Authentic experiences and responsible tourism

Available businesses in Galapagos:
- Hotels: Galapagos Safari Camp, Bay View House, Blue Heron House, Apartamentos Santa Fé
- Restaurants: 1835 Coffee Lab, El Muelle de Darwin, LO & LO RESTAURANTE, Restaurante Aquelarre
- Activities: Snorkeling, Giant Tortoise Reserve, Sierra Negra Volcano, Kayaking, Bird Watching
- Islands: Santa Cruz, San Cristobal, Isabela, Floreana, and other Galapagos islands

Remember: ONLY answer Galapagos-related questions. Redirect all other topics politely but firmly. Write naturally and conversationally - no markdown formatting.`;

export default function ChatbotScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Galapagos travel assistant powered by AI. I can help you find hotels, restaurants, activities, and provide recommendations. I'm here to help you plan an amazing and responsible visit. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef(null);
  const genAI = GEMINI_API_KEY && GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE' 
    ? new GoogleGenerativeAI(GEMINI_API_KEY) 
    : null;

  const getBotResponse = async (userMessage) => {
    // Check if API key is configured
    if (!genAI) {
      return "⚠️ API key not configured. Please add your Gemini API key in main-app/config/api.js\n\nFor now, I can tell you:\n\n📍 Location-based recommendations\n🏨 Hotels and accommodations\n🍽️ Restaurants\n🎯 Activities and tours\n🌱 Sustainability tips\n📋 Social customs and rules\n\nWhat would you like to know?";
    }

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      
      // Build conversation history
      const conversationHistory = messages
        .filter(msg => msg.id !== 1) // Exclude initial greeting
        .map(msg => ({
          role: msg.isBot ? 'model' : 'user',
          parts: [{ text: msg.text }],
        }));

      // Add system prompt and user message
      const prompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${conversationHistory.map(m => `${m.role}: ${m.parts[0].text}`).join('\n')}\n\nUser: ${userMessage}\nAssistant:`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      return `Sorry, I encountered an error: ${error.message}. Please try again or check your API key configuration.`;
    }
  };

  const handleSend = async () => {
    if (inputText.trim() === '' || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);

    // Add loading message
    const loadingMessage = {
      id: messages.length + 2,
      text: '...',
      isBot: true,
      timestamp: new Date(),
      isLoading: true,
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const botResponseText = await getBotResponse(currentInput);
      
      // Remove loading message and add actual response
      setMessages((prev) => {
        const withoutLoading = prev.filter(msg => !msg.isLoading);
        return [...withoutLoading, {
          id: messages.length + 2,
          text: botResponseText,
          isBot: true,
          timestamp: new Date(),
        }];
      });
    } catch (error) {
      console.error('Error getting bot response:', error);
      setMessages((prev) => {
        const withoutLoading = prev.filter(msg => !msg.isLoading);
        return [...withoutLoading, {
          id: messages.length + 2,
          text: 'Sorry, I encountered an error. Please try again.',
          isBot: true,
          timestamp: new Date(),
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const renderMessage = (message) => {
    if (message.isLoading) {
      return (
        <View
          key={message.id}
          style={[styles.messageContainer, styles.botMessage]}
        >
          <View style={[styles.messageBubble, styles.botBubble]}>
            <ActivityIndicator size="small" color="#2E7D32" />
          </View>
        </View>
      );
    }

    return (
      <View
        key={message.id}
        style={[
          styles.messageContainer,
          message.isBot ? styles.botMessage : styles.userMessage,
        ]}
      >
        <View
          style={[
            styles.messageBubble,
            message.isBot ? styles.botBubble : styles.userBubble,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              message.isBot ? styles.botText : styles.userText,
            ]}
          >
            {message.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI Travel Assistant</Text>
        <Text style={styles.headerSubtitle}>Get personalized recommendations</Text>
      </View>
      
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map(renderMessage)}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Ask about hotels, restaurants, activities..."
          placeholderTextColor="#999"
          multiline
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity 
          style={[styles.sendButton, isLoading && styles.sendButtonDisabled]} 
          onPress={handleSend}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.sendButtonText}>Send</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
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
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 15,
  },
  messageContainer: {
    marginBottom: 15,
    flexDirection: 'row',
  },
  botMessage: {
    justifyContent: 'flex-start',
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 18,
  },
  botBubble: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: '#2E7D32',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  botText: {
    color: '#212121',
  },
  userText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
    fontSize: 15,
  },
  sendButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.6,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

