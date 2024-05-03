/*
 * @Author: encoreshao
 * @Date: 2024-04-08
 * @Description: China Salary Tax
 */

import { ILevels } from "./index.d";

export function countLevel(salary: number, levels: ILevels) {
  for (let i = 0; i < levels.length; i++) {
    const { value, rate, deduction } = levels[i];
    if (value === 0 || value > salary) {
      return { rate, deduction };
    }
  }
  return { rate: 0, deduction: 0 };
}

export function sumArray(array: number[]) {
  return array.reduce((a, b) => a + b, 0);
}

export function avgArray(array: number[]) {
  return sumArray(array) / array.length;
}
