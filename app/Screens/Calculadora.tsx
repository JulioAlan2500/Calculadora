import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Calculadora() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState("");

    const calcular = (op: "+" | "-" | "*" | "/") => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResultado("Error");
            return;
        }

        let res: number | string = 0;

        if (op === "+") res = n1 + n2;
        if (op === "-") res = n1 - n2;
        if (op === "*") res = n1 * n2;
        if (op === "/") res = n2 !== 0 ? n1 / n2 : "No dividir entre 0";

        setResultado(res.toString());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora</Text>

            <TextInput
                style={styles.input}
                placeholder="Número 1"
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
            />

            <TextInput
                style={styles.input}
                placeholder="Número 2"
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
            />

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={() => calcular("+")}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => calcular("-")}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => calcular("*")}>
                    <Text style={styles.btnText}>×</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => calcular("/")}>
                    <Text style={styles.btnText}>÷</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.resultado}>Resultado: {resultado}</Text>
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
        backgroundColor: "#007AFF",
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