const assert   = require('power-assert');  // power-assertをインポート
const ClosedRange = require('../index');      // プログラム本体である、index.jsを読み込む

describe('整数の閉区間を示すオブジェクト', () => {
    describe('整数閉区間を示すオブジェクトを生成できるクラスとコンストラクタを作る', () => {
        it('引数なしでnewするとプリミティブ型がobjectの何かが返る', () => {
            const cr = new ClosedRange();
            assert(typeof cr === 'object');
        });
    });
});