import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  initValue: number;  // 元本入力欄と双方向データバインド
  rate: number;       // 金利入力欄と双方向データバインド

  constructor(public navCtrl: NavController) {
  }

  // 複利計算
  calc(): number {
    if (isNaN(this.initValue) || isNaN(this.rate)) {
      // 元本または利率が数字でないときはnullを返す
      return null;
    }
    let answer: number = this.initValue;
    for (let i = 0; i < 10; i++) {
      // 金利計算を10回繰り返して複利計算
      answer = answer * (1 + this.rate / 100)
    }
    return Math.floor(answer);  // 計算結果を整数に変換
  }

  // 年毎の金額計算
  calcArray(): number[] {
      if (isNaN(this.initValue) || isNaN(this.rate)) {
      // 元本または利率が数字でないときはnullを返す
      return null;
      }
      let answer: number = this.initValue;
      let ret: number[] = [answer];
      for (let i = 0; i < 10; i++) {
        // 金利計算を10回繰り返して複利計算
        answer = answer * (1 + this.rate / 100)
        ret.push(Math.floor(answer)); // 整数に変換
      }
      return ret;
  }

}
