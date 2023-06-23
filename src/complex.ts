type ComplexNumber = {
    real: number;
    imaginary: number;
}

class ComplexNumberCalc {
    add(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
        let c: ComplexNumber = {
            real: a.real + b.real,
            imaginary: a.imaginary + b.imaginary
        }

        return c;
    }

    sub(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
        let c: ComplexNumber = {
            real: a.real - b.real,
            imaginary: a.imaginary - b.imaginary
        }

        return c;
    }

    mul(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
        let c: ComplexNumber = {
            real: (a.real * b.real) - (a.imaginary * b.imaginary),
            imaginary: (a.real * b.imaginary) + (a.real * b.imaginary)
        }

        return c;
    }
}