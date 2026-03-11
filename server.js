const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const TXT_FILE = path.join(__dirname, 'bookings.txt');

const server = http.createServer((req, res) => {
    // CORS headers for local development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === '/api/book' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const b = JSON.parse(body);
                const timestamp = new Date().toLocaleString('ar-EG');

                // Format the record clearly
                const textRecord = `
=========================================
توقيت الطلب: ${timestamp}
الاسم الكامل: ${b.fullName}
رقم الهاتف: ${b.phone}
البريد الإلكتروني: ${b.email}
الحزمة المطلوبة: ${b.package}
معلومات الكلب: ${b.petInfo}
الرسالة: ${b.message}
=========================================
\n`;

                // Append to the text file
                fs.appendFileSync(TXT_FILE, textRecord);

                console.log('✅ تم حفظ طلب جديد في ملف bookings.txt');

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ success: false }));
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
    console.log(`📝 سيتم حفظ الحجوزات في: ${TXT_FILE}`);
});
