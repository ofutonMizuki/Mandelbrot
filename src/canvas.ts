type Size = {
    width: number,
    height: number
}

class Canvas {
    canvas: HTMLCanvasElement;
    parent: HTMLElement;
    size: Size;
    context: CanvasRenderingContext2D;

    constructor(elementID: string, parentID: string) {
        const _canvas = document.getElementById(elementID);
        const _parent = document.getElementById(parentID);
        if (_canvas != null && _parent != null) {
            this.canvas = _canvas as HTMLCanvasElement;;
            this.parent = _parent;
            let _ctx = this.canvas.getContext("2d");
            if (_ctx != null) {
                this.context = _ctx;
                this.size = { width: 0, height: 0 };
                this.resize();
                return;
            }
        }
        throw new Error("canvas or parent is null");
    }
    getSize() {
        return this.size;
    }
    resize() {
        //サイズを取得
        this.size.width = this.parent.clientWidth;
        this.size.height = this.parent.clientHeight;
        //描画領域のサイズを設定
        this.canvas.setAttribute("width", this.size.width.toString());
        this.canvas.setAttribute("height", this.size.height.toString());
    }
    drawPixel(x: number, y: number, color: number) {
        this.context.fillStyle = `rgb(${color * 255}, ${color * 255}, ${color * 255})`;
        this.context.fillRect(x, y, 1, 1);
    }
}
