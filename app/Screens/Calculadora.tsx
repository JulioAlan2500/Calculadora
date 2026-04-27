import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Calculadora() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

<<<<<<< HEAD
    const calcular = (op: "+" | "-" | "*" b| "/") => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
=======
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
      />
>>>>>>> cd0bf641737317187eea13ac0598ce97fa456653

      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>÷</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultado}>Resultado:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#f7e305d0",
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
  },
});