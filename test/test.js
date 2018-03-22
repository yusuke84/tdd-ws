const assert   = require('power-assert');  // power-assertをインポート
const myModule = require('../index');      // プログラム本体である、index.jsを読み込む

describe('開発環境が動く', () => {
    it('テストが失敗する', () => {
        assert(true === false);
    });
});