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
        it('3~8の閉区間を作り、下端点として3が返る', () => {
            const cr = new ClosedRange(3, 8);
            assert(cr.getLowerEndPoint() === 3);
        });
        it('3~8の閉区間を作り、上端点として8が返る', () => {
            const cr = new ClosedRange(3, 8);
            assert(cr.getUpperEndPoint() === 8);
        });
    });
    describe('上端点より下端点が大きい閉区間を作ろうとするとエラーを返す', () => {
        it('上端点に3、下端点に8の閉区間を作ろうとするとエラーが返る', () => {
            assert.throws(() => {
                const cr = new ClosedRange(8, 3);
            });
        });
    });
    describe('整数の閉区間は指定した整数を含むかどうかを判定するメソッドを持つ', () => {
        it('3~8の閉区間に、5が含まれる', () => {
            const cr = new ClosedRange(3, 8);
            assert(cr.includes(5) === true);
        });
        it('3~8の閉区間に、3が含まれる', () => {
            const cr = new ClosedRange(3, 8);
            assert(cr.includes(3) === true);
        });
        it('3~8の閉区間に、8が含まれる', () => {
            const cr = new ClosedRange(3, 8);
            assert(cr.includes(8) === true);
        });
        it('3~8の閉区間に、10が含まれない', () => {
            const cr = new ClosedRange(3, 8);
            assert(cr.includes(10) === false);
        });
    });
    describe('文字列として下端点と上端点を出力できるメソッドを持つ(例:"[3,8]"）', () => {
        it('3〜8の閉区間の場合、[3,8]が出力される', () => {
            const cr = new ClosedRange(3, 8);
            assert(cr.toString() === '[3,8]');
        });
    });
    describe('別の閉区間と等価かどうか判定するメソッドを持つ', () => {
        it('3〜8の閉区間と3〜8の閉区間が等価である', () => {
            const cr = new ClosedRange(3,8);
            const crComapared = new ClosedRange(3,8);
        });
    });
});