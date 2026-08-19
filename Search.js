document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        if (query === '') {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }

        const results = [];
        
        if (typeof courses !== 'undefined') {
            courses.forEach(sectionObj => {
                // 1. البحث في عنوان القسم الرئيسي نفسه (مثل: محاضرات فخوري)
                const sectionTitleMatch = sectionObj.title && sectionObj.title.toLowerCase().includes(query);
                
                if (sectionTitleMatch) {
                    results.push({
                        type: 'section',
                        title: sectionObj.title,
                        id: sectionObj.id,
                        description: `قسم رئيسي يضم ${sectionObj.lectures ? sectionObj.lectures.length : 0} محاضرات`
                    });
                }

                // 2. البحث داخل محاضرات القسم
                if (sectionObj.lectures && Array.isArray(sectionObj.lectures)) {
                    sectionObj.lectures.forEach(lecture => {
                        const titleMatch = lecture.title && lecture.title.toLowerCase().includes(query);
                        const contentMatch = lecture.content && lecture.content.toLowerCase().includes(query);
                        
                        if (titleMatch || contentMatch) {
                            results.push({
                                type: 'lecture',
                                title: lecture.title,
                                id: lecture.id,
                                sectionId: sectionObj.id,
                                content: lecture.content
                            });
                        }
                    });
                }
            });
        }

        displayResults(results);
    });

    function displayResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-result">لا توجد نتائج مطابقة</div>';
            searchResults.style.display = 'block';
            return;
        }

        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            
            if (item.type === 'section') {
                resultItem.classList.add('section-result');
                resultItem.innerHTML = `<strong>📁 قسم: ${item.title}</strong><p>${item.description}</p>`;
                resultItem.addEventListener('click', () => {
                    // التوجيه لصفحة القسم أو عرض محاضراته حسب هيكلة موقعك
                    window.location.href = `section.html?id=${item.id}`;
                });
            } else {
                const descriptionText = item.content ? item.content.substring(0, 60) : '';
                resultItem.innerHTML = `<strong>📄 محاضرة: ${item.title}</strong><p>${descriptionText}...</p>`;
                resultItem.addEventListener('click', () => {
                    window.location.href = `lecture.html?id=${item.id}`;
                });
            }

            searchResults.appendChild(resultItem);
        });

        searchResults.style.display = 'block';
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
});