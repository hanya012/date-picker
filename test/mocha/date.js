/**
 * Created by realm on 2017/2/15.
 */
const should = require('should');
const EasyDate = require('../../src/EasyDate').default;

describe('Date', () => {
  let date = new EasyDate('+1m');

  describe('#new', () => {
    it('should create instance', () => {
      let some = date.toDate();
      let today = new Date();
      should(some.getFullYear()).equal(today.getFullYear());
      should(some.getMonth()).equal(today.getMonth() + 1);
    });
  });

  describe('#clone', () => {
    it('should clone date', () => {
      let some = date.clone();
      should(some.getTime()).equal(date.toDate().getTime());
    });
  });

  describe('#fill', () => {
    it('should create a array', () => {
      let length = Math.random() * 100 >> 0;
      let arr = EasyDate.fill(length);
      should(arr).be.an.Array();
      should(arr.length).equal(length);
    });
  });

  describe('#getDays', () => {
    it('should get days', () => {
      let today = new Date();
      let days = date.getDays(today);
      should(days).be.an.Array();
    });
  });

  describe('#getFirstDayOfThisMonth', () => {
    it('should return the first day of this month', () => {
      let date = new EasyDate();
      let today = new Date();
      today.setDate(1);
      should(date.getFirstDayOfThisMonth()).equal(today.getDay());
    });
  });

  describe('#getMonth', () => {
    it('输出月份，个位数前面自动补0', () => {
      should(EasyDate.toMonth(10)).equal('10');
      should(EasyDate.toMonth(8)).equal('08');
    });
  });

  describe('#isLeapYear', () => {
    it('是否为闰年', () => {
      should(EasyDate.isLeapYear(2000)).be.True();
      should(EasyDate.isLeapYear(2004)).be.True();
      should(EasyDate.isLeapYear(2100)).be.False();
      should(EasyDate.isLeapYear(2005)).be.False();
    });
  });
});