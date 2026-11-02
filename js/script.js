
        const tabs = document.querySelectorAll('.vib1');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // убираем активный класс у всех вкладок
                tabs.forEach(t => t.classList.remove('active'));
                // добавляем активный класс выбранной
                tab.classList.add('active');

                // скрываем весь контент
                contents.forEach(c => c.classList.remove('active'));
                // показываем нужный
                const target = tab.dataset.tab;
                document.querySelector(`.tab-content[data-content="${target}"]`).classList.add('active');
            });
        });
