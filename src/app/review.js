import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function ReviewScreen() {
  const router = useRouter();
  const { userName, email, phoneNumber, age } = useLocalSearchParams();

  const handleConfirm = () => {
    // ADDED: Conditional Navigation Task (Under 18 check)
    if (parseInt(age) < 18) {
      Alert.alert('Access Denied', 'You must be 18 years or older to proceed.');
      return; // Stops navigation
    }

    router.push({
      pathname: '/success',
      params: { userName },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Details</Text>
      
      <View style={styles.card}>
        <Text style={styles.details}>Username: {userName}</Text>
        <Text style={styles.details}>Email: {email}</Text>
        <Text style={styles.details}>Phone: {phoneNumber || 'Not provided'}</Text>
        {/* ADDED: Display Age */}
        <Text style={styles.details}>Age: {age}</Text> 
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Edit Info" color="red" onPress={() => router.back()} />
        <Button title="Confirm & Submit" onPress={handleConfirm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#f0f0f0', padding: 15, borderRadius: 8, marginBottom: 20 },
  details: { fontSize: 16, marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }
});