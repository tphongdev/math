let num1, num2, operator, correctAnswer;

    function generateQuestion() {
      num1 = Math.floor(Math.random() * 10); // từ 0 đến 9
      num2 = Math.floor(Math.random() * 10);
      operator = Math.random() < 0.5 ? '+' : '-';

      // Nếu là phép trừ, đảm bảo num1 >= num2 để tránh kết quả âm
      if (operator === '-' && num1 < num2) {
        [num1, num2] = [num2, num1]; // hoán đổi
      }

      correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;

      document.getElementById("question").textContent = `${num1} ${operator} ${num2} = ?`;
      document.getElementById("answer").value = "";
      document.getElementById("result").textContent = "";
    }

    function checkAnswer() {
      const userAnswer = parseInt(document.getElementById("answer").value);
      if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "✅ Chính xác!";
      } else {
        document.getElementById("result").textContent = `❌ Sai rồi. Kết quả đúng là ${correctAnswer}`;
      }
      setTimeout(generateQuestion, 2000);
    }

    generateQuestion();