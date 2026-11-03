import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegistrationScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState(''); // ADDED: State for Year of Birth

  const handleReview = () => {
    // Validation: Check if all fields are filled
    if (!userName || !email || !phoneNumber || !password || !confirmPassword || !yearOfBirth) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Validation: Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    // ADDED: Calculate Age based on current year
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(yearOfBirth);

    if (isNaN(age) || age < 0) {
      Alert.alert('Error', 'Please enter a valid year of birth.');
      return;
    }

    // Navigate to Review screen and pass parameters
    router.push({
      pathname: '/review',
      params: { userName, email, phoneNumber, age: age.toString() }, // Pass calculated age
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {/* ADDED: Year of Birth Input */}
      <TextInput
        style={styles.input}
        placeholder="Year of Birth (e.g., 2000)"
        keyboardType="numeric"
        value={yearOfBirth}
        onChangeText={setYearOfBirth}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button title="Review Details" onPress={handleReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 8 },
});