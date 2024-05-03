type levels = [
  { value: 36000; rate: 0.03; deduction: 0 },
  { value: 144000; rate: 0.1; deduction: 2520 },
  { value: 300000; rate: 0.2; deduction: 16920 },
  { value: 420000; rate: 0.25; deduction: 31920 },
  { value: 660000; rate: 0.3; deduction: 52920 },
  { value: 960000; rate: 0.35; deduction: 85920 },
  { value: 0; rate: 0.45; deduction: 181920 }
];

// 传入的配置参数
interface Config {
  salary?: number; // 基础工资
  specialAdditionalDeduction?: number; // 每月专项附加扣除 租房扣除
  yearEndAwardsNumber?: number; // 年终奖月数
  yearEndAwards?: number; // 年终奖 0表示默认使用 年终奖月数
  insuranceAndFundBase?: number; // 五险一金计算基础，为上一年度平均薪资，默认为salary
  startingSalary?: number; // 个税起征点
  insuranceAndFundRate?: IInsuranceAndFund; // 五险一金个人部分
  insuranceAndFundRateOfCompany?: IInsuranceAndFund; // 五险一金公司部分
  extraBonus?: number | number[]; // 每月额外奖金
  housingFundRange?: IHousingFundRange; // 公积金计算上下限
}
interface IInsuranceAndFund {
  pension?: number; // 养老保险
  medicalInsurance?: number; // 医疗保险
  unemploymentInsurance?: number; // 失业保险
  injuryInsurance?: number; // 工伤保险
  maternityInsurance?: number; // 生育保险
  housingFund?: number; // 住房公积金
  supplementaryFund?: number; // 补充住房公积金
}
interface IHousingFundRange {
  min: number;
  max: number;
}
