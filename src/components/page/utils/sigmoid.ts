const sigmoid = (x: number): number => {
  const k = 10; // x軸の範囲（0〜10）に対応するスケーリングファクター
  const rawSigmoid = 1 / (1 + Math.exp(-0.5 * (x - k / 2)));

  // 値を 0.1 ~ 1 にスケーリングする
  return 0.1 + 0.9 * rawSigmoid;
};

export const generateSigmoidData = (steps: number): { x: number; y: number }[] => {
  const start = 0;
  const end = 10;
  const stepSize = (end - start) / (steps - 1);
  return Array.from({ length: steps }, (_, i) => {
    const x = start + i * stepSize;
    const y = sigmoid(x);
    return { x, y };
  });
};
