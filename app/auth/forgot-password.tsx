import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Mail, ArrowLeft, Send } from "lucide-react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      Alert.alert("Input Error", "Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, cleanEmail);

      Alert.alert(
        "Reset Email Sent 📩",
        "A password reset link has been sent to your email address. Please check your inbox and spam folder.",
        [
          {
            text: "Back to Sign In",
            onPress: () => router.replace("/auth/signin"),
          },
        ]
      );
    } catch (error: any) {
      console.log("PASSWORD RESET ERROR:", error);

      let message = "Could not send the password reset email. Please try again.";

      if (error.code === "auth/invalid-email") {
        message = "Please enter a valid email address.";
      } else if (error.code === "auth/too-many-requests") {
        message = "Too many requests. Please wait a little and try again.";
      } else if (error.code === "auth/network-request-failed") {
        message = "Network error. Please check your internet connection.";
      }

      Alert.alert("Reset Failed", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <LinearGradient
          colors={["#103D2B", "#1A5F3F", "#2E8B57"]}
          style={styles.header}
        >
          <TouchableOpacity
            style={styles.backButtonTop}
            onPress={() => router.back()}
            disabled={loading}
          >
            <ArrowLeft size={22} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.logoCircle}>
            <Image
              source={require("../../assets/image/icon.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.appName}>Serendib</Text>
          <Text style={styles.tagline}>ACCOUNT RECOVERY</Text>
        </LinearGradient>

        <View style={styles.formContainer}>
          <View style={styles.mailCircle}>
            <Mail size={30} color="#1A5F3F" />
          </View>

          <Text style={styles.title}>Forgot Password?</Text>

          <Text style={styles.subtitle}>
            Enter the email address linked to your Serendib account. We will send you a secure password reset link.
          </Text>

          <View style={styles.inputWrapper}>
            <Mail size={20} color="#66756E" style={styles.inputIcon} />
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#9AA39F"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
              editable={!loading}
              returnKeyType="send"
              onSubmitEditing={handleResetPassword}
            />
          </View>

          <TouchableOpacity
            style={[styles.resetButton, loading && styles.buttonDisabled]}
            onPress={handleResetPassword}
            disabled={loading}
            activeOpacity={0.85}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <Text style={styles.resetButtonText}>Send Reset Link</Text>
                <Send size={19} color="#FFFFFF" />
              </>
            )}
          </TouchableOpacity>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Didn't receive the email? Check your spam folder and make sure you entered the same email used to create your account.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.backToSignIn}
            onPress={() => router.replace("/auth/signin")}
            disabled={loading}
          >
            <ArrowLeft size={18} color="#1A5F3F" />
            <Text style={styles.backText}>Back to Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    paddingTop: 58,
    paddingBottom: 72,
    alignItems: "center",
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
  },
  backButtonTop: {
    position: "absolute",
    top: 58,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.14)",
    justifyContent: "center",
    alignItems: "center",
  },
  logoCircle: {
    width: 82,
    height: 82,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.16)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  logo: {
    width: 62,
    height: 62,
  },
  appName: {
    color: "#FFFFFF",
    fontSize: 31,
    fontWeight: "900",
    marginTop: 12,
  },
  tagline: {
    color: "rgba(255,255,255,0.76)",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2.2,
    marginTop: 3,
  },
  formContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -38,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    paddingTop: 34,
    paddingBottom: 35,
    alignItems: "center",
  },
  mailCircle: {
    width: 66,
    height: 66,
    borderRadius: 22,
    backgroundColor: "#EAF4EE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#24322C",
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
  },
  subtitle: {
    color: "#7A8781",
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 27,
  },
  inputWrapper: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F7F5",
    borderRadius: 16,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E3EAE6",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#24322C",
    fontSize: 15,
  },
  resetButton: {
    width: "100%",
    height: 56,
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: "#1A5F3F",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
    marginRight: 9,
  },
  infoBox: {
    width: "100%",
    marginTop: 22,
    padding: 15,
    borderRadius: 16,
    backgroundColor: "#F3F8F5",
    borderWidth: 1,
    borderColor: "#E0EEE5",
  },
  infoText: {
    color: "#6F7D76",
    fontSize: 11,
    lineHeight: 17,
    textAlign: "center",
  },
  backToSignIn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 27,
    paddingVertical: 8,
  },
  backText: {
    color: "#1A5F3F",
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 6,
  },
});
