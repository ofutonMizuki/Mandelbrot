const complexNumberCalc = new ComplexNumberCalc();

function includeMandelbrotSet(c: ComplexNumber, n: number): boolean {
    let z: ComplexNumber = { real: 0, imaginary: 0 };
    for (let i = 0; i < n; i++) {
        //z <- z^2 + c
        z = complexNumberCalc.add(complexNumberCalc.mul(z, z), c);

        if (z.real * z.real + z.imaginary + z.imaginary > 4) {
            return false;
        }
    }

    return true;
}

function main() {
    const canvas = new Canvas("field", "board");
    let size = canvas.getSize();
    //サンプルサイズ
    const sample = 16;

    //スケールの設定
    const scale = 4;

    const n = 32;

    //基本スケールを計算
    const s = size.width < size.height ? size.width : size.height;

    let offset = { x: 0, y: 0 }
    offset = { x: offset.x * (size.width / 2) / scale, y: offset.y * (size.height / 2) / scale };

    for (let i = 0; i < size.width; i++) {
        for (let j = 0; j < size.height; j++) {
            //縦横半画面分移動
            let x = i - (size.width / 2) - offset.x, y = j - (size.height / 2) - offset.y;

            //サンプルを計算
            let count = 0;
            for (let k1 = 0; k1 < sample; k1++) {
                for (let k2 = 0; k2 < sample; k2++) {
                    let c = {
                        real: (x * sample + k1) * (scale / sample / s),
                        imaginary: (y * sample + k2) * (scale / sample / s)
                    };
                    count += includeMandelbrotSet(c, n) ? 1 : 0;
                }
            }
            //原点を中心にする
            x += (size.width / 2) + offset.x;
            y += (size.height / 2) + offset.y;

            //
            canvas.drawPixel(x, y, 1 - (count / (sample * sample)));
        }
    }
}

main()