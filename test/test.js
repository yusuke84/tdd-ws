const assert = require('power-assert');
const ClosedRange = require('../index');

describe('整数の閉区間を示すオブジェクト', () => {
    describe('整数閉区間を示すオブジェクトを生成できるクラスとコンストラクタを作る', () => {
        it('引数なしでnewするとプリミティブ型がobjectの何かが返る', () => {
            const cr = new ClosedRange();
            assert(typeof cr === 'object');
        });
    });
    describe('インスタンス変数として整数閉区間の下端点と上端点を持ち、getterで取得できる', () => {
        it('3~8の閉区間を作り、下端点と上端点としてそれぞれ3,8が返る', () => {
            const cr = new ClosedRange(3, 8);
            assert(cr.lowerEndPoint() === 3);
            assert(cr.upperEndPoint() === 8);
        });
    });
});