export default abstract class Calculos {
    static somar(...values: number[]): number {
        return values.reduce((a, b) => a + b, 0);
    }

    static subtrair(...values: number[]): number {
        return values.reduce((a, b) => a - b);
    }

    static multiplicar(...values: number[]): number {
        return values.reduce((a, b) => a * b, 1);
    }

    static dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Divisão por zero");
        }
        return a / b;
    }
}
