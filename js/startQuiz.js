 export const startQuiz = () => {

         const questions = [{
                 title: "Какие виды тестов вам нравятся?",
                 description: "Многие из нас хоть раз попадались на эту удочку — хочешь пройти всего один тест из интернета, и вдруг понимаешь, что пролетело полдня.",
                 options: ["На темперамент", "Кто я из вселенной Марвел", "Увидел это", "Моё тотемное животное", "На IQ", "На словарный запас", "На логическое мышление", "На уровень интеллекта"]
             },
             {
                 title: "Вы любите проходить тесты?",
                 description: "Нам важно узнать насколько часто Вы проходите тесты.",
                 options: ["Нет, я никогда не прохожу тесты", "Да, я прохожу все тесты", "Заставляю себя проходить тесты", "Не люблю проходить тесты, но иногда приходится"]
             },
             {
                 title: "Спасибо за ответы! Заполните форму ниже",
                 description: "Ваше мнение важно для нас. Прикрепите фото с Вашей любимой картинкой и оставьте комментарий насколько понравился Вам тест.",
                 type: "custom"
             }
         ];

         let currentStep = 0;
         const userAnswers = {};

         const historyPanel = document.querySelector('.quiz-card__history');
         const contentArea = document.getElementById('quiz-content-area');
         const btnNext = document.getElementById('continue-button');
         const btnBack = document.getElementById('back-button');

         function render() {
             const q = questions[currentStep];

             btnBack.style.display = currentStep === 0 ? 'none' : 'block';

             if (q.type === 'custom') {
                 contentArea.innerHTML = `
                <div class="quiz-emojis">
                  <span class="quiz-emogis__item quiz-emogis__item--wink">&#128521;</span>
                  <span class="quiz-emogis__item quiz-emogis__item--thumb">&#128077;</span>
                </div>
                <h2 class="quiz-card__question-title">${q.title}</h2>
                <p class="quiz-card__question-text">${q.description}</p>
                <div class="custom-form">
                    <input type="text" class="custom-form__input" placeholder="Ваше мнение сюда" id="opinion-input" value="${userAnswers[currentStep]?.text || ''}">
                    <div class="custom-select">
                        <div class="custom-select__trigger" id="select-trigger">
                            <span id="selected-text">${userAnswers[currentStep]?.rating || 'Очень понравился'}</span>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="black" stroke-width="2"/></svg>
                        </div>
                        <div class="custom-select__options" id="options-dropdown">
                            <div class="custom-select__option">Очень понравился</div>
                            <div class="custom-select__option">Не понравился</div>
                            <div class="custom-select__option">Пройду еще раз</div>
                            <div class="custom-select__option">Посоветую всем</div>
                        </div>
                    </div>
                </div>
            `;
                 initCustomSelect();

                 document.getElementById('opinion-input').oninput = (e) => {
                     if (!userAnswers[currentStep]) userAnswers[currentStep] = {};
                     userAnswers[currentStep].text = e.target.value;
                     userAnswers[currentStep].rating = document.getElementById('selected-text').innerText;
                 };
             } else {
                 contentArea.innerHTML = `
                <h2 class="quiz-card__question-title">${q.title}</h2>
                <p class="quiz-card__question-text">${q.description}</p>
                <div class="radio-group">
                    ${q.options.map((opt, i) => `
                        <input type="radio" class="radio-group__input" id="opt-${i}" name="quiz-opt" value="${opt}" 
                        ${userAnswers[currentStep] === opt ? 'checked' : ''}>
                        <label for="opt-${i}" class="radio-group__label">${opt}</label>
                    `).join('')}
                </div>
            `;

            document.querySelectorAll('input[name="quiz-opt"]').forEach(input => {
                input.onchange = () => {
                    userAnswers[currentStep] = input.value;
                    renderHistory();
                };
            });
        }

        renderHistory();
    }

    function renderHistory() {
        historyPanel.innerHTML = '';
        questions.forEach((q, i) => {
            if (i <= currentStep) {
                const isCurrent = i === currentStep;
                const isCompleted = i < currentStep;
                const item = document.createElement('div');
                
                item.className = `quiz-card__history-item ${isCurrent ? 'quiz-card__history-item--current' : ''} ${isCompleted ? 'quiz-card__history-item--completed' : ''}`;
                
                let answerContent = '';

                if (isCompleted) {
                    const ans = userAnswers[i];
                    const textToShow = typeof ans === 'object' ? (ans.text || ans.rating) : ans;
                    answerContent = `<div class="quiz-card__history-answer">${textToShow || '...'}</div>`;
                } 
            
                else if (isCurrent && q.type !== 'custom') {
                    answerContent = `<div class="quiz-card__history-answer">${userAnswers[i] || ''}</div>`;
                }
                

                item.innerHTML = `
                    <div class="quiz-card__history-title">${q.title}</div>
                    ${answerContent}
                `;
                historyPanel.appendChild(item);
            }
        });
    }

    function initCustomSelect() {
        const trigger = document.getElementById('select-trigger');
        const dropdown = document.getElementById('options-dropdown');
        
        if (!trigger) return;

        trigger.onclick = (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        };

        document.querySelectorAll('.custom-select__option').forEach(opt => {
            opt.onclick = () => {
                const val = opt.innerText;
                document.getElementById('selected-text').innerText = val;
                dropdown.classList.remove('active');
                
                if (!userAnswers[currentStep]) userAnswers[currentStep] = {};
                userAnswers[currentStep].rating = val;
        
            };
        });

        window.onclick = () => dropdown?.classList.remove('active');
    }

    btnNext.onclick = () => {
        const q = questions[currentStep];
        if (q.type === 'custom' || userAnswers[currentStep]) {
            if (currentStep < questions.length - 1) {
                currentStep++;
                render();
            } else {
                console.log("Final Answers:", userAnswers);
                alert("Опрос завершен!");
            }
        } else {
            alert("Пожалуйста, выберите ответ!");
        }
    };

    btnBack.onclick = () => {
        if (currentStep > 0) {
            currentStep--;
            render();
        }
    };

    render();

}