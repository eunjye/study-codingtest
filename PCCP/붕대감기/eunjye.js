function solution(bandage, health, attacks) {
  var 시전시간 = bandage[0];
  var 회복량 = bandage[1];
  var 추가회복량 = bandage[2];
  var 최대체력 = health;

  var 최대공격시간 = attacks[attacks.length-1][0];

  var 현재체력 = 최대체력;
  var 현재시간 = 0;

  var 현재공격 = attacks.shift();
  var 연속회복시간 = 0;

  while (현재시간 < 최대공격시간) {
    현재시간++;
    
    if (현재시간 === 현재공격[0]) {
      연속회복시간 = 0;
      현재체력 -= 현재공격[1];
      if (현재체력 <= 0) {
        return -1;
      }
      if (attacks.length <= 0) { return 현재체력 } else {현재공격 = attacks.shift();}
      continue;
    } 

    연속회복시간++;
    현재체력 += 회복량;
    if (연속회복시간 >= 시전시간){
      현재체력 += 추가회복량;
      연속회복시간 = 0;
    }
    if (현재체력 >= 최대체력) { 현재체력 = 최대체력; }
  }  
  return 현재체력;
}